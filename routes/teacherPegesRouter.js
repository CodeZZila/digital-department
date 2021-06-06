const express = require('express');
const teacherRestController = require('../controllers/teacherRestController');

const teacherRouter = express.Router();
const roleMiddleware = require('../middleware/roleMiddleware');

teacherRouter.get('/', roleMiddleware(['TEACHER']), teacherRestController.getStartView)
teacherRouter.get('/groups', roleMiddleware(['TEACHER']), teacherRestController.getGroups)

module.exports=teacherRouter;