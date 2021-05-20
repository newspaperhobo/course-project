const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/codesquadComics', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true}, error => {
    if (error) {
        console.log('Error connecting to MongoDB server.')
    } else {
        console.log('Connection to MongoDB successful.')
    }
})