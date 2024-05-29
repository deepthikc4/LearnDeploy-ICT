import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './photos/ictk.jpeg'; 


const NavbarMain= () => {
  return (
    <div>
       <Navbar expand="lg" className="bg-body-tertiary navbar-custom">
      <Container>
        {/* Logo and Company Name */}
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            src={Logo} // Use your logo image
            width="30"
            height="30"
            className="d-inline-block align-top mr-2"
            alt="ICT KERALA"
          />
          <span className="logo-text">ICT INTERNSHIP PORTAL</span>
        </Navbar.Brand>

        {/* Navbar toggler for responsive design */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#login">Login</Nav.Link>
            <Nav.Link href="#about">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
      
    </div>
  )
}

export default NavbarMain
