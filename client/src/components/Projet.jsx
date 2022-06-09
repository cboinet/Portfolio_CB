import React from "react";
import "../assets/css/projet.css"

export default function Projet({ titre, description, illustration, techno, gh }) {
  return (
    <section className="projet_container">
      <div className="projet_box">
        <div className="projet_recto">
          <div className="projet_title">
            <h2>{titre}</h2>
          </div>
          <div className="projet_images">
            <img src={illustration} alt="site_picture" className="screenshot"/>
            <img src={illustration} alt="site_picture" className="screenshot" />
          </div>
        </div>

        <div className="projet_verso">
          <div className="projet_description">
            <h2>{description}</h2>
          </div>
          <div className="projet_technos">
            <h2>Développé avec : </h2>
            <p>{techno}</p>
          </div>
          <div className="projet_gh">
            <a href={gh} className="btn_gh">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  );
};