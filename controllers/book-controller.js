const data = require('../starter-files/data');
const { v4: uuid } = require ('uuid');
const { response } = require('express');

module.exports = {
    single_book_get: (req, res) => {
        const { id } = req.params;
        const foundBook = data.find(book => book._id === String(id));
         res.render('pages/book', { comicDetail: foundBook })
        },
    new_single_book_post: (req, res) => {
    const {_id = uuid(), title, author, publisher, genre, pages, rating, synopsis, image} = req.body;
        if (title != "") {
        data.push({_id, title, author, publisher, genre, pages, rating, synopsis, image})
        res.redirect('/admin-console');
        } else {
        res.render('pages/create')
        }
           },
    update_single_book_put: (req, res) => {
        const { id } = req.params;
        const { title, author, publisher, genre, pages, rating, synopsis, image} = req.body;
        
        const updatedTitle = title;
        const updatedAuthor = author;
        const updatedPublisher = publisher;
        const updatedGenre = genre;
        const updatedPages = pages;
        const updatedRating = rating;
        const updatedSynopsis = synopsis;
        const updatedImage = image;
        
        const foundBook = data.find(book => book._id === String(id));
        console.log(foundBook);

        foundBook.title = updatedTitle
        foundBook.author = updatedAuthor
        foundBook.publisher = updatedPublisher
        foundBook.genre = updatedGenre
        foundBook.pages = updatedPages
        foundBook.rating = updatedRating
        foundBook.synopsis = updatedSynopsis
        foundBook.image = updatedImage

        res.redirect('/admin-console');
        
    },
    single_book_delete: (req, res) => {
        const { id } = req.params;
        const foundBook = data.find(book => book._id === String(id));
        const index = data.indexOf(foundBook);
        data.splice(index, 1);
        res.redirect('/admin-console')
    }
}