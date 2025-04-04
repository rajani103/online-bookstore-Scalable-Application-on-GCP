const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const booksRouter = require('./routes/books');

const app = express();
app.use(bodyParser.json());
app.use('/api/books', booksRouter);

app.get('/', (req, res) => {
  res.send('Welcome to Online Bookstore API');
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
