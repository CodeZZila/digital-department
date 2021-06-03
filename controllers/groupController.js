const Group = require('../models/Group');

function exception (err) {
    if (err) return "error 400";
    return "ok";
}

exports.create = async function (object) {
    let subject = new Group(object);
    await subject.save(exception);
};

exports.deleteById = async function (id) {
    await Group.findByIdAndDelete(id, exception);
};

exports.update = async function (id, object) {
    await Group.findByIdAndUpdate(id, object ,exception);
};

exports.findAll = async function () {
    return Group.find({});
};

exports.findById = async function (id) {
    return Group.findById(id);
};