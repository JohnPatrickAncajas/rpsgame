import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
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
    <div style={{ marginTop: '2rem' }}>
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
            {result && (
              <p>{result}</p>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
