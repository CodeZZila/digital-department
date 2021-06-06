const {Schema, model, Types} = require("mongoose");

const schema = new Schema({
    nameGroup: {type: String, required: true},
    students:[{
        fullNameStudent: {type: String, required: true},
        marks: [{
            mark: {type: String, required: true},
            type: {type: String, required: true},
            numberOfLesson: {type: String, required: true},
            idRelation: {type: Types.ObjectId, ref:'Relation'}
        }]
    }]
});

module.exports = model("Group", schema);