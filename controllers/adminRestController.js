const subjectController = require('./modelControllers/subjectController');
const groupController = require('./modelControllers/groupController');
const teacherController = require('./modelControllers/teacherController');
const relationController = require('./modelControllers/relationController');
const studentController = require('./modelControllers/studentController');

const fs = require('fs')

exports.getAll =  function (req, res) {
    groupController.findAll().then(groups => {
        subjectController.findAll().then(subjects=>{
            teacherController.findAll().then(teachers=>{
                relationController.findAll().then(relations=>{
                    res.render('admin',{
                        subjects:subjects,
                        groups:groups
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

exports.addTeacher = function (req, res) {

    res.send (teacherController.create(req.body));
}

exports.deleteTeacher = function(req,res){
    console.log(req.params.id)
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


