const express = require('express');
const path = require("path");
const app = express();

const PORT = 8888;

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', (req,res)=>{
    res.render('login')
})
app.listen(PORT, () => {
    console.log('Server Start!!!!');
});