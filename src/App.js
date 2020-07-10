import React, { useState, useEffect } from 'react';

import NavBar from "./Components/Navbar"
import Favorite from "./Components/Favorite"
import ProductBox from "./Components/ProductBox"
import Footer from "./Components/Footer"
import BottomInspire from "./Components/BottomInspire"
import Welcome from "./Components/Welcome"

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
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <NavBar setDarkMode={setDarkMode}/>
      <h1 className="topbar" >{darkMode ? "Dark Mode" : "Light Mode"}</h1>
      <Welcome/>
      <Favorite/>
      <Favorite/>
      <Favorite/>
      <Favorite/>
      <Favorite/>
      <Favorite/>
      <ProductBox />
      <BottomInspire/>
      <Footer/>
    </div>
  );
}     

export default App;
