const data = require('../starter-files/data');

module.exports = {
    comic_detail_get: (req, res) => {
        const { id } = req.params;
        const foundBook = data.find(book => book._id === String(id));
         res.render('pages/book', { comicDetail: foundBook })
        }
}