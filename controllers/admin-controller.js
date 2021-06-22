const { response } = require('express');
const Comic = require('../models/comic-model');

module.exports = {
    admin_home: (req, res) => {
        if (req.isAuthenticated()) {
        Comic.find({}, (error, allComics) => {
            if (error) {
                return error
            } else {
                res.render('pages/admin', { data: allComics, user: req.user });
            }
        })
        }
    },
    admin_book_create_get: (req, res) => {
        if (req.isAuthenticated()) {
        res.render('pages/create', { user: req.user })
        }
    },
    admin_book_update_get: (req, res) => {
        if (req.isAuthenticated()) {
        const { id } = req.params;
        Comic.findOne({ _id: id }, (error, foundBook) => {
            if (error) {
                return error
            } else {
                res.render('pages/update', { comicDetail: foundBook, user: req.user });
            }
        })
    }
    }
}