import React, { useState } from 'react';
import { FaArrowCircleRight, FaSearch } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Homepage.css';
import '../Navbar/navbar.css';

const Homepage = () => {
  const [search, setSearch] = useState('');
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
        <>
          {coins
            .filter((coin) => {
              if (search === '') {
                return coin;
              }
              if (coin.name.toLowerCase().includes(search.toLowerCase())) {
                return coin;
              }
              return null;
            })
            .map((coin) => (
              <div
                key={coin.id}
                className="col-6 d-flex flex-column py-2 h-25 w-50 "
              >
                <FaArrowCircleRight
                  className="my-2 navigation-arrow"
                  onClick={() => navigate(`/details/${coin.id}`)}
                />
                <img src={coin.image} className="coin-image" alt="" />
                <p key={Math.random()}>{coin.name}</p>
                <p>{coin.symbol}</p>
              </div>
            ))}
        </>
      </div>
    </>
  );
};

export default Homepage;
