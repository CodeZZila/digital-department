const express = require('express');
const teacherRestController = require('../controllers/teacherRestController');

const teacherRouter = express.Router();


teacherRouter.get('/', teacherRestController.getStartView)
teacherRouter.get('/groups', teacherRestController.getGroups)

module.exports=teacherRouter;