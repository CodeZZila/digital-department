const Relation = require('../../models/Relation');

function exception (err) {
    if (err) return "error 400";
    return "ok";
}

exports.create = async function (object) {
    let subject = new Relation(object);
    await subject.save(exception);
};

exports.deleteById = async function (id) {
    await Relation.findByIdAndDelete(id, exception);
};

exports.update = async function (id, object) {
    await Relation.findByIdAndUpdate(id, object ,exception);
};

exports.findAll = async function () {
    return Relation.find({});
};

exports.findById = async function (id) {
    return Relation.findById(id);
};

exports.findAllByIdTeacher = async function (idTeacher) {
    return Relation.find({idTeacher: idTeacher});
};

exports.findAllByIdGroup = async function (idGroup) {
    return Relation.find({idGroup: idGroup});
};