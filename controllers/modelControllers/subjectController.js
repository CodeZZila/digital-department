const Subject = require('../../models/Subject');

function exception (err) {
    if (err) return "error 400";
    return "ok";
}

exports.create = async function (object) {
    let subject = new Subject(object);
    await subject.save(exception);
};

exports.deleteById = async function (id) {
    await Subject.findByIdAndDelete(id, exception);
};

exports.update = async function (id, object) {
    await Subject.findByIdAndUpdate(id, object ,exception);
};

exports.findAll = async function () {
    return Subject.find({});
};

exports.findById = async function (id) {
    return Subject.findById(id);
};