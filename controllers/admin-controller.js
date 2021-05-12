const { response } = require('express');
const data = require('../starter-files/data');
const { v4: uuid } = require('uuid');

module.exports = {
    admin_home: (req, res) => {
        res.render('pages/admin', { data: data })
       },
    admin_book_create_get: (req, res) => {
        res.render('pages/create')
       },
    admin_book_create_post: (req, res) => {
        const {_id = uuid(), title, author, publisher, genre, pages, rating, synopsis, image} = req.body;
        if (title != "") {
            data.push({_id, title, author, publisher, genre, pages, rating, synopsis, image})
            res.redirect('/admin-console');
        } else {
            res.render('/pages/create')
        }
       },
    admin_book_update_get: (req, res) => {
        const { id } = req.params;
        const foundBook = data.find(book => book._id === String(id));
        res.render('pages/update', {comicDetail: foundBook })
       },
    admin_book_update_put: (req, res) => {
        const { id } = req.params;
        const updatedTitle = req.body.title;
        const updatedAuthor = req.body.author;
        const updatedPublisher = req.body.publisher;
        const updatedGenre = req.body.genre;
        const updatedPages = req.body.pages;
        const updatedRating = req.body.rating;
        const updatedSynopsis = req.body.synopsis;
        const updatedImage = req.body.image;

        const foundBook = data.find(book => book._id === String(id));

        foundBook.title = updatedTitle
        foundBook.author = updatedAuthor
        foundBook.publisher = updatedPublisher
        foundBook.genre = updatedGenre
        foundBook.pages = updatedPages
        foundBook.rating = updatedRating
        foundBook.synopsis = updatedSynopsis
        foundBook.image = updatedImage

        res.redirect('/admin-console')
    }}