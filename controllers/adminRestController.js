const subjectController = require('../controllers/subjectController');
const groupController = require('../controllers/groupController');
const teacherController = require('../controllers/teacherController');
const relationController = require('../controllers/relationController');


exports.getAll =  function (req, res) {
    groupController.findAll().then(groups => {
        subjectController.findAll().then(subjects=>{
            teacherController.findAll().then(teachers=>{
                relationController.findAll().then(relations=>{
                    res.render('admin')
                })
            })
        })
    })
}

exports.addSubject = function(req,res){
    console.log(req.body)
    res.send (subjectController.create(req.body));
}

exports.deleteSubject = function(req,res){
    console.log(req.params.id)
    res.send (subjectController.deleteById(req.params.id));
}

exports.addGroup = function (req, res) {
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
