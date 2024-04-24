import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h1>Welcome to Rock Paper Scissors Game!</h1>
          {/* Content goes here */}
        </Col>
      </Row>
    </Container>
  );
}

export default Home;