const Comic = require('../models/comic-model');
const User = require('../models/userSchema');
const bcrypt = require('bcrypt');
const saltRounds = 10;
let error;
const passport = require('passport')

module.exports = {
    index: (req, res) => {
        Comic.find({}, (error, allBooks) => {
            if (error) {
                return error
            } else {
                res.render('pages/index', { data : allBooks, user: req.user})
            }
        }) 
    },
    about: (req, res) => {
        res.render('pages/about', { user: req.user })
    },
    login_get: (req, res) => {
        res.render('pages/login', {error : error, user: req.user })
    },
    login_post: (req, res) => {
        const user = new User ({
            username: req.body.username,
            password: req.body.password
        });

        req.login(user, (error) => {
            if (error) {
                console.log(error);
            } else {
                passport.authenticate('local')(req, res, () => {
                    res.redirect('/admin-console')
                })
            }
        })
    },
    register_get: (req, res) => {
        res.render('pages/register', { user: req.user })
    },
    register_post: (req, res) => {
      User.register({username: req.body.username}, req.body.password, (error, user) => {
          if (error) {
              console.log(error);
              res.redirect('/register');
          } else {
              passport.authenticate('local')(req, res, () => {
                  res.redirect('/admin-console')
              });
          }
      });
    },
    google_get:
    passport.authenticate('google', { scope: ['openid', 'profile', 'email']}),

    google_redirect_get: [
        passport.authenticate('google', { failureRedirect: '/login'}),
        function(req, res) {
            res.redirect('/admin-console');
        }
    ],
    logout:(req, res) => {
        req.logout();
        res.redirect('/');
    },
}