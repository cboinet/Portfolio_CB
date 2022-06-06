import React from "react";
import "../assets/css/projet.css"

export default function Projet({ description, illustration, techno, gh }) {
  return (
    <section className="projet_container">
      <div className="projet_border">
        <div className="projet_description">
          <h2>Description : </h2>
          <p>{description}</p>
        </div>
        <div className="projet_images">
          <h2>Illustrations : </h2>
          <p>{illustration}</p>
        </div>
        <div className="projet_technos">
          <h2>Langages et technologies utilisés : </h2>
          <p>{techno}</p>
        </div>
        <div className="projet_gh">
          <a href={gh} className="btn_gh"> GitHub</a>
        </div>
      </div>
    </section>
  );
};