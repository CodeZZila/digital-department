const express = require('express');
const mainRestController = require('../controllers/mainRestController');

const mainRouter = express.Router();


mainRouter.get('/', mainRestController.getAll )

module.exports=mainRouter;
