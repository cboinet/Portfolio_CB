import React from "react";
import "../assets/css/apropos.css";
import Skill from "./Skill";
import ActionButton from "./ActionButton";


export default function Apropos() {
  return (
    <section className="apropos_container">
      <div className="apropos_present">
        <h1>Qui suis-je ?</h1>
        <p>Après plus de 20 ans dans le management de la Qualité et une expérience comme thérapeute, j'ai décidé d’entreprendre une formation avec la Wild Code
          School, pour devenir Développeur Web.</p>
        <p>💡 J'ai à cœur d'apprendre et de comprendre et suis conscient des nombreux défis qui m'attendent. 💡</p>
      </div>

      <div className="skills_hard">
        <h1>Mes compétences techniques</h1>
        <div className="skills_container">
          <Skill name="HTML5" image="fa-brands fa-html5" />
          <Skill name="CSS3" image="fa-brands fa-css3" />
          <Skill name="Javascript" image="fa-brands fa-js-square" />
          <Skill name="React.js" image="fa-brands fa-react" />
          <Skill name="Node.js/Express" image="fa-brands fa-node-js" />
          <Skill name="Visual Studio Code" image="fa-solid fa-code" />
          <Skill name="GitHub" image="fa-brands fa-github" />
        </div>
      </div>

      <div className="skills_soft">
        <h1>Mes qualités et expériences</h1>
        <div className="softskills">
          <p>Orientation client</p>
          <p>Adaptation</p>
          <p>Gestion de projets</p>
          <p>Engagement dans les projets</p>
        </div>
      </div>

      <div className="actionbutton_container">
        <ActionButton role="Consulter mon CV" className="action" />
        <ActionButton role="Me contacter" className="action" />
      </div>
    </section>

  );
};