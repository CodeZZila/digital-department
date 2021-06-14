const {Schema, model, Types} = require("mongoose");

const schema = new Schema({
    mark: {type: String, required: true},
    type: {type: String, required: true},
    numberOfLesson: {type: String, required: true},
    idStudent: {type: Types.ObjectId, ref:'Student', required: true},
    idSubject: {type: Types.ObjectId, ref:'Subject', required: true}
});

module.exports = model("Mark", schema);