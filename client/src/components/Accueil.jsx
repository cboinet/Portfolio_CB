import React from "react";
import "../assets/css/accueil.css"
import '../assets/index.css';
import photo from "../assets/img/photo.jpg";
import ActionButton from "./ActionButton";



export default function Accueil() {
  return (
    <section className="accueil_container">
      <div className="accueil_intro">
        <img src={photo} className="moi" alt="moi" />
        <h1>Christophe BOINET</h1>
        <h2>Développeur Web</h2>
      </div>
      <div className="actionbutton_container">
        <ActionButton role="Consulter mon CV" className="action" />
        <ActionButton role="Me contacter" className="action" />
      </div>
    </section>
  );
};