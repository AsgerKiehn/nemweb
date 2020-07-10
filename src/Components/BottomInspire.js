import React from 'react'
import {Card} from 'react-bootstrap';

import workingAway from "../logos/working-from-anywhere.svg"
import "../styles/bottom-inspire.css"

function bottomInspire() {
    return (
        <div className="inspire-conatiner">

            <div className="good-advice">
                <Card bg="Dark" border="light" className="inspire-box">
                    <Card.Body>
                    <Card.Title id="align-text">5 Gode Råd Til Den (måske) Nye Udvikler</Card.Title>
                        <Card.Text id="text-col-strict">
                               <p>- Værd ikke bange for den røde farve (ERROR)! Lær istedet a </p>
                               <p>- Værd ikke bange for den røde farve (ERROR)!</p>
                               <p>- Værd ikke bange for den røde farve (ERROR)!</p>
                               <p>- Værd ikke bange for den røde farve (ERROR)!</p>
                               <p> - Værd ikke bange for den røde farve (ERROR)! Lær istedet at elske den. Læs f.eks. her: <a href="https://medium.com/better-programming/learning-to-code-fall-in-love-with-errors-e502ed4b4624" target="_blank" rel="noopener noreferrer">Love Errors</a></p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>

            <img src={workingAway} className="bottom-inspire-pic" alt=""/>

        </div>
    )
}




export default bottomInspire