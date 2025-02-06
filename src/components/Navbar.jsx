import React from 'react';
import styles from '../styles/Weather.module.css';
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img 
          src="/assets/images/logo.png" 
          alt="Weather App Logo" 
          className={styles.logo}
        />
         <h2 style={{ textDecoration: "underline", textUnderlineOffset: "5px" }}>Weather<span style={{color:"orangeRed"}}>LY.</span></h2>
      </div>
    </div>
  );
};

export default Navbar;
