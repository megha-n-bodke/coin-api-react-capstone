import React from 'react';
import { FaAngleLeft, FaMicrophone, FaRegSun } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <FaAngleLeft onClick={() => navigate('/')} />

        <a className="navbar-brand fontcolor" href="/">
          Currency
        </a>

        <ul className="navbar-nav mr-auto d-flex flex-column">
          <li className="nav-item activen d-flex">
            <a className="nav-link" href="/">
              <FaMicrophone className="fontcolor" />
              <FaRegSun className="ms-4 me-2 fontcolor" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
