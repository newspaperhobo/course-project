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
    admin_book_update_get: (req, res) => {
        const { id } = req.params;
        const foundBook = data.find(book => book._id === String(id));
        res.render('pages/update', {comicDetail: foundBook })
       },
}