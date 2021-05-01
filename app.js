const express = require ('express');
const morgan = require('morgan');

const app = express();

const PORT = 3000;

app.use(morgan('combined'));

// app.get('/', (req, res) => {
//  res.sendFile(__dirname + '/views/pages/index.html')
// })
// app.get('/about', (req, res) => {
//  res.sendFile(__dirname + '/views/pages/about.html')
// })
// app.get('/login', (req, res) => {
//  res.sendFile(__dirname + '/views/pages/login.html')
// })
// app.get('/admin-console', (req, res) => {
//  res.sendFile(__dirname + '/views/pages/admin.html')
// })
// app.get('/admin-console/create-book', (req, res) => {
//  res.sendFile(__dirname + '/views/pages/create.html')
// })

app.get('/', (req, res) => {
 res.send('This route points to the Home page')
})
app.get('/about', (req, res) => {
 res.send('This route points to the About page')
})
app.get('/login', (req, res) => {
 res.send('This route points to the Login page')
})
app.get('/admin-console', (req, res) => {
 res.send('This route points to the Admin Console page')
})
app.get('/admin-console/create-book', (req, res) => {
 res.send('This route points to the Create page')
})

app.listen(PORT, () => {
    console.log(`The server is listening on http://localhost:${PORT}`)
})
