import React from "react";
import "../assets/css/navbar.css";
import "../assets/index.css";
import logo from "../assets/img/logo.png";
import { Link } from "react-router-dom";

export default function Navbar () {
  return (
    <header className="navbar_container">
      <img src={logo} className="logo" alt="logo" />
      <div className="nav">
        <Link to="/" className="nav_item"> Accueil </Link>
        <Link to="/a-propos" className="nav_item"> Qui suis-je ? </Link>
        <Link to="/projet" className="nav_item"> Mes projets </Link>
        <Link to ="/contact" className="nav_item"> Contact </Link>
      </div>
    </header>

  );
};
