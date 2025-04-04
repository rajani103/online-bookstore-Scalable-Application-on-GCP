import React from 'react';
import BookList from './BookList';
import AddBook from './AddBook';

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>📚 Online Bookstore</h1>
      <AddBook />
      <hr />
      <BookList />
    </div>
  );
}

export default App;
