import React, { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { WeatherContext } from "../contexts/WeatherContext";
import "react-toastify/dist/ReactToastify.css";

const ErrorComponent = () => {
  const {error}=useContext(WeatherContext)
  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        theme: "light",
      });
    }
  }, [error]);

  return null;
};

export default ErrorComponent;
