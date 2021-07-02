const path = require('path');
const Shark = require('../models/Lesson');

exports.allAudiences = async function (req, res) {
    res.send(['230', '226', '224', '223', '221', '219', '219A']);
}

exports.saveAll = async function(req, res){
    if(req.body.arr === undefined){
        Shark.find({date: req.body.date}, function (err, data) {
            if (err) return res.send(500, err);
        }).remove();
    }else {
        let arrShark = [];

        req.body.arr.forEach(x => {
            let t = new Shark(x);
            arrShark.push(t);
        });

        Shark.find({date: arrShark[0].date}, function (err, data) {
            if (err) return res.send(500, err);
        }).remove();

        for await (const el of arrShark) {
            await el.save();
            return res.send('ok');
        }
    }
}

exports.getData = async function(req, res){
    Shark.find({}, function (err, data) {
        if (err) return res.send(500, err);

        let output = data.filter(x =>{
            let tempDate = new Date(x.date);
            if(tempDate.toISOString().split('T')[0] === req.body.date){
                return true;
            }
        });
        res.send(output);
    });
}

exports.editSchedule = function (req, res) {
    res.render('editSchedule', {
        audiences: ['230', '226', '224', '223', '221', '219', '219A']
    });
};

exports.getSchedule = async function(req, res){
    res.render('watchSchedule', {
        audiences: ['230', '226', '224', '223', '221', '219', '219A']
    });
}