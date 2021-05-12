const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book-controller');

router.route('/:id')
    .get(bookController.single_book_get)
    .post(bookController.new_single_book_post)
    .put(bookController.update_single_book_put)
    .delete(bookController.single_book_delete)

module.exports = router;
