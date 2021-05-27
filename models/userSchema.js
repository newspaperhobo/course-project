const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: [true, 'Please enter your username.'],
        minLength: [5, 'Your username must be at least 5 characters long.']
    },
    password: {
        type: String,
        required: [true, 'Please enter your password.'],
        minLength: [10, 'Your password must be at least 5 characters long.']
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;