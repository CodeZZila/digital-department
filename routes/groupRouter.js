const express = require('express');
const groupController = require('../controllers/modelControllers/groupController');

const groupRouter = express.Router();

groupRouter.get('/', groupController.getAll)

module.exports=groupRouter;
