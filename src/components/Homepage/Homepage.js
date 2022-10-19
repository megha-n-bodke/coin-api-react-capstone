import React from 'react';
import { useSelector } from 'react-redux';

const Homepage = () => {
  // allcoins comes from reducer alias in configure store.
  const { coins } = useSelector((state) => state.allcoins);
  console.log(`this store state ${coins}`);
  return (
    <div>
      {coins.map((coin) => (
        <p key={Math.random()}>{coin.name}</p>
      ))}
    </div>
  );
};

export default Homepage;
