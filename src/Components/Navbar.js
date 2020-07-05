import React from 'react'
import {Nav, Navbar, NavDropdown, Button, Form, FormControl} from 'react-bootstrap';
import Toggler from "./Toggler"

import "../styles/TopImg.css"
import logo from "../logos/flat.svg"
import "../styles/DayNightMode.css"

function NavBar(props) {

    return (
      <div>

        <Navbar fixed="top" bg="light" expand="lg">
          <Navbar.Brand href="#home"><img src={logo} className="topimg" alt="" /></Navbar.Brand>
            <Navbar.Brand href="#home">NemUdvikling.dk</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="#home">Hjem</Nav.Link>
                    <Nav.Link href="#link">Opdag</Nav.Link>
                      <NavDropdown title="Kurser" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                      </NavDropdown>
                  </Nav>
                  <Nav>
                    <Nav.Link href="#link">Login / Opret</Nav.Link>
                    <span style={{color: props.darkMode ? "grey" : "yellow"}}>☀︎</span>
                    <span className="toggle">
                      <input 
                      onChange={() => props.setDarkMode(prevMode => !prevMode)}
                      checked={props.darkMode}
                      type="checkbox"
                      className="checkbox"
                      id="checkbox"
                      />
                      <label htmlFor="checkbox"/>
                    </span>
                    <span style={{color: props.darkMode ? "slateblue" : "grey"}}>☾</span>

                  </Nav>
                </Navbar.Collapse>
          </Navbar>
        </div>
    )
}

export default NavBar

//toggle color mode 5:55