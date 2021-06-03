const express = require('express');
const adminController = require('../controllers/adminController');

const adminRouter = express.Router();

adminRouter.get('/', adminController.getAll );
adminRouter.post('/addSubject', adminController.addSubject);


module.exports=adminRouter;
