const Teacher = require('../../models/Teacher');

function exception (err) {
    if (err) return "error 400";
    return `ok`;
}

exports.create = async function (object) {
    let teacher = new Teacher(object);
    await teacher.save(exception);
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

exports.findByIdUser = async function (idUser) {
    return Teacher.find({userId: idUser});
};