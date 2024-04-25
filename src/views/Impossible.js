import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Impossible() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');

  const handleChoice = (choice) => {
    let newComputerChoice;

    if (choice === 'Rock') {
      newComputerChoice = 'Paper';
    } else if (choice === 'Paper') {
      newComputerChoice = 'Scissors';
    } else if (choice === 'Scissors') {
      newComputerChoice = 'Rock';
    }

    setResult('Computer wins!');

    setUserChoice(choice);
    setComputerChoice(newComputerChoice);
  };

  return (
    <div className="mt-2">
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h1>Rock Paper Scissors Game!</h1>
            <p>Choose your move:</p>
            <Button className="mx-1 my-2" onClick={() => handleChoice('Rock')}>Rock</Button>
            <Button className="mx-1 my-2" onClick={() => handleChoice('Paper')}>Paper</Button>
            <Button className="mx-1 my-2" onClick={() => handleChoice('Scissors')}>Scissors</Button>
            {userChoice && (
              <p>Your choice: {userChoice}</p>
            )}
            {computerChoice && (
              <p>Computer's choice: {computerChoice}</p>
            )}
            <p>{result}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Impossible;