const {Schema, model, Types} = require("mongoose");

const schema = new Schema({
    nameGroup: {type: String, required: true},
    students:[{
        fullnameStudent: {type: String, required:true},
        marks: [{
            mark: {type: String},
            type: {type: String, required: true},
            numberOfLesson: {type: String, required: true},
            idRelation: {type: Types.ObjectId, required: true, ref:'Relation'}
        }]
    }]
});

module.exports = model("Group", schema);