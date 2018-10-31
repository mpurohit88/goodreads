const express = require('express');
const path = require('path');
const app = express();
const getBooks = require('./index').getBooks;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/search', function(req, res) {
    getBooks(req.query.q).then( books => res.send(books));
});
  
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

var port = process.env.PORT || 3001;

app.set('port', port);
app.listen(port);