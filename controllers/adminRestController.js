const subjectController = require('./modelControllers/subjectController');
const groupController = require('./modelControllers/groupController');
const teacherController = require('./modelControllers/teacherController');
const relationController = require('./modelControllers/relationController');
const studentController = require('./modelControllers/studentController');
const userController = require('./modelControllers/userController');
const sendEmail = require('../config/sendEmail')
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);

const mongoose = require('mongoose');

const fs = require('fs')

exports.getAll =  function (req, res) {
    groupController.findAll().then(groups => {
        subjectController.findAll().then(subjects=>{
            teacherController.findAll().then(teachers=>{
                relationController.findAll().then(relations=>{
                    res.render('admin',{
                        subjects:subjects,
                        groups:groups,
                        teachers:teachers

                    })
                })
            })
        })
    })
}

exports.addSubject = async function(req,res){
    console.log(req.body)
    res.send (subjectController.create(req.body));
}

exports.deleteSubject = async function(req,res){
    console.log(req.params.id)
    res.send(subjectController.deleteById(req.params.id));
}

exports.addGroup = function (req, res) {
    console.log(req.body)

    res.send (groupController.create(req.body));
}

exports.deleteGroup = function(req,res){
    console.log(req.params.id)
    res.send (groupController.deleteById(req.params.id));
}


function translite(str) {
    const ru = ("А-а-Б-б-В-в-Ґ-ґ-Г-г-Д-д-Е-е-Ё-ё-Є-є-Ж-ж-З-з-И-и-І-і-Ї-ї-Й-й-К-к-Л-л-М-м-Н-н-О-о-П-п-Р-р-С-с-Т-т-У-у-Ф-ф-Х-х-Ц-ц-Ч-ч-Ш-ш-Щ-щ-Ъ-ъ-Ы-ы-Ь-ь-Э-э-Ю-ю-Я-я").split("-");
    const en = ("A-a-B-b-V-v-G-g-G-g-D-d-E-e-E-e-E-e-J-j-Z-z-I-i-I-i-I-i-Y-y-K-k-L-l-M-m-N-n-O-o-P-p-R-r-S-s-T-t-U-u-F-f-H-h-Ts-ts-Ch-ch-Sh-sh-SCH-sch---Y-y---E-e-YU-yu-YA-ya").split("-");
    let res = '';
    let i = 0, l = str.length;
    for(; i<l; i++)
    {
        const s = str.charAt(i), n = ru.indexOf(s);
        if(n >= 0) { res += en[n]; }
        else { res += s; }
    }
    return res;
}

exports.addTeacher = async function (req, res) {
    console.log(req.body);
    let name = req.body.nameTeacher;
    let surname =req.body.surnameTeacher;
    let email = req.body.email;
    let id = mongoose.Types.ObjectId();
    let login=translite(surname).replace(/\s/g, '').toLowerCase()+translite(name).replace(/\s/g, '').toLowerCase();
    let password=translite(surname).replace(/\s/g, '')+Math.round(99 + Math.random() * (999 - 99));

    let user = {_id:id, username:login,password:bcrypt.hashSync(password, salt), role:'TEACHER', email:'test-teacher@gmail.com'}
    let teacher = {nameTeacher:name,surnameTeacher:surname, userId:id}

    await sendEmail.send(email, name,surname,login, password);

    console.log(user)
    console.log(teacher)

    await userController.create(user);
    await teacherController.create(teacher);

}

exports.deleteTeacher = function(req,res){
    console.log(req.params.id);
    res.send (teacherController.deleteById(req.params.id));
}

exports.addRelation = function (req, res) {
    res.send (relationController.create(req.body));
}

exports.deleteRelation = function(req,res){
    console.log(req.params.id)
    res.send (relationController.deleteById(req.params.id));
}

exports.addCadets = async function (req, res) {
    let nameGroup = req.file.originalname.split('.')[0]
    if(!(await groupController.isExist(nameGroup))){
        await groupController.create({
            nameGroup: nameGroup
        })
    }
    fs.readFile('./uploads/'+req.file.originalname, "utf8", async function (error, data) {
        if (error) throw error;

        let group = await groupController.findByName(nameGroup)

        for await (let item of data.toString().split("\n")) {
            await studentController.create({
                fullNameStudent: item,
                idGroup: group[0]._id
            })
        }
    });
    fs.unlink('./uploads/'+req.file.originalname,function(err){
        if(err) return console.log(err);
        console.log('file deleted successfully');
    });
    // res.send('OK');
}


