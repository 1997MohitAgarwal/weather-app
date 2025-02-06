import React from 'react';
import { WeatherProvider } from './contexts/WeatherContext';
import Search from './components/Search';
import WeatherInfo from './components/WeatherInfo';
import ErrorComponent from './components/ErrorComponent';
import Navbar from './components/Navbar';
import { ToastContainer } from "react-toastify";
import './App.css';

const App = () => {
  return (
    <WeatherProvider>
      <div className="App">
        <Navbar/>
        <Search />
        <ErrorComponent />
        <WeatherInfo />
        <ToastContainer/>
      </div>
    </WeatherProvider>
  );
};

export default App;
