const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://kirast:adczsx123@cluster0.xaanr.mongodb.net/digital-department', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('connection to database established');
    }).catch(err => {
    console.log(`db error: ${err.message}`);
    process.exit(-1);
});