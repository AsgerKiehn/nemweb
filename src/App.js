import React, { useState, useEffect } from 'react';
import './App.css';
import NavBar from "./Components/Navbar"
import Favorite from "./Components/Favorite"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/DayNightMode.css"


function App() {
  const [darkMode, setDarkMode] = useState(getInitialMode())
  React.useEffect(() => {
    localStorage.setItem('dark', JSON.stringify(darkMode))
  }, [darkMode])


  function getInitialMode() {
    const savedMode = JSON.parse(localStorage.getItem('dark'))
    return savedMode || false
  }



  return (
      <>
    <div className={darkMode ? "dark-mode" : "light-mode"}>
      <NavBar setDarkMode={setDarkMode}/>
      <Favorite/>
      <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>
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
      <Favorite/>
      <Favorite/>
    </div>
    </>
  );
}     

export default App;
