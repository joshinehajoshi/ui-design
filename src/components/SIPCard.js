import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../assets/styles/sip.css';

function SIPCard() {
  return (
    <>
       <Card>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
         <div className='sip-card-text-wrapper'>
             <div className="sip-card-text">
                <p>Total Amount</p>
                <h3>23.1 K</h3>
             </div>
             <div className="sip-card-text">
                <p>Total No. of SIPs</p>
                <h3>23.1 K</h3>
             </div>
         </div>
        </Card.Text>
       <Button className="sip-card-text-btn">View All</Button>
      </Card.Body>
    </Card>
    </>
  )
}

export default SIPCard