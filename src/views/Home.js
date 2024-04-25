import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div style={{ marginTop: '2rem' }}>
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h1>Welcome to Rock Paper Scissors Game!</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
