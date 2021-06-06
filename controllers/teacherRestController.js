const teacherController = require('./modelControllers/teacherController');
const subjectController = require('./modelControllers/subjectController');
const groupController = require('./modelControllers/groupController');
const relationController = require('./modelControllers/relationController');

const mongoose = require("mongoose");

exports.getStartView = async function (req,res){
    let teacher = await teacherController.findById("60b9c97afea6841b94c2cbae");
    let group = await groupController.findById("60b9d5cd2616091c5c1b2516");
    let subject = await subjectController.findById("60b8f08924646c312c43a57b");

    console.log();
    let output = await relationController.create({
        idSubject: subject._id,
        idGroup: group._id,
        idTeacher: teacher._id
    });

    res.send(output);
};
