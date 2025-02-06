# React + Vite

**Project Setup Steps Using Vite**

1)Create a new Vite project with React: npm create vite@latest weather-app --template react
2)Navigate to the project folder: cd weather-app
3)Install all necessary dependencies: npm install
4)Start the development server: npm run dev
5)Open the provided local URL in a browser to view the app.

1)Navbar Component

--Displays the app name with a styled design with a dark theme giving it a beautiful look.
2)Search Component

--Allows users to enter a city name and fetch weather data. It includes an input field, and a search button to ensure smooth interaction with the API.
3)WeatherInfo Component

--Displays fetched weather details like temperature, humidity, and wind speed. It dynamically updates based on context data and handles loading states to provide a seamless user experience.
4)ErrorComponent

--Handles errors by displaying toast notifications for invalid city names or network issues.
5)WeatherContext

--Manages global weather data, loading states, and errors. Provides the fetchWeather function to handle API calls and share data between components efficiently.


**Dependencies Used**

Vite → Fast development environment.
Axios → Handles API requests.
React Toastify → Displays toast notifications for errors.
CSS Modules → Used for styling the app.
React Icons → Icons for better visualization.

**APIs Used**

OpenWeatherMap API → Fetches real-time weather data, including temperature, humidity, wind speed, and weather conditions.
