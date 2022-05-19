import React from "react";
import "../assets/css/apropos.css"

export default function Apropos() {
  return (
    <section className="apropos_container">
      <div className="apropos_present">
        <h1>Qui suis-je ?</h1>
        <p>Après plus de 20 ans dans le management de la Qualité et une expérience comme thérapeute, j'ai décidé d’entreprendre une formation avec la Wild Code
          School, pour devenir Développeur Web.</p>
        <p>💡 J'ai à cœur d'apprendre et de comprendre grâce aux nombreux défis qui m'attendent. 💡</p>
      </div>

      <div className="skills_hard">
        <h1>Langages et technologies utilisés</h1>
        <div className="skills">
          <p>HTML5</p>
          <img />
        </div>
        <div className="skills">
          <p>CSS3</p>
          <img />
        </div>
        <div className="skills">
          <p>Javascript</p>
          <img />
        </div>  
        <div className="skills">
          <p>React.js</p>
          <img />
        </div> 
        <div className="skills">
          <p>Node.js/Express</p>
          <img />
        </div> 
        <div className="skills">
          <p>Visual Studio Code</p>
          <img />
        </div> 
        <div className="skills">
          <p>GitHub</p>
          <img />
        </div> 
      </div>

      <div className="skills_soft">
        <h1>Qualités et compétences</h1>
        <div className="skills">
          <p>Orientation client</p>
          <p>Adaptation</p>
          <p>Gestion de projets</p>
          <p>Engagement dans les projets</p>
        </div>
      </div>

      <div className="apropos_cv">
        <h1>CV</h1>
        <div className="action_button">
          <button type="button" className="action">Consulter mon CV</button>
          <button type="button" className="action">Me contacter</button>
        </div>
      </div>
    </section>

  );
};