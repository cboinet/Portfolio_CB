import React from "react";
import "../assets/css/skill.css"

export default function Skill ({ name, image }) {
  return (  
    <div className="skill_container">
        <p>{name}</p>
        <i className={image}></i>
    </div>
  );
};