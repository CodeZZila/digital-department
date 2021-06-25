const teacherController = require('./modelControllers/teacherController');
const subjectController = require('./modelControllers/subjectController');
const groupController = require('./modelControllers/groupController');
const studentController = require('./modelControllers/studentController');
const relationController = require('./modelControllers/relationController');
const userController = require('./modelControllers/userController');
const markController = require('./modelControllers/markController');

const jwt = require('jsonwebtoken');
const {secret} = require('../config/config-jwt');
const sec = require('../controllers/authController');

const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);


exports.getStartView = async function (req, res) {
    let teacher = (await teacherController.findByIdUser(jwt.verify(sec.tok, secret).id))[0];
    let user = await userController.findById(teacher.userId);

    let relationsFromTeacher = await relationController.findAllByIdTeacher(teacher._id);
    // let subjectFromTeacher = [];
    // for await (let item of relationsFromTeacher) {
    //     subjectFromTeacher.push(await subjectController.findById(item.idSubject));
    // }
    let subjectFromTeacher = new Map();
    for await (let item of relationsFromTeacher) {
        let arrGroups = [];

        let relations = await relationController.findAllByIdSubjectAndIdTeacher(item.idSubject, teacher._id);
        for await (let item of relations) {
            arrGroups.push((await groupController.findById(item.idGroup)).nameGroup);
        }

        subjectFromTeacher.set(await subjectController.findById(item.idSubject), arrGroups);
    }

    res.render('teacherPageStart', {
        teacher: teacher,
        email: user.email,
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
        subject: subject,
        teacher: teacher
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

exports.save = async function(req, res){
    let teacher = (await teacherController.findByIdUser(jwt.verify(sec.tok, secret).id))[0];
    let user = await userController.findById(teacher.userId);

    if(req.body.name !== teacher.nameTeacher && req.body.name !== ''){
        teacher = await teacherController.updateName(teacher, req.body.name);
    }

    if(req.body.surname !== teacher.surnameTeacher && req.body.surname !== ''){
        teacher = await teacherController.updateSurname(teacher, req.body.surname);
    }

    if(req.body.email !== user.email && req.body.email !== ''){
        user = await userController.updateEmail(user, req.body.email);
    }

    if(req.body.pass !== ''){
        let newPassBcrypt = bcrypt.hashSync(req.body.pass, salt);
        user = await userController.updatePassword(user, newPassBcrypt);
    }

    res.send({
        teacher: teacher,
        email: user.email
    });
};