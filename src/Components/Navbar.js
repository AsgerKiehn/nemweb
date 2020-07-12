import React from 'react'
import {Nav, Navbar, NavDropdown, Button, Form, FormControl} from 'react-bootstrap';
import ToggleTheme from "./ToggleTheme"
import logo from "../logos/nem-udvikler.png"

import "../styles/TopImg.css"
import "../styles/DayNightMode.css"

function NavBar(props) {

    return (
      <div>

        <Navbar fixed="top" bg="light" expand="lg" id="navbar">
          <Navbar.Brand href="#home"><img src={logo} className="topimg" alt="" /></Navbar.Brand>
            <Navbar.Brand href="#home">NemUdvikler.dk</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                    <Nav.Link href="#home">Forside</Nav.Link>
                      <NavDropdown title="Kurser" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Link href="#link">Opdag</Nav.Link>
                      <NavDropdown title="Guides" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                      </NavDropdown>
                      <Nav.Link href="#">Community</Nav.Link>
                  </Nav>
                  <Nav>
                    <Nav.Link href="#link">Login / Opret</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
          </Navbar>
        </div>
    )
}

export default NavBar

//toggle color mode 5:55