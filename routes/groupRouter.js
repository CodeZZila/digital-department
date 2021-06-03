const express = require('express');
const groupController = require('../controllers/groupController');

const groupRouter = express.Router();

groupRouter.get('/', groupController.getAll )

module.exports=groupRouter;
