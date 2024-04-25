import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container className="text-center mt-5">
      <Row>
        <Col>
          <h1>Welcome to the Rock Paper Scissors Game!</h1>
          <p>Select a mode to start playing:</p>
          <Link to="/normal">
            <Button variant="primary" className="mx-2">Normal Mode</Button>
          </Link>
          <Link to="/impossible">
            <Button variant="danger" className="mx-2">Impossible Mode</Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;