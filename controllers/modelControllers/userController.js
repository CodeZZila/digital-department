const User = require('../../models/User');

function exception (err) {
    if (err) return "error 400";
    return "ok";
}

exports.create = async function (object) {
    let subject = new User(object);
    await subject.save(exception);
};

exports.deleteById = async function (id) {
    await User.findByIdAndDelete(id, exception);
};

exports.update = async function (id, object) {
    await User.findByIdAndUpdate(id, object ,exception);
};

exports.findAll = async function () {
    return User.find({});
};

exports.findById = async function (id) {
    return User.findById(id);
};