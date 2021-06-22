const Mark = require('../../models/Mark');

function exception (err) {
    if (err) return "error 400";
    return "ok";
}

exports.create = async function (object) {
    let mark = new Mark(object);
    await mark.save(exception);
};

exports.deleteById = async function (id) {
    await Mark.findByIdAndDelete(id, exception);
};

exports.update = async function (id, object) {
    await Mark.findByIdAndUpdate(id, object ,exception);
};

exports.findAll = async function () {
    return Mark.find({});
};

exports.findById = async function (id) {
    return Mark.findById(id);
};

exports.findByIdSubjectAndIdStudent = async function (idSubject, idStudent) {
    return Mark.find({idStudent: idStudent, idStudent: idStudent});
};

exports.deleteBySubject = async function(idSubject){
    return Mark.deleteMany({idSubject:idSubject})
}

exports.deleteByStudent= async function(idStudent){
    return Mark.deleteMany({idStudent:idStudent})
}

exports.findByIdAndUpdateMark = async function (id, value) {
    let mark = await Mark.findById(id);
    mark.mark = value;
    return Mark.findByIdAndUpdate(id, mark, { useFindAndModify: false });
};