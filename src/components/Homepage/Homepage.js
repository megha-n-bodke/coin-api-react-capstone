import React, { useState } from "react";
import { FaArrowCircleRight, FaSearch } from "react-icons/fa";
import { useSelector, useStore } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Homepage.css";
import "../Navbar/navbar.css";

const Homepage = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  // allcoins comes from reducer alias in configure store.
  const { coins } = useSelector((state) => state.allcoins);

  return (
    <>
      <form className="form-inline ">
        <input
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
        <FaSearch className="search-icon my-4" />
      </form>
      <div className="row ps-2">
        {coins
          .filter((coin) => {
            if (search === "") {
              return coin;
            }
            if (coin.name.toLowerCase().includes(search.toLowerCase())) {
              return coin;
            }
          })
          .map((coin) => (
            <>
              <div
                className="col-6 d-flex flex-column py-2 h-25 w-50 "
                onClick={() => navigate(`/details/${coin.id}`)}
              >
                <a>
                  <FaArrowCircleRight />
                </a>
                <img src={coin.image} alt="coin image" className="coin-image" />
                <p key={Math.random()}>{coin.name}</p>
                <p>{coin.symbol}</p>
              </div>
            </>
          ))}
      </div>
    </>
  );
};

export default Homepage;
