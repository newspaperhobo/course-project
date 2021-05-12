const data = require('../starter-files/data.js');

module.exports = {
    index: (req, res) => {
        res.render('pages/index', { data : data})
       },
    about: (req, res) => {
        res.render('pages/about')
       },
    login: (req, res) => {
        res.render('pages/login')
       },
}