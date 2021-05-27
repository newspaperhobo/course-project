const Comic = require('../models/comic-model');
const User = require('../models/userSchema');
const bcrypt = require('bcrypt');
const saltRounds = 10;
let error;

module.exports = {
    index: (req, res) => {
        Comic.find({}, (error, allBooks) => {
            if (error) {
                return error
            } else {
                res.render('pages/index', { data : allBooks})
            }
        }) 
    },
    about: (req, res) => {
        res.render('pages/about')
    },
    login_get: (req, res) => {
        res.render('pages/login', {error : error})
    },
    login_post: (req, res) => {
        User.findOne({ username: req.body.username }, (error, foundUser) => {
            if (error) {
                console.log(`The error at login is ${error}`);
            } else {
                bcrypt.compare(req.body.password, foundUser.password, (err, result) => {
                    if (result === true) {
                        console.log(`user ${foundUser.username} successfully logged in`);
                        res.redirect('/admin-console')
                    } else {
                        error = true;
                        res.render('pages/login', { error: error })
                    }
                });
            }
        })
    },
    register_get: (req, res) => {
        res.render('pages/register')
    },
    register_post: (req, res) => {
        bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
            const newUser = new User({
                username: req.body.username,
                password: hash,
            })
            newUser.save();
            res.redirect('/admin-console')
           });
    },
}