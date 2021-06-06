const {Schema, model, Types} = require("mongoose");

const schema = new Schema({
    nameGroup: {type: String, required: true}
});

module.exports = model("Group", schema);