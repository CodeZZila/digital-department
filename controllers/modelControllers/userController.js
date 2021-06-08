const User = require('../../models/User');
const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'digitaldepartment22@gmail.com',
        pass: 'zsxadc1234',
    },
})



function exception (err) {
    if (err) return "error 400";
    return "ok";
}



function enterEmail(){

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

exports.findAll = async function () {
    return User.find({});
};

exports.findById = async function (id) {
    return User.findById(id);
};