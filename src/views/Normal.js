import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Normal() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');

  const handleChoice = (choice) => {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerRandomChoice = choices[randomIndex];

    if (choice === computerRandomChoice) {
      setResult('It\'s a tie!');
    } else if (
      (choice === 'Rock' && computerRandomChoice === 'Scissors') ||
      (choice === 'Paper' && computerRandomChoice === 'Rock') ||
      (choice === 'Scissors' && computerRandomChoice === 'Paper')
    ) {
      setResult('You win!');
    } else {
      setResult('Computer wins!');
    }

    setUserChoice(choice);
    setComputerChoice(computerRandomChoice);
  };

  return (
    <div className="mt-2">
      <Container>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h1 className="mt-3">Rock Paper Scissors Game!</h1>
            <p>Against Normal Computer, choose your move!</p>
            <Button className="mx-1 my-1" onClick={() => handleChoice('Rock')}>Rock</Button>
            <Button className="mx-1 my-1" onClick={() => handleChoice('Paper')}>Paper</Button>
            <Button className="mx-1 my-1" onClick={() => handleChoice('Scissors')}>Scissors</Button>
            {userChoice && (
              <p className="mt-3">Your choice: {userChoice}</p>
            )}
            {computerChoice && (
              <p>Computer's choice (Normal): {computerChoice}</p>
            )}
            {result && (
              <p>{result}</p>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Normal;