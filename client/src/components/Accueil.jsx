import React from "react";
import "../assets/css/accueil.css"
import '../assets/index.css';
import photo from "../assets/img/photo.jpg";


export default function Accueil() {
  return (
    <div>
      <section className="accueil_container">
        <div className="accueil_present">
          <div className="accueil_intro">
            <h1>Christophe BOINET</h1>
            <h2>Développeur Web</h2>
            <h3>Acuellement en formation intensive à la Wild Code School et à la recherche d'une alternance pour 12 mois</h3>
          </div>
          <img src={photo} className="moi" alt="moi" />
        </div>
        <div className="action_button">
          <button type="button" className="action">Consulter mon CV</button>
          <button type="button" className="action">Me contacter</button>
        </div>
      </section>
    </div>
  );
};