import React, { useContext, useState } from 'react';
import { WeatherContext } from '../contexts/WeatherContext';
import styles from '../styles/weather.module.css';

const Search = () => {
  const { setCity } = useContext(WeatherContext);
  const [inputCity, setInputCity] = useState('');

  const handleSearch = () => {
    if (inputCity) {
      setCity(inputCity);
      setInputCity('');
    }
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Enter city name"
        value={inputCity}
        onChange={(e) => setInputCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default Search;
