const express = require('express');
const adminRestController = require('../controllers/adminRestController');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: true});

const multer = require("multer");
const upload = multer({ dest: 'upload/'});
const type = upload.single('filedata');


const adminRouter = express.Router();

adminRouter.get('/', adminRestController.getAll );
adminRouter.post('/addSubject',urlencodedParser, adminRestController.addSubject);
adminRouter.delete('/subject/:id',urlencodedParser, adminRestController.deleteSubject);
adminRouter.post('/addGroup',urlencodedParser, adminRestController.addGroup);
adminRouter.delete('/group/:id',urlencodedParser, adminRestController.deleteGroup);
adminRouter.post('/addCadets', type, adminRestController.addCadets)



module.exports=adminRouter;
