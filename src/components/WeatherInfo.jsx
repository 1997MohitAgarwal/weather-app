import React, { useContext } from "react";
import { WeatherContext } from "../contexts/WeatherContext";
import { WiHumidity, WiStrongWind } from 'react-icons/wi';
import { FaTemperatureHigh, FaLocationArrow } from 'react-icons/fa';
import styles from "../styles/weather.module.css";

const WeatherInfo = () => {
  const { weatherData, forecastData, unit, setUnit } =
    useContext(WeatherContext);

  const handleUnitSwitch = () => {
    const newUnit = unit === "metric" ? "imperial" : "metric";
    setUnit(newUnit);
    localStorage.setItem("unit", newUnit);
  };

  return (
    <div>
      <div className={styles.weatherContainer}>
        {weatherData && (
          <div className={styles.weatherCard}>
            <div className={styles.tempSection}>
              <h2 className={styles.city}>
                {weatherData.name},{" "}
                {weatherData.sys.country}
              </h2>
              <p className={styles.temp}>
                <FaTemperatureHigh />{"  "}
                <p>{weatherData.main.temp}°{unit === "metric" ? "C" : "F"}</p>
              </p>
              <div className={styles.weatherToday}>
              <img
                src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                alt="weather icon"
                className={styles.weatherIcon}
              />
              <p>
                {weatherData.weather[0].description.slice(0,1).toUpperCase()+weatherData.weather[0].description.slice(1)}
              </p>
              </div>
            </div>

            <div className={styles.details}>
              <p className={styles.weatherData}>
                <WiHumidity className={styles.icon} /> Humidity:{" "}
                {weatherData.main.humidity}%
              </p>
              <p className={styles.weatherData}>
                <WiStrongWind className={styles.icon} /> Wind:{" "}
                {weatherData.wind.speed} {unit === "metric" ? "m/s" : "mph"}
              </p>
            </div>
          </div>
        )}

        {forecastData && (
          <div className={styles.forecastMainContainer}>
            <div className={styles.forecastContainer}>
              {forecastData.map((forecast, index) => (
                <div className={styles.forecastItem} key={index}>
                  <p>{new Date(forecast.dt * 1000).toLocaleDateString()}</p>
                  <img
                    src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                    alt="forecast icon"
                  />
                  <p>
                    {forecast.main.temp}°{unit === "metric" ? "C" : "F"}
                  </p>
                </div>
              ))}
            </div>
            <button className={styles.unitSwitch} onClick={handleUnitSwitch}>
              Switch to {unit === "metric" ? "Fahrenheit" : "Celsius"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherInfo;
