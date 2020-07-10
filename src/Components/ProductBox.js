import React from 'react'
import {Card, Button} from 'react-bootstrap';
import "../styles/DayNightMode.css"

import weblearn from "../logos/web-learn.png"
import starterlearn from "../logos/starter-learn.png"
import enkeltProd from "../logos/enkelt-produkt.png"

function ProductBox() {
    return (
        <div className="product-container">

            
            <Card border="light" className="product-box">
                <Card.Img variant="top" src={enkeltProd} id="product-pic"/>
                <Card.Body>
                <Card.Title id="align-text">Enkeltvalg</Card.Title>
                    <Card.Text id="text-col-strict">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>

                        </ul>
                     Some quick example text to build on the card title and make up the bulk of
                     the card's content.
                     </Card.Text>
                    <Button variant="primary" block>Vælg</Button>
                </Card.Body>
            </Card>

            <Card border="light" className="product-box">
                <Card.Img variant="top" src={starterlearn} id="product-pic"/>
                <Card.Body>
                <Card.Title id="align-text">Starte Course</Card.Title>
                    <Card.Text id="text-col-strict">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>

                        </ul>
                     Some quick example text to build on the card title and make up the bulk of
                     the card's content.
                     </Card.Text>
                    <Button variant="primary" block>Vælg</Button>
                </Card.Body>
            </Card>

            <Card border="light" className="product-box">
                <Card.Img variant="top" src={weblearn} id="product-pic"/>
                <Card.Body>
                <Card.Title id="align-text">All-in</Card.Title>
                    <Card.Text id="text-col-strict">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>

                        </ul>
                     Some quick example text to build on the card title and make up the bulk of
                     the card's content.
                     </Card.Text>
                    <Button variant="primary" block>Vælg</Button>
                </Card.Body>
            </Card>

        </div>
    )
}


export default ProductBox