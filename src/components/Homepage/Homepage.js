import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { useSelector } from "react-redux";
import "./Homepage.css";
const Homepage = () => {
  // allcoins comes from reducer alias in configure store.
  const { coins } = useSelector((state) => state.allcoins);
  console.log(`this store state ${coins}`);
  return (
    <div className="row">
      {coins.map((coin) => (
        <>
          <div className="col-6 d-flex flex-column">
            <a>
              <FaArrowCircleRight />
            </a>
            <img src={coin.image} alt="coin image" className="coin-image" />
            <h2 key={Math.random()}>{coin.name}</h2>
            <h5>{coin.symbol}</h5>
          </div>
        </>
      ))}
    </div>
  );
};

export default Homepage;
