import React from 'react'
import {Nav, Navbar, NavDropdown, Button, Form, FormControl} from 'react-bootstrap';
import "../styles/TopImg.css"
import logo from "../logos/flat.svg"

function NavBar() {
    return (
        <div>
        <Navbar fixed="top" bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <img
            src={logo}
            className="topimg"
            alt=""
          />
        </Navbar.Brand>
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
              <Nav.Link href="#link">Login / Opret</Nav.Link>
            </Navbar.Collapse>
          </Navbar>
        </div>
    )
}

export default NavBar