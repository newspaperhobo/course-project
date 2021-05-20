const { response } = require('express');
const Comic = require('../models/comic-model');

module.exports = {
    admin_home: (req, res) => {
        Comic.find({}, (error, allComics) => {
            if (error) {
                return error
            } else {
                res.render('pages/admin', { data: allComics });
            }
        })
    },
    admin_book_create_get: (req, res) => {
        res.render('pages/create')
    },
    admin_book_update_get: (req, res) => {
        const { id } = req.params;
        Comic.findOne({ _id: id }, (error, foundBook) => {
            if (error) {
                return error
            } else {
                res.render('pages/update', { comicDetail: foundBook });
            }
        })
    }
}