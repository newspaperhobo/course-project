const express = require('express');
const { admin_book_create_post } = require('../controllers/admin-controller');
const router = express.Router();
const adminController = require('../controllers/admin-controller');

router.route('/')
    .get(adminController.admin_home)
    .post(adminController.admin_book_create_post);

router.route('/create-book')
    .get(adminController.admin_book_create_get);
    
router.route('/update-book/:id')
    .get(adminController.admin_book_update_get)
    .put(adminController.admin_book_update_put);

module.exports = router;
