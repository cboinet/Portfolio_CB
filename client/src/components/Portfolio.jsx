import React from "react";
import "../assets/css/portfolio.css"
import Projet from "./Projet";
import Skill from "./Skill";

export default function Portfolio() {
  return (
    <section className="portfolio_container">
      <h1>Mes projets</h1>
      <div className="portfolio_projet">
        <Projet description="Outsiders, groupe de musique fictif" image="" techno={ <Skill /> } gh="https://github.com/cboinet/Projet-1-Outsiders" />
        <Projet description="Find Tech Job, job dashboard" image="" techno={ <Skill /> } gh="https://github.com/cboinet/Projet-2-Find_Tech_Job" />
        <Projet description="Hackathon ecology impacts, application éducative" image="" techno={ <Skill /> } gh="https://github.com/cboinet/Hackathon1_EcologyImpacts" />
        <Projet description="Client Sellect, site de renégociation de contrats" image="" techno={ <Skill /> } gh="" />
      </div>
    </section>
  );
};