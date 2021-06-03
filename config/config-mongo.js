const mongoose = require('mongoose');

//const MONGO_USERNAME = 'user';
//const MONGO_PASSWORD = 'pass';
//const MONGO_HOSTNAME = '127.0.0.1';
//const MONGO_PORT = '27017';
// const MONGO_DB = 'dbTest';
//const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

mongoose.connect('mongodb+srv://kirast:adczsx123@cluster0.xaanr.mongodb.net/digital-department', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log('connection to database established');
    }).catch(err => {
    console.log(`db error: ${err.message}`);
    process.exit(-1);
});