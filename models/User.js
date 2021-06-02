const {Schema, model, Types} = require("mongoose");

const schema = new Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, required: true},
    idTeacher:{type: Types.ObjectId, required: true, ref:'Teacher'}
});

module.exports = model("Teacher", schema);