const { response } = require('express');
const Comic = require('../models/comic-model');

module.exports = {
    single_book_get: (req, res) => {
        const { id } = req.params;
        Comic.findOne({ _id: id}, (error, foundBook) => {
            if (error) {
                return error
            } else {
                res.render('pages/book', { comicDetail: foundBook })
            }
        })
    },
    new_single_book_post: (req, res) => {
        const newComic = new Comic({
            title: req.body.title,
            author: req.body.author,
            publisher: req.body.publisher,
            genre: req.body.genre,
            pages: req.body.pages,
            rating: req.body.rating,
            synopsis: req.body.synopsis,
            image: req.body.image,
        })
        newComic.save();
        res.redirect('/admin-console', );
    },
    update_single_book_put: (req, res) => {
        const { id } = req.params;
        Comic.findByIdAndUpdate(id, {$set: {
            title: req.body.title,
            author: req.body.author,
            publisher: req.body.publisher,
            genre: req.body.genre,
            pages: req.body.pages,
            rating: req.body.rating,
            synopsis: req.body.synopsis,
            image: req.body.image,
        }}, { new: true }, error => {
            if (error) {
                return error
            } else {
                res.redirect('/admin-console');
            }
        })
    },
    single_book_delete: (req, res) => {
        const { id } = req.params;
        Comic.deleteOne({ _id: id }, error => {
            if (error) {
                return error
            } else {
                res.redirect('/admin-console')
            }
        })
    },
}
