const express = require('express');
const adminController = require('../controllers/adminController');

const adminRouter = express.Router();

//adminRouter.get('/', adminController.getAll );
//adminRouter.post('/addSubject', adminController.addSubject);


const sub = require('../controllers/subjectController');
adminRouter.get('/', async (req, res) =>{
    let mass = await sub.findAll();
    console.log(mass);
});


module.exports=adminRouter;
