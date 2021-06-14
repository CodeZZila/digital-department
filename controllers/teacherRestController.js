const teacherController = require('./modelControllers/teacherController');
const subjectController = require('./modelControllers/subjectController');
const groupController = require('./modelControllers/groupController');
const studentController = require('./modelControllers/studentController');
const relationController = require('./modelControllers/relationController');
const markController = require('./modelControllers/markController');

const jwt = require('jsonwebtoken');
const {secret} = require('../config/config-jwt');
const sec = require('../controllers/authController');

exports.getStartView = async function (req, res) {
    let teacher = (await teacherController.findByIdUser(jwt.verify(sec.tok, secret).id))[0];

    let relationsFromTeacher = await relationController.findAllByIdTeacher(teacher._id);
    let subjectFromTeacher = [];
    for await (let item of relationsFromTeacher) {
        subjectFromTeacher.push(await subjectController.findById(item.idSubject));
    }

    res.render('teacherPageStart', {
        teacher: teacher,
        subjects: subjectFromTeacher
    });
};

exports.getGroups = async function (req, res) {
    let teacher = (await teacherController.findByIdUser(jwt.verify(sec.tok, secret).id))[0];
    let subject = await subjectController.findById(req.query.subjectId);

    let relations = await relationController.findAllByIdSubjectAndIdTeacher(subject._id, teacher._id);
    let groupFromTeacherAndSubject = [];
    for await (let item of relations) {
        groupFromTeacherAndSubject.push(await groupController.findById(item.idGroup));
    }
    res.render('teacherPageGroups', {
        groups: groupFromTeacherAndSubject,
        subject: subject
    });
};

exports.getTable = async function (req, res) {
    let teacher = (await teacherController.findByIdUser(jwt.verify(sec.tok, secret).id))[0];
    let group = await groupController.findById(req.query.groupId);
    let subject = await subjectController.findById(req.query.subjectId);
    let studentsFromGroup = await studentController.findByIdGroup(group._id);
    let marks = [];
    for await (let item of studentsFromGroup) {
        let el = (await markController.findByIdSubjectAndIdStudent(subject._id, item._id));
        for (let i of el){
            if (i !== undefined) {
                marks.push(i);
            }
        }
    }

    let set = new Set();
    for await (let item of marks) {
        set.add(JSON.stringify({
            type: item.type,
            numberOfLesson: item.numberOfLesson
        }));
    }
    let numbersAndType = [];
    for await (let item of set){
        numbersAndType.push(JSON.parse(item));
    }

    //console.log(numbersAndType);
    //checker

    res.render('teacherPageTable', {
        teacher: teacher,
        group: group,
        subject: subject,
        students: studentsFromGroup,
        marks: marks,
        numbersAndType: numbersAndType
    });
};

exports.postAddLesson = async function (req, res) {
    let group = await groupController.findById(req.body.idGroup);
    let subject = await subjectController.findById(req.body.idSubject);
    let studentsFromGroup = await studentController.findByIdGroup(group._id);

    for await (let item of studentsFromGroup) {
        await markController.create({
            mark: '0',
            type: req.body.type,
            numberOfLesson: req.body.numberOfLesson,
            idStudent: item._id,
            idSubject: subject._id
        });
    }
    res.redirect('/teacher/table?groupId=' + group._id + '&subjectId=' + subject._id);
};

exports.postRemoveLesson = async function (req, res) {
    let studentsFromGroup = await studentController.findByIdGroup(req.body.idGroup);
    let marks = [];
    for await (let item of studentsFromGroup) {
        let el = (await markController.findByIdSubjectAndIdStudent(req.body.idSubject, item._id));
        for (let i of el){
            if (i !== undefined) {
                marks.push(i);
            }
        }
    }

    for await (let item of marks){
        if(item.type === req.body.type && item.numberOfLesson === req.body.numberOfLesson){
            await markController.deleteById(item._id);
        }
    }

    res.redirect('/teacher/table?groupId=' + req.body.idGroup + '&subjectId=' + req.body.idSubject);
};

exports.postSaveMark = async function (req, res) {
    await markController.findByIdAndUpdateMark(req.body.idMark, req.body.newValue)
    res.send('ok');
};