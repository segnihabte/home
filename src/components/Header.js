import React from 'react'
import { Nav,Navbar,Container } from 'react-bootstrap'
import '../index.css'


function Header() {
  return (
    <header>
  <Navbar fixed='fluid'  className='nav1' variant='dark'>
    <Container >
    <Navbar.Brand className='brand' href="#home">SEGNI</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link className='About'>About
          </Nav.Link>
          <Nav.Link className='Services'>Services</Nav.Link>
          <Nav.Link className='Contact'>Contact</Nav.Link>
          </Nav>
    </Container>
  </Navbar>
    </header>
  )
}

export default Header