import React from 'react'
import {Card, Button} from 'react-bootstrap';
import "../styles/DayNightMode.css"
import "../styles/enkeltvalg-select.css"

import weblearn from "../logos/web-learn.png"
import starterlearn from "../logos/starter-learn.png"
import enkeltProd from "../logos/enkelt-produkt.png"

import tick from "../logos/tick.svg"

function ProductBox() {
    return (
        <div className="product-container">

            
            <Card border="light" className="product-box">
                <Card.Img variant="top" src={enkeltProd} id="product-pic"/>
                <Card.Body>
                <Card.Title id="align-text">Enkeltvalg</Card.Title>

                <select name="enkeltvalg" id="enkeltvalg" className="custom-select">
                    <option value="volvo">Html + CSS</option>
                    <option value="saab">JavaScripts</option>
                    <option value="mercedes">React</option>
                    <option value="audi">E-Business</option>
                </select>
                    <br/>
                    <br/>
                    <Card.Text id="text-col-strict">
                        <ul>
                            <li>Lifetime Acces <img src={tick} alt="" className="tick"/></li>
                            <li>Lifetime Acces <img src={tick} alt="" className="tick"/></li>
                            <li>Lifetime Acces <img src={tick} alt="" className="tick"/></li>
                            <li>Lifetime Acces <img src={tick} alt="" className="tick"/></li>
                            <li>Lifetime Acces <img src={tick} alt="" className="tick"/></li>
                        </ul>
                     Some quick example text to build on the card title and make up the bulk of
                     the card's content.
                     </Card.Text>
                     <br/>
                    <Button variant="primary" block>Vælg</Button>
                </Card.Body>
            </Card>

            <Card border="light" className="product-box">
                <Card.Img variant="top" src={starterlearn} id="product-pic"/>
                <Card.Body>
                <Card.Title id="align-text">Starter Course</Card.Title>
                    <Card.Text id="text-col-strict">
                        <ul>
                        <li>Lifetime Acces <img src={tick} alt="" className="tick"/></li>
                            <li>Lifetime Acces <img src={tick} alt="" className="tick"/></li>
                            <li>Lifetime Acces <img src={tick} alt="" className="tick"/></li>
                            <li>Lifetime Acces <img src={tick} alt="" className="tick"/></li>
                            <li>Lifetime Acces <img src={tick} alt="" className="tick"/></li>
                            <li>Lifetime Acces <img src={tick} alt="" className="tick"/></li>
                            <li>Lifetime Acces <img src={tick} alt="" className="tick"/></li>
                        </ul>
                        <br/>
                     Some quick example text to build on the card title and make up the bulk of
                     the card's content.
                     </Card.Text>
                     <br/>
                    <Button variant="primary" block>Vælg</Button>
                </Card.Body>
            </Card>

            <Card border="light" className="product-box">
                <Card.Img variant="top" src={weblearn} id="product-pic"/>
                <Card.Body>
                <Card.Title id="align-text">All-in</Card.Title>
                    <Card.Text id="text-col-strict">
                        <ul>
                            <li>Lifetime Acces <img src={tick} alt="" className="tick"/></li>
                            <li>Lifetime Acces <img src={tick} alt="" className="tick"/></li>
                            <li>Lifetime Acces <img src={tick} alt="" className="tick"/></li>
                            <li>Lifetime Acces <img src={tick} alt="" className="tick"/></li>
                            <li>Lifetime Acces <img src={tick} alt="" className="tick"/></li>
                            <li>Lifetime Acces <img src={tick} alt="" className="tick"/></li>
                            <li>Lifetime Acces <img src={tick} alt="" className="tick"/></li>
                            <li>Lifetime Acces <img src={tick} alt="" className="tick"/></li>
                            <li>Lifetime Acces <img src={tick} alt="" className="tick"/></li>
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