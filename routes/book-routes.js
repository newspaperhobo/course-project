const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book-controller');

router.route('/:id')
    .get(bookController.comic_detail_get)

module.exports = router;
