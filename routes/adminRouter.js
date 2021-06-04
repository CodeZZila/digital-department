const express = require('express');
const adminRestController = require('../controllers/adminRestController');

const adminRouter = express.Router();

adminRouter.get('/', adminRestController.getAll );
adminRouter.post('/addSubject', adminRestController.addSubject);
adminRouter.delete('/deleteSubject/:id', adminRestController.deleteSubject);


module.exports=adminRouter;
