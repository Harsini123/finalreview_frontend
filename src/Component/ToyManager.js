import React, { useState, useEffect,Link } from 'react';
import axios from 'axios';
import './ToyManager.css';


const API_BASE_URL = 'http://localhost:8086/api/books';

function ToyManager() {
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState({ title: '', author: '', description: '' });

  useEffect(() => {
    axios.get(API_BASE_URL)
      .then(response => setBooks(response.data))
      .catch(error => console.error(error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const addBook = () => {
    axios.post(API_BASE_URL, newBook)
      .then(response => {
        setBooks([...books, response.data]);
        setNewBook({ title: '', author: '', description: '' });
      })
      .catch(error => console.error(error));
  };

  const updateBook = (id) => {
    axios.put(`${API_BASE_URL}/${id}`, newBook)
      .then(response => {
        const updatedBooks = books.map(book => (book.id === id ? response.data : book));
        setBooks(updatedBooks);
        setNewBook({ title: '', author: '', description: '' });
      })
      .catch(error => console.error(error));
  };

  const deleteBook = (id) => {
    axios.delete(`${API_BASE_URL}/${id}`)
      .then(() => {
        const updatedBooks = books.filter(book => book.id !== id);
        setBooks(updatedBooks);
      })
      .catch(error => console.error(error));
  };

  return (
    <div className="toy-manager">
      <h2>BOOK DETAILS</h2>
      
      
      <div>
        <h2>ADD BOOK</h2>
        <div className="book-form">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newBook.title}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="author"
            placeholder="Author"
            value={newBook.author}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={newBook.description}
            onChange={handleInputChange}
          />
          <button onClick={addBook}>Add</button>
        </div>
      </div>
      <div>
        <h2>UPDATE OR DELETE</h2>
        <ul className="book-list">
          {books.map(book => (
            <li key={book.id} className="book-item">
              <span>Title: {book.title}</span>
              <span>Author: {book.author}</span>
              <span>Description: {book.description}</span>
              <div className="book-buttons">
                <button onClick={() => updateBook(book.id)}>Update</button>
                <button onClick={() => deleteBook(book.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    
  );
}

export default ToyManager;