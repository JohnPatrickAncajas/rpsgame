import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  const [userChoice, setUserChoice] = useState(null);
  const [computerChoice, setComputerChoice] = useState(null);
  const [result, setResult] = useState('');

  const handleChoice = (choice) => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerRandomChoice = choices[randomIndex];

    if (choice === computerRandomChoice) {
      setResult('It\'s a tie!');
    } else if (
      (choice === 'rock' && computerRandomChoice === 'scissors') ||
      (choice === 'paper' && computerRandomChoice === 'rock') ||
      (choice === 'scissors' && computerRandomChoice === 'paper')
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
            <Button className='mr-1' onClick={() => handleChoice('rock')}>Rock</Button>
            <Button className='mr-1' onClick={() => handleChoice('paper')}>Paper</Button>
            <Button className='mr-1' onClick={() => handleChoice('scissors')}>Scissors</Button>
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
