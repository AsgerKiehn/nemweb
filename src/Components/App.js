import React from 'react';
import { BrowserRouter, Route, Switch} from "react-router-dom"

import NavBar from "./Navbar"
import ProductBox from "./ProductBox"
import Footer from "./Footer"
import BottomInspire from "./BottomInspire"
import Welcome from "./ForsideIntroduktion/Welcome"
import WbnPlayer from "./webPlayer/WbnPlayer"
import WhyNemUdvikler from "./ForsideIntroduktion/WhyNemUdvikler"
import Quiz from "./Quizz/Quiz"


import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/DayNightMode.css"
import GlobalStyle from "../styles/video-styles/GlobalStyle"


function App() {

  return (
    <div>
      <NavBar/>

      <Welcome/>
      <WhyNemUdvikler/>

      <div className="player-container">
        <h2>Lær f.eks. fundamental HTML her:</h2>
        <br/>
        <BrowserRouter basename="/react_videoplayer/">
        <>
            <Switch>
              <Route exact path="/" component={WbnPlayer} />
              <Route exact path="/:activeVideo" component={WbnPlayer} />
            </Switch>
            <GlobalStyle/>
          </>
        </BrowserRouter>
      </div>

      <Quiz/>

        <div style={{backgroundColor: '#fff', marginTop: '60px'}}>
        <h2 style={{textAlign: 'center', paddingTop: '25px'}}>Hvordan vil du lære at programmere?</h2>
        <ProductBox/>
      </div>
      
      <BottomInspire/>
      <Footer/>
    </div>
  );
}     

export default App;


