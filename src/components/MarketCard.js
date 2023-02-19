import React from 'react';
import Card from 'react-bootstrap/Card';


function MarketCard(props) {
  console.log(props)
  return (
    <Card style={{ width: "90%", backgroundColor:`${props.color}` }}>
    <Card.Body>
      <Card.Title>Market Data</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      <Card.Link href="#">Card Link</Card.Link>
    </Card.Body>
  </Card>
  )
}

export default MarketCard