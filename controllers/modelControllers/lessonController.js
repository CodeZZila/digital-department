const Lesson = require('../../models/Lesson');

function exception (err) {
    if (err) return "error 400";
    return "ok";
}

exports.create = async function (object) {
    let subject = new Lesson(object);
    await subject.save(exception);
};

exports.deleteById = async function (id) {
    await Lesson.findByIdAndDelete(id, exception);
};

exports.update = async function (id, object) {
    await Lesson.findByIdAndUpdate(id, object ,exception);
};

exports.findAll = async function () {
    return Lesson.find({});
};

exports.findById = async function (id) {
    return Lesson.findById(id);
};