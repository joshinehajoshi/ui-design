import React from 'react';
import Card from 'react-bootstrap/Card';
import '../assets/styles/target.css';
import kebab from '../assets/images/kebab.png';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';

function TargetCards() {
  return (
    <Card>
    <Card.Body>
      <Card.Title className="target-card">
          <span></span>
          <Button className="kebab-btn"><img className="kebab-img" src={kebab}></img></Button>
          </Card.Title>
      <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
      <Card.Text className="target-card-text">
          <div className='progress-bar'>
          <ProgressBar now={60} />
          </div>
          <div className='progress-bar-content'>
              <h5>23.1K</h5>
              <p>of 50k</p>
          </div>
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

export default TargetCards