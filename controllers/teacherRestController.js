const teacherController = require('./modelControllers/teacherController');
const subjectController = require('./modelControllers/subjectController');
const groupController = require('./modelControllers/groupController');
const studentController = require('./modelControllers/studentController');
const relationController = require('./modelControllers/relationController');
const userController = require('./modelControllers/userController');

const mongoose = require("mongoose");

exports.getStartView = async function (req,res){
    let teacher = await teacherController.findById("60b9c97afea6841b94c2cbae");

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