import React from "react";
import { BrowserRouter } from "react-router-dom";

const Homepage = () => {
  const coins = [
    {
      name: "Bitcoin",
      symbol: "btc",
    },
  ];
  return (
    <BrowserRouter>
      {coins.map((coin) => {
        <div>
          <p>{coin.name}</p>
          <p>{coin.symbol}</p>
        </div>;
      })}
    </BrowserRouter>
  );
};

export default Homepage;
