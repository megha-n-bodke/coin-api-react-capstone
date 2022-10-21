import React from "react";
import { FaMicrophone, FaRegSun, FaSearch } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const Search = (data) => {
    console.log(data);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <a className="navbar-brand fontcolor" href="/">
          Navbar
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
      <form className="form-inline ">
        <input
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => Search(e.target.value)}
        />
        <FaSearch className="search-icon" />
      </form>
    </div>
  );
};

export default Navbar;
