import React from 'react'
import directions from "../../logos/directions.svg"
import questionThink from "../../logos/question-think.svg"
import "../../styles/why-nemudvikler.css"

function WhyNemUdvikler() {
    return (
        <div className="why-container">

            <div className="why-box">
                <h3>Hvorfor NemUdvikler?</h3>
                <img src={questionThink} alt="" className="whyOne"/>
            </div>

            <div className="why-box">
                <h3>Learn-By-Doing</h3>
                <br/>
                <h6>- Quizzer målrettet hvert emne</h6>
                <h6>- Mini-projekter </h6>
                <h6>- Teoretisk materiale mv.</h6>
                <h6>- Teoretisk materiale mv.</h6>
            </div>

            <div className="why-box">
                <h3>Slut med 'blind søgning'</h3>

                    <h5>
                        Øv med målrettet fokus
                    </h5>

                    <img src={directions} alt="" className="whyThree"/>

            </div>


        </div>
    )
}

export default WhyNemUdvikler