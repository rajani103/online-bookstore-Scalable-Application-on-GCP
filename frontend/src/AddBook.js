import React, { useState } from 'react';
import axios from 'axios';

function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const addBook = async () => {
    await axios.post('/api/books', { title, author });
    window.location.reload();
  };

  return (
    <div>
      <h2>Add a Book</h2>
      <input
        placeholder="Book Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        style={{ marginLeft: '1rem' }}
      />
      <button onClick={addBook} style={{ marginLeft: '1rem' }}>
        Add
      </button>
    </div>
  );
}

export default AddBook;
