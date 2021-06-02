const {Schema, model, Types} = require("mongoose");

const schema = new Schema({
    idSubject: {type: Types.ObjectId, required: true, ref:'Subject'},
    idGroup: {type: Types.ObjectId, required: true, ref:'Group'},
    idTeacher: {type: Types.ObjectId, required: true, ref:'Teacher'}
});

module.exports = model("Relation", schema);