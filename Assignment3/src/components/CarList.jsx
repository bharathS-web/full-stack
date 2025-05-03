import React, { useState } from 'react';
import cars from '../data/cars';
import './CarList.css'; 

const CarList = () => {
  const [filterType, setFilterType] = useState('');
  const [sortOption, setSortOption] = useState('');

  const filteredCars = cars
    .filter(car => !filterType || car.type === filterType)
    .sort((a, b) => {
      if (sortOption === 'name') return a.name.localeCompare(b.name);
      if (sortOption === 'price') return a.price - b.price;
      return 0;
    });

  return (
    <div className="car-container">
      <h2>🚗 Car Showroom</h2>

      <div className="controls">
        <select onChange={e => setFilterType(e.target.value)} value={filterType}>
          <option value="">All Types</option>
          <option value="Sedan">Sedan</option>
          <option value="Coupe">Coupe</option>
          <option value="SUV">SUV</option>
        </select>

        <select onChange={e => setSortOption(e.target.value)} value={sortOption}>
          <option value="">Sort By</option>
          <option value="name">Name</option>
          <option value="price">Price</option>
        </select>
      </div>

      <div className="car-list">
        {filteredCars.map(car => (
          <div key={car.id} className="car-card">
            <img src={car.image} alt={car.name} />
            <h3>{car.name}</h3>
            <p>Type: {car.type}</p>
            <p>Price: ${car.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarList;
