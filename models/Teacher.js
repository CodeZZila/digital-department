const {Schema, model} = require("mongoose");

const schema = new Schema({
    nameTeacher: {type: String, required: true},
    surnameTeacher: {type: String, required: true}
});

module.exports = model("Teacher", schema);