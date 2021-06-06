const {Schema, model, Types} = require("mongoose");

const schema = new Schema({
    nameTeacher: {type: String, required: true},
    surnameTeacher: {type: String, required: true},
    userId: {type: Types.ObjectId, ref: 'User', required: true}
});

module.exports = model("Teacher", schema);