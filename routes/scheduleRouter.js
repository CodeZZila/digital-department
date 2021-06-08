    const express = require('express');
const scheduleRestController = require('../controllers/schduleRestController');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: true});

const scheduleRouter = express.Router();

scheduleRouter.get('/', scheduleRestController.getSchedule);
scheduleRouter.get('/edit', scheduleRestController.editSchedule)



module.exports = scheduleRouter;