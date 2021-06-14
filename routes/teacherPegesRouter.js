const express = require('express');
const teacherRestController = require('../controllers/teacherRestController');

const teacherRouter = express.Router();
const roleMiddleware = require('../middleware/roleMiddleware');

teacherRouter.get('/', roleMiddleware(['TEACHER']), teacherRestController.getStartView)
teacherRouter.get('/groups', roleMiddleware(['TEACHER']), teacherRestController.getGroups)
teacherRouter.get('/table', roleMiddleware(['TEACHER']), teacherRestController.getTable)
teacherRouter.post('/table/addLesson', roleMiddleware(['TEACHER']), teacherRestController.postAddLesson)
teacherRouter.post('/table/remove', roleMiddleware(['TEACHER']), teacherRestController.postRemoveLesson)
teacherRouter.post('/table/save', roleMiddleware(['TEACHER']), teacherRestController.postSaveMark)


module.exports=teacherRouter;