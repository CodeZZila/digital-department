const express = require('express');
const adminRestController = require('../controllers/adminRestController');
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended: true});
const roleMiddleware = require('../middleware/roleMiddleware');

const multer = require("multer");
// const upload = multer({ dest: 'upload/'});
// const type = upload.single('filedata');

const storageConfig = multer.diskStorage({
    destination:(req,file, callback)=>{
        callback(null,'uploads');
    },
    filename:(req, file, callback)=>{
        callback(null,file.originalname);

    }
})
const upload = multer({storage:storageConfig})

const adminRouter = express.Router();

adminRouter.get('/', roleMiddleware(['ADMIN']), adminRestController.getAll );
adminRouter.post('/addSubject',urlencodedParser, adminRestController.addSubject);
adminRouter.delete('/subject/:id',urlencodedParser, adminRestController.deleteSubject);
adminRouter.post('/addGroup',urlencodedParser, adminRestController.addGroup);
adminRouter.delete('/group/:id',urlencodedParser, adminRestController.deleteGroup);
adminRouter.post('/addCadets', upload.single('filedata'), adminRestController.addCadets);
adminRouter.post('/addTeacher',urlencodedParser, adminRestController.addTeacher);
adminRouter.delete('/teacher/:id',urlencodedParser, adminRestController.deleteTeacher)



module.exports=adminRouter;
