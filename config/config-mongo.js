const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27020/digital-department', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('connection to database established');
    }).catch(err => {
    console.log(`db error: ${err.message}`);
    process.exit(-1);
});