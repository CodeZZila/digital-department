const Mark = require('../../models/Subject');

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