import React from 'react'
import {Card, Button} from 'react-bootstrap';
import "../styles/DayNightMode.css"

function ProductBox(props) {
    return (
        <div className="product-box">
            <Card border="light">
                <Card.Img variant="top" src={props.pic} id="product-pic"/>
                <Card.Body>
                <Card.Title id="align-text">{props.title}</Card.Title>
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