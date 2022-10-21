import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';

const Homepage = () => {
  const coins = [{ id: 1, name: 'Bitcoins', symbol: 'btc' }];
  return (
    <BrowserRouter>
      <h3>Currency</h3>
      <ListGroup key={coins.id}>
        {coins.map((coins) => (
          <ListGroup.Item key={coins.id}>
            <h5>{coins.name}</h5>
            <p>{coins.symbol}</p>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </BrowserRouter>
  );
};

export default Homepage;
