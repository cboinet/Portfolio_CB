import React from "react";
import "../assets/css/portfolio.css"
import Projet from "./Projet";
import Skill from "./Skill";

export default function Portfolio() {
  return (
    <section className="portfolio_container">
      <h1>Mes projets</h1>
      
      <div className="portfolio_projet">
        <Projet titre="Outsiders" description="Site statique d'un groupe de musique fictif" illustration="" techno={ <Skill name="HTML5, CSS3, Javascript" image="fa-brands fa-html5, fa-brands fa-css3, fa-brands fa-js-square" /> } gh="https://github.com/cboinet/Projet-1-Outsiders" />

        <Projet titre="Find Tech Job" description="Job dashboard avec pour but de consommer une API et pratiquer React.js" illustration="" techno={ <Skill name="React.js" image="fa-brands fa-react" /> } gh="https://github.com/cboinet/Projet-2-Find_Tech_Job" />

        <Projet titre="One, two, tri" description="Site éducatif sur le thème de l'économie circulaire avec pour objectif de consommer une API avec React.js" illustration="" techno={ <Skill name="React.js" image="fa-brands fa-react" /> } gh="https://github.com/cboinet/Hackathon1_EcologyImpacts" />
        
        <Projet titre="Sellect" description="Site d'un client qui renégocie vos différents contrats pour un gain de pouvoir d'achat" illustration="" techno={ <Skill name="React.js, Node.js/Express" image="fa-brands fa-react, fa-brands fa-node-js"/> } gh="" />
      </div>
    </section>
  );
};