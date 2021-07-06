const subjectController = require('./modelControllers/subjectController');
const groupController = require('./modelControllers/groupController');
const teacherController = require('./modelControllers/teacherController');
const relationController = require('./modelControllers/relationController');
const studentController = require('./modelControllers/studentController');
const markController = require('./modelControllers/markController');
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
                        teachers:teachers,
                        relations:relations

                    })
                })
            })
        })
    })
}

exports.addSubject = async function(req,res){
    res.send (subjectController.create(req.body));
}

exports.getSubject = function all(req, res){
    subjectController.findAll().then(subjects=>{
        res.send(subjects)
    })
}

exports.deleteSubject = async function(req,res){
    console.log(req.params.id)
    await markController.deleteBySubject(req.params.id);
    await relationController.deleteBySubject(req.params.id)
    res.send(subjectController.deleteById(req.params.id));
}

exports.addGroup = function (req, res) {

    res.send (groupController.create(req.body));
}

exports.getGroup = function all(req, res){
    groupController.findAll().then(group=>{
        res.send(group)
    })
}


//TODO:  Проверить правильность работы
exports.deleteGroup = async function (req, res) {
    console.log(req.params.id);
    let students;
    students = await studentController.findByIdGroup(req.params.id);
    students.forEach(element => markController.deleteByStudent(element._id));
    await studentController.deleteByGroup(req.params.id);
    await relationController.deleteByGroup(req.params.id);
    res.send(groupController.deleteById(req.params.id));
}


function translite(str) {
    const ru = ("А-а-Б-б-В-в-Ґ-ґ-Г-г-Д-д-Е-е-Ё-ё-Є-є-Ж-ж-З-з-И-и-І-і-Ї-ї-Й-й-К-к-Л-л-М-м-Н-н-О-о-П-п-Р-р-С-с-Т-т-У-у-Ф-ф-Х-х-Ц-ц-Ч-ч-Ш-ш-Щ-щ-Ъ-ъ-Ы-ы-Ь-ь-Э-э-Ю-ю-Я-я").split("-");
    const en = ("A-a-B-b-V-v-G-g-G-g-D-d-E-e-E-e-E-e-J-j-Z-z-I-i-I-i-I-i-Y-y-K-k-L-l-M-m-N-n-O-o-P-p-R-r-S-s-T-t-U-u-F-f-H-h-Ts-ts-Ch-ch-Sh-sh-SCH-sch---Y-y---E-e-YU-yu-YA-ya").split("-");
    let res = '';
    for(let i=0;str.length; i++)
    {
        const s = str.charAt(i), n = ru.indexOf(s);
        if(n >= 0) { res += en[n]; }
        else { res += s; }
    }
    return res;
}

exports.addTeacher = async function (req, res) {
    let name = req.body.nameTeacher;
    let surname =req.body.surnameTeacher;
    let email = req.body.email;
    let id = mongoose.Types.ObjectId();

    let login=translite(surname).replace(/\s/g, '').toLowerCase()+translite(name).replace(/\s/g, '').toLowerCase();
    let password=translite(surname).replace(/\s/g, '')+Math.round(99 + Math.random() * (999 - 99));

    let user = {_id:id, username:login, password:bcrypt.hashSync(password, salt), role:'TEACHER', email:email}
    let teacher = {nameTeacher:name,surnameTeacher:surname, userId:id}

    await sendEmail.send(email, name,surname,login, password);

    await userController.create(user);
    await teacherController.create(teacher);

    res.send('OK!');
}

exports.getTeacher =  function all(req, res){
    teacherController.findAll().then(teacher=>{
        res.send(teacher)
    })
}

//FIXME
exports.deleteTeacher =async function(req,res){
    console.log(req.params.id);
    let teacher;
    teacher = await teacherController.findById(req.params.id);
    await userController.deleteById(teacher.userId);
    await relationController.deleteByTeacher(req.params.id);
    res.send (teacherController.deleteById(req.params.id));
}

exports.addRelation = function (req, res) {
    res.send (relationController.create(req.body));
}

exports.getRelation = function (req, res) {
    relationController.findAll().then(relation=>{
        subjectController.findAll().then(subject=>{
            teacherController.findAll().then(teacher=>{
                groupController.findAll().then(group=>{

                    let last =[];

                    for (let i =0; i< relation.length; i++){
                        let id=relation[i]._id;
                        let s;
                        let t;
                        let g;
                        for (let j=0; j< subject.length; j++){
                            if (relation[i].idSubject.toString()===subject[j]._id.toString()){
                                s = subject[j].abbreviation;
                            }
                        }
                        for (let j=0; j< teacher.length; j++){
                            if (relation[i].idTeacher.toString()===teacher[j]._id.toString()){
                                t = teacher[j].surnameTeacher
                            }
                        }
                        for (let j=0; j< group.length; j++){
                            if (relation[i].idGroup.toString()===group[j]._id.toString()){
                                g = group[j].nameGroup;
                            }
                        }
                        last.push({id:id,subject:s, teacher:t, group:g })
                    }
                    res.send(last);
                })
            })
        })

    })}

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
    res.send('OK');
}

exports.getEditGroup = async function(req, res){
    console.log(req.params.id)

    studentController.findByIdGroup(req.params.id).then(students=>{
        res.render('editGroup-admin',{
            students:students
        })
    })

}

