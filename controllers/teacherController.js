const Teacher = require('../models/Teacher');

function exception (err) {
    if (err) return "error 400";
    return `ok`;
}

exports.create = async function (object) {
    let subject = new Teacher(object);
    await subject.save(exception);
};

exports.deleteById = async function (id) {
    await Teacher.findByIdAndDelete(id, exception);
};

exports.update = async function (id, object) {
    await Teacher.findByIdAndUpdate(id, object ,exception);
};

exports.findAll = async function () {
    return Teacher.find({});
};

exports.findById = async function (id) {
    return Teacher.findById(id);
};