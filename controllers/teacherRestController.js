const teacherController = require('./modelControllers/teacherController');
const subjectController = require('./modelControllers/subjectController');
const groupController = require('./modelControllers/groupController');
const studentController = require('./modelControllers/studentController');
const relationController = require('./modelControllers/relationController');
const userController = require('./modelControllers/userController');

const jwt = require('jsonwebtoken');
const {secret} = require('../config/config-jwt');
const sec = require('../controllers/authController');


exports.getStartView = async function (req,res){
    let idUser = jwt.verify(sec.tok, secret).id;

    let teacher = await teacherController.findByIdUser(idUser);

    let relationsFromTeacher = await relationController.findAllByIdTeacher("60b9c97afea6841b94c2cbae");
    let subjectFromTeacher = [];
    for await (let item of relationsFromTeacher){
        subjectFromTeacher.push(await subjectController.findById(item.idSubject));
    }

    res.render('teacherPageStart', {
        teacher: teacher,
        subjects: subjectFromTeacher
    });
};

exports.getGroups = async function (req,res){
    let relations = await relationController.findAllByIdSubjectAndIdTeacher(req.query.subjectId, req.query.teacherId);
    let groupFromTeacherAndSubject = [];
    for await (let item of relations){
        groupFromTeacherAndSubject.push(await groupController.findById(item.idGroup));
    }
    res.render('teacherPageGroups', {
        groups: groupFromTeacherAndSubject
    });
};