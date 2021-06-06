const express = require('express');
const teacherRestController = require('../controllers/teacherRestController');

const teacherRouter = express.Router();
const multer = require("multer");

teacherRouter.get('/', roleMiddleware(['TEACHER']), teacherRestController.getStartView)
teacherRouter.get('/groups', roleMiddleware(['TEACHER']), teacherRestController.getGroups)

module.exports=teacherRouter;