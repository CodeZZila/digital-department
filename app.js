const express = require('express');
const path = require("path");
const app = express();

const PORT = 8888;

// config mongodb
require('./config/config-mongo');


app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.get('/', (req,res)=>{
//     res.render('main')
// })



const mainRouter = require('./routes/mainRouter');
const adminRouter = require('./routes/adminRouter');


app.use('/', mainRouter);
app.use('/admin', adminRouter);


app.use(function (req, res, next) {
    res.status(404).render('404');
});

app.listen(PORT, () => {
    console.log('Server Start!!!!');
});