const Student = require('../../models/Student');

function exception (err) {
    if (err) return "error 400";
    return "ok";
}

exports.create = async function (object) {
    let student = new Student(object);
    await student.save(exception);
};

exports.deleteById = async function (id) {
    await Student.findByIdAndDelete(id, exception);
};

exports.update = async function (id, object) {
    await Student.findByIdAndUpdate(id, object ,exception);
};

exports.findAll = async function () {
    return Student.find({});
};

exports.findById = async function (id) {
    return Student.findById(id);
};