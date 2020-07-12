import React from 'react'

import smartLearn from "../logos/web-dev.svg"
import "../styles/welcome-smart.css"


function Welcome() {
    return (
        <div className="welcome" >
            <div className="welcome-intro">
            </div>
            <img src={smartLearn} className="welcome-smart" alt=""/>
        </div>
    )
}

export default Welcome