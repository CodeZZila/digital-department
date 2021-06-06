const {Schema, model, Types} = require("mongoose");

const schema = new Schema({
    fullNameStudent: {type: String, required: true},
    idGroup: {type: Types.ObjectId, ref:'Group', required: true}
});

module.exports = model("Student", schema);