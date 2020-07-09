import React, { useState, useEffect } from 'react';

import NavBar from "./Components/Navbar"
import Favorite from "./Components/Favorite"
import ProductBox from "./Components/ProductBox"
import Footer from "./Components/Footer"

import weblearn from "./logos/web-learn.png"
import starterlearn from "./logos/starter-learn.png"
import enkeltProd from "./logos/enkelt-produkt.png"


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/DayNightMode.css"


function App() {
  const [darkMode, setDarkMode] = useState()
 // React.useEffect(() => {
  //  localStorage.setItem('dark', JSON.stringify(darkMode))
  //}, [darkMode])


  //function getInitialMode() {
   // const savedMode = JSON.parse(localStorage.getItem('dark'))
   // return savedMode || false
  //}



  return (
      <>
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <NavBar setDarkMode={setDarkMode}/>
      <h1 className="topbar" >{darkMode ? "Dark Mode" : "Light Mode"}</h1>
      <Favorite/>
      <Favorite/>
      <Favorite/>
      <Favorite/>
      <Favorite/>
      <Favorite/>
      <Favorite/>
      <Favorite/>
      <Favorite/>
      <Favorite/>
      <Favorite/>
      <Favorite/>
      <Favorite/>
      <Favorite/>
      <Favorite/>
      <Favorite/>
      <Favorite/>

      <div className="product-container">

        <ProductBox 
        title="Enkeltvalg" 
        pic={enkeltProd}
        />

        <ProductBox 
        title="Starter Course" 
        pic={starterlearn}
        />

        <ProductBox 
        title="All-in" 
        pic={weblearn}
        />

      </div>
      <Footer/>
    </div>
    </>
  );
}     

export default App;
