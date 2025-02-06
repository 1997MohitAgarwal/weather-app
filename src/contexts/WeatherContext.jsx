import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const WeatherContext = createContext();

const WeatherProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [city, setCity] = useState(localStorage.getItem('city') || 'London');
  const [unit, setUnit] = useState(localStorage.getItem('unit') || 'metric');
  const [error, setError] = useState(null);
  const apiKey = '453df673090e879e2acf4577cbb181fc';

  const fetchWeather = async () => {
    try {
      setError(null)
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${apiKey}`
      );
      setWeatherData(res.data);
  
      const forecastRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${apiKey}`
      );
  
      const dailyForecast = forecastRes.data.list.filter((item) =>
        item.dt_txt.includes("6:00:00")
      );

      setForecastData(dailyForecast);
      localStorage.setItem("city", city);
      
    } catch (err) {
      setError("Unable to fetch weather data. Please check your city name or network.");
    }
  };
  

  useEffect(() => {
    fetchWeather();
    const interval = setInterval(fetchWeather, 30000);
    return () => clearInterval(interval);
  }, [city, unit]);

  return (
    <WeatherContext.Provider value={{ weatherData, forecastData, error, city, setCity, unit, setUnit }}>
      {children}
    </WeatherContext.Provider>
  );
};

export { WeatherContext, WeatherProvider };
