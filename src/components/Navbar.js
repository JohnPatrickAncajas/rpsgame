import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function NavigationBar() {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home">Rock Paper Scissors</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
