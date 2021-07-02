const path = require('path');
const Shark = require('../models/Lesson');

exports.saveAndUpdateAll = function (req, res) {

}

exports.list = async function(req, res){

}

exports.getView = async function(req, res){
    res.render('guest', {
        audiences: ['230', '226', '224', '223', '221', '219', '219A']
    });
}