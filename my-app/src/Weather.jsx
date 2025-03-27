// src/Weather.jsx
import React, { useState } from 'react';
import './Weather.css'; // Import the CSS file

const Weather = () => {
    const [location, setLocation] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [error, setError] = useState('');

    const getWeatherData = async () => {
        try {
            // Step 1: Get coordinates from Geocoding API
            const geocodeResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${location}`);
            const geocodeData = await geocodeResponse.json();

            if (!geocodeData.results || geocodeData.results.length === 0) {
                throw new Error('Location not found');
            }

            const { latitude, longitude } = geocodeData.results[0];

            // Step 2: Get weather data from Open Meteo API
            const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&current=temperature_2m,rain,wind_speed_10m&forecast_days=1`);
            const weatherData = await weatherResponse.json();

            setWeatherData(weatherData);
            setError('');
        } catch (err) {
            setError(err.message || 'Error fetching weather data. Please try again.');
            setWeatherData(null);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        getWeatherData();
    };

    return (
        <div className="weather-container">
            <h1>Weather App</h1>
            <form onSubmit={handleSubmit} className="weather-form">
                <input 
                    type="text" 
                    value={location} 
                    onChange={(e) => setLocation(e.target.value)} 
                    placeholder="Enter location" 
                    required 
                    className="weather-input"
                />
                <button type="submit" className="weather-button">Get Weather</button>
            </form>
            {error && <p className="error">{error}</p>}
            {weatherData && (
                <div className="weather-info">
                    <h2>Current Weather</h2>
                    <p>Temperature: {weatherData.current.temperature_2m}°C</p>
                    <p>Rain: {weatherData.current.rain} mm</p>
                    <p>Wind Speed: {weatherData.current.wind_speed_10m} km/h</p>
                </div>
            )}
        </div>
    );
};

export default Weather;