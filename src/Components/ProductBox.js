import React from 'react'
import {Card, Button} from 'react-bootstrap';
import "../styles/DayNightMode.css"
import "../styles/enkeltvalg-select.css"

import weblearn from "../logos/all-in.svg"
import starterlearn from "../logos/starter-learn.svg"
import enkeltProd from "../logos/enkeltvalg.svg"

import tick from "../logos/tick.svg"

function ProductBox() {
    return (
        <div className="product-container">
    
            <Card border="light" className="product-box">
                <Card.Img variant="top" src={enkeltProd} id="product-picOne"/>
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
                    <div id="product-included">
                            <h6>- Lifetime Acces <img src={tick} alt="" className="tick"/></h6>
                            <h6>- Lifetime Acces <img src={tick} alt="" className="tick"/></h6>
                            <h6>- Lifetime Acces <img src={tick} alt="" className="tick"/></h6>
                            <h6>- Lifetime Acces <img src={tick} alt="" className="tick"/></h6>
                            <h6>- Lifetime Acces <img src={tick} alt="" className="tick"/></h6>
                     </div>
                     <br/>
                    <Button variant="primary" block>Vælg</Button>
                </Card.Body>
            </Card>

            <Card border="light" className="product-box">
                <Card.Img variant="top" src={starterlearn} id="product-pic"/>
                <Card.Body>
                <Card.Title id="align-text">Starter Course</Card.Title>
                    <div id="product-included">

                        <h6>Lifetime Acces <img src={tick} alt="" className="tick"/></h6>
                            <h6>- Lifetime Acces <img src={tick} alt="" className="tick"/></h6>
                            <h6>- Lifetime Acces <img src={tick} alt="" className="tick"/></h6>
                            <h6>- Lifetime Acces <img src={tick} alt="" className="tick"/></h6>
                            <h6>- Lifetime Acces <img src={tick} alt="" className="tick"/></h6>
                            <h6>- Lifetime Acces <img src={tick} alt="" className="tick"/></h6>

                        <br/>
                     </div>
                     <br/>
                    <Button variant="primary" block>Vælg</Button>
                </Card.Body>
            </Card>

            <Card border="light" className="product-box">
                <Card.Img variant="top" src={weblearn} id="product-pic"/>
                <Card.Body>
                <Card.Title id="align-text">All-in</Card.Title>
                    <div id="product-included">
                            <h6>- Lifetime Acces <img src={tick} alt="" className="tick"/></h6>
                            <h6>- Lifetime Acces <img src={tick} alt="" className="tick"/></h6>
                            <h6>- Lifetime Acces <img src={tick} alt="" className="tick"/></h6>
                            <h6>- Lifetime Acces <img src={tick} alt="" className="tick"/></h6>
                            <h6>- Lifetime Acces <img src={tick} alt="" className="tick"/></h6>
                            <h6>- Lifetime Acces <img src={tick} alt="" className="tick"/></h6>
                            <h6>- Lifetime Acces <img src={tick} alt="" className="tick"/></h6>
                            <h6>- Lifetime Acces <img src={tick} alt="" className="tick"/></h6>
                            <h6>- Lifetime Acces <img src={tick} alt="" className="tick"/></h6>
                     </div>
                    <Button variant="primary" block>Vælg</Button>
                </Card.Body>
            </Card>

        </div>
    )
}


export default ProductBox