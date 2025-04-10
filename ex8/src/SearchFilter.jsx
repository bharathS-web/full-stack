// src/SearchFilter.jsx 
import React, { useState } from 'react';
import './SearchFilter.css'; 

const SearchFilter = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const [items] = useState([
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Banana' },
    { id: 3, name: 'Cherry' },
    { id: 4, name: 'Dates' }, 
    { id: 5, name: 'Pine Apple' }, 
    { id: 6, name: 'Dragon Fruit'} 
  ]);

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-filter-container">
      <h2>Search Filter</h2>
      <input 
        type="text" 
        placeholder="Search fruits" 
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-filter-input" 
      />
      <ul className="search-filter-list">
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <li key={item.id}>
              {item.name}
            </li>
          ))
        ) : (
          <li>No data found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchFilter;