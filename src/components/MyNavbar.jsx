import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Form } from "react-bootstrap";
const MyNavbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">
        <img src="/logo.png" alt="" height="25px" />
      </a>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item nav-link">Other Shows</li>
          <Link to="/tv-shows">
            <li class="nav-item nav-link">Tv Shows</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default MyNavbar;
