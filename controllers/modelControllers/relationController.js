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

exports.deleteBySubject = async function (idSubject) {
    await Relation.deleteMany({idSubject})
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

exports.findAllByIdSubjectAndIdTeacher = async function (idSubject, idTeacher) {
    return Relation.find({idSubject: idSubject, idTeacher: idTeacher});
};

exports.deleteByGroup = async function(idGroup){
    return Relation.deleteMany({idGroup:idGroup})
}

exports.deleteByTeacher = async function(idTeacher){
    return Relation.deleteMany({idTeacher:idTeacher})
}