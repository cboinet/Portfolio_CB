import React from "react";
import "../assets/css/navbar.css";
import "../assets/index.css";
import logo from "../assets/img/logo.png";
import { NavLink } from "react-router-dom";

export default function Navbar () {
  return (
    <header className="navbar_container">
      <img src={logo} className="logo" alt="logo" />
      <div className="nav">
        <NavLink exact activeClassName="active" to="/" className="nav_item">Accueil</NavLink>
        <NavLink exact activeClassName="active" to="/a-propos" className="nav_item">Qui suis-je</NavLink>
        <NavLink exact activeClassName="active" to="/portfolio" className="nav_item">Portfolio</NavLink>
        <NavLink exact activeClassName="active" to ="/contact" className="nav_item">Contact</NavLink>
      </div>
    </header>

  );
};
