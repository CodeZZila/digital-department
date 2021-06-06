const subjectController = require('./modelControllers/subjectController');
const groupController = require('./modelControllers/groupController');
const teacherController = require('./modelControllers/teacherController');
const relationController = require('./modelControllers/relationController');


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

exports.addCadets = function (req, res) {
    console.log("dfsdfsd")
    console.log(req.file)
}
