const express = require ('express');
const morgan = require('morgan');
const PORT = 3000;
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan('combined'));
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
 res.render('pages/index')
})
app.get('/about', (req, res) => {
 res.render('pages/about')
})
app.get('/login', (req, res) => {
 res.render('pages/login')
})
app.get('/admin-console', (req, res) => {
 res.render('pages/admin')
})
app.get('/admin-console/create-book', (req, res) => {
 res.render('pages/create')
})
app.get('/book/:id', (req, res) => {
//     let params = req.params;
//     let bookID = params.id;
//  res.render(`pages/book/${bookID}`)
 res.render('pages/book')
})
app.get('/admin-console/update-book/:id', (req, res) => {
 res.render('pages/update')
})

app.listen(PORT, () => {
    console.log(`The server is listening on http://localhost:${PORT}`)
})
