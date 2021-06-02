const {Schema, model, Types} = require("mongoose");

const schema = new Schema({
    date: {type: Date, required: true},
    title: {type: String, required: true},
    numberLesson: {type: Number, required: true, min: 1, max: 4},
    teacher:{type: String, default: ""},
    audience: {type: String, required: true, enum: ['230', '226', '224', '223', '221', '219', '219A']},
    group: {type: String, required: true},
    type: {type: String, required: true, enum: ['гз', 'пз', 'л', 'ср']},
});

module.exports = model("Lesson", schema);