import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom"

import NavBar from "./Navbar"
import Favorite from "./Favorite"
import ProductBox from "./ProductBox"
import Footer from "./Footer"
import BottomInspire from "./BottomInspire"
import Welcome from "./Welcome"
import WbnPlayer from "./containers/WbnPlayer"

import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/DayNightMode.css"
import GlobalStyle from "../styles/video-styles/GlobalStyle"


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
      <Welcome/>

      <BrowserRouter basename="/react_videoplayer/">
      <>
          <Switch>
            <Route exact path="/" component={WbnPlayer} />
            <Route exact="/:activeVideo" component={WbnPlayer} />
          </Switch>
          <GlobalStyle/>
        </>
      </BrowserRouter>
      <ProductBox/>
      <BottomInspire/>
      <Footer/>
    </div>
  );
}     

export default App;


