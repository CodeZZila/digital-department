const express = require('express');
const mainRestController = require('../controllers/mainRestController');
const controller = require('../controllers/authController');

const mainRouter = express.Router();


mainRouter.get('/', mainRestController.getAll )
mainRouter.get('/login', controller.loginPage);
mainRouter.post('/login', controller.login);

module.exports=mainRouter;
