const User = require('../../models/User');

function exception (err) {
    if (err) return "error 400";
    return "ok";
}

exports.create = async function (object) {
    let user = new User(object);
    await user.save(exception);
};

exports.deleteById = async function (id) {
    await User.findByIdAndDelete(id, exception);
};

exports.update = async function (id, object) {
    await User.findByIdAndUpdate(id, object ,exception);
};

exports.updateEmail= async function(user, newEmail){
    let userNew = await User.findOneAndUpdate({_id: user._id}, {email: newEmail}, {new: true})
    return userNew
}

exports.updatePassword= async function(user, newPassword){
    let userNew = await User.findOneAndUpdate({_id: user._id}, {password: newPassword}, {new: true})
    return userNew
}

exports.findAll = async function () {
    return User.find({});
};

exports.findById = async function (id) {
    return User.findById(id);
};