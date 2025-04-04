const express = require('express');
const router = express.Router();
const db = require('../db');

// GET all books
router.get('/', async (req, res) => {
  const result = await db.query('SELECT * FROM books');
  res.json(result.rows);
});

// POST a new book
router.post('/', async (req, res) => {
  const { title, author } = req.body;
  const result = await db.query('INSERT INTO books (title, author) VALUES ($1, $2) RETURNING *', [title, author]);
  res.status(201).json(result.rows[0]);
});

module.exports = router;
