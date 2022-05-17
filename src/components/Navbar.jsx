import React from "react";
import "../assets/css/navbar.css";
import "../assets/index.css"
import logo from "../assets/img/logo.png";

export default function Navbar () {
  return (  
    <header className="navbar_container">
      <img src={logo} className="logo" alt="logo" />
      <div className="nav">
        <a href="" className="item">Accueil </a>
        <a href="" className="item">A propos </a>
        <a href="" className="item">Skills</a>
        <a href="" className="item">Mes projets</a>
        <a href="" className="item">Contact</a>
      </div>
    </header>

  );
};
