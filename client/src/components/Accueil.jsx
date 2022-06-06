import React from "react";
import "../assets/css/accueil.css"
import '../assets/index.css';
import moi2 from "../assets/img/moi2.jpg";
import ActionButton from "./ActionButton";



export default function Accueil() {
  return (
    <section className="accueil_container">
      <div className="accueil_intro">
        <img src={moi2} className="moi" alt="moi" />
        <h1>Christophe BOINET</h1>
        <h2>Développeur Web</h2>
      </div>

      <div className="actionbutton_container">
        <ActionButton role="Consulter mon CV" />
        <ActionButton role="Voir mes projets" />
      </div>
    </section>
  );
};