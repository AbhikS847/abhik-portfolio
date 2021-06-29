import React from 'react';
import { Navbar,Nav,Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const Navigation = () => {
    return (
        <div>
        <Navbar className="text-center" style={{backgroundColor:'#005a8a'}} collapseOnSelect expand="lg" variant="dark">
  <Container>
  <LinkContainer to="/"><Navbar.Brand>theAbhik</Navbar.Brand></LinkContainer>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    <LinkContainer to="/intro"><Nav.Link>Intro</Nav.Link></LinkContainer>
    <LinkContainer to="/experience"><Nav.Link>Experience</Nav.Link></LinkContainer>
    <LinkContainer to="/gallery"><Nav.Link>Gallery</Nav.Link></LinkContainer>
    </Nav>
    <Nav>
      <LinkContainer to="/contact"><Nav.Link>Contact</Nav.Link></LinkContainer>
      <LinkContainer to="/about"><Nav.Link eventKey={2} href="#memes">
        About
      </Nav.Link></LinkContainer>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>   
        </div>
    )
}

export default Navigation
