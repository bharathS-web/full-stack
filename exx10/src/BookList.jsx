// src/BookList.js
import React, { useState } from 'react';
import books from './data';
import './BookList.css';

const BookList = () => {
  const [releaseYear, setReleaseYear] = useState('');
  const [publisher, setPublisher] = useState('');

  const uniquePublishers = [...new Set(books.map(book => book.publisher))];
  const uniqueReleaseYears = [...new Set(books.map(book => String(book.release_year)))];

  const filteredBooks = books.filter(book => {
    return (
      (releaseYear ? book.release_year === parseInt(releaseYear) : true) &&
      (publisher ? book.publisher === publisher : true)
    );
  });
 
  return (
    <div>
      <h1>Book List</h1>

      <div>
        <label htmlFor="releaseYear">Filter by Release Year:</label>
        <select
          id="releaseYear"
          value={releaseYear}
          onChange={(e) => setReleaseYear(e.target.value)}
        >
          <option value="">All</option>
          {
            uniqueReleaseYears.map((yr,i)=>{
              <option key={i} value={yr}>{yr}</option>
            })
          }
          
        </select>

        <label htmlFor="publisher">Filter by Publisher:</label>
        <select
          id="publisher"
          value={publisher}
          onChange={(e) => setPublisher(e.target.value)}
        >
          <option value="">All</option>
          {uniquePublishers.map((pub, index) => (
            <option key={index} value={pub}>{pub}</option>
          ))}
        </select>
      </div>

      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Author</th>
            <th>Publisher</th>
            <th>Release Year</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.length > 0 ? (
            filteredBooks.map(book => (
              <tr key={book.id}>
                <td><img src={book.image} alt={book.title} /></td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.publisher}</td>
                <td>{book.release_year}</td>
                <td>${book.price.toFixed(2)}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" style={{ textAlign: 'center' }}>No Books Found For This Filter</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;