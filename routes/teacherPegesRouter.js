const express = require('express');
const teacherRestController = require('../controllers/teacherRestController');

const mainRouter = express.Router();


mainRouter.get('/', teacherRestController.getStartView)

module.exports=mainRouter;