import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Form } from "react-bootstrap";
const MyNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        <img src="/logo.png" alt="" height="25px" />
      </a>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item nav-link">Other Shows</li>
          <Link to="/tv-shows">
            <li className="nav-item nav-link">Tv Shows</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default MyNavbar;
