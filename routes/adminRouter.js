const express = require('express');
const adminRestController = require('../controllers/adminRestController');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: true});


const adminRouter = express.Router();

adminRouter.get('/', adminRestController.getAll );
adminRouter.post('/addSubject',urlencodedParser, adminRestController.addSubject);
adminRouter.delete('/:id',urlencodedParser, adminRestController.deleteSubject);


module.exports=adminRouter;
