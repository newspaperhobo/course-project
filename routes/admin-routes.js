const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin-controller');

router.route('/')
    .get(adminController.admin_home);

router.route('/create-book')
    .get(adminController.admin_book_create_get);

router.route('/update-book/:id')
    .get(adminController.admin_book_update_get);

module.exports = router;
