const teacherController = require('./modelControllers/teacherController');
const subjectController = require('./modelControllers/subjectController');
const groupController = require('./modelControllers/groupController');
const studentController = require('./modelControllers/studentController');
const relationController = require('./modelControllers/relationController');

const mongoose = require("mongoose");

exports.getStartView = async function (req,res){
    //let teacher = await teacherController.findById("60b9c97afea6841b94c2cbae");
    //let subject = await subjectController.findById("60b8f08924646c312c43a57b");
    //let group = await groupController.findById("60bc8473eeb94439b41553b3");

    await studentController.create({
        fullNameStudent: "Арсений Антонов",
        idGroup: '60bc8473eeb94439b41553b3'
    });

    await studentController.create({
        fullNameStudent: "Артур Аликокович",
        idGroup: '60bc8473eeb94439b41553b3'
    });

    await studentController.create({
        fullNameStudent: "Арсений Аваков",
        idGroup: '60bc8473eeb94439b41553b3'
    });

    res.send("121212");
};
