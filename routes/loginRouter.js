const express = require('express');
const loginController = require('../controllers/loginController');

const mainRouter = express.Router();


mainRouter.get('/', loginController.getAll )

module.exports=mainRouter;
