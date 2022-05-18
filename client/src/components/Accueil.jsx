import React from "react";
import "../assets/css/accueil.css"
import '../assets/index.css';
import photo from "../assets/img/photo.jpg";


export default function Accueil() {
  return (
    <div>
      <section className="accueil_container">
        <div className="accueil_present">
          <h1>Christophe BOINET, Développeur Web</h1>
          <h2>Je suis à l'écoute d'opportunités en développement de sites et applications web.</h2>
        </div>
        <img src={photo} className="moi" alt="moi" />
        <div className="action_button">
          <button type="button" className="action">Consulter mon CV</button>
          <button type="button" className="action">Me contacter</button>
        </div>
      </section>
    </div>
  );
};