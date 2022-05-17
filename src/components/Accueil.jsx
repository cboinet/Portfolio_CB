import React from "react";
import "../assets/css/accueil.css"
import '../assets/index.css';
import Navbar from './Navbar';
import photo from "../assets/img/photo.jpg";
import Apropos from "./Apropos";
import Skills from "./Skills";
import Projet from "./Projet";


export default function Accueil() {
  return (
    <div>
      <Navbar />
      <section className="accueil_container">
        <div className="accueil_present">
          <h3> Salut, moi c'est</h3>
          <h1> Christophe, </h1>
          <h2> Développeur Web</h2>
        </div>
        <img src={photo} className="moi" alt="moi" />
      </section>
      <Apropos />
      <Skills />
      <Projet />
    </div>
        

  );
};