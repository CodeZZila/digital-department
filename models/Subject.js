const {Schema, model} = require("mongoose");

const schema = new Schema({
    fullname: {type: String, required: true},
    abbreviation: {type: String, required: true},
});

module.exports = model("Subject", schema);