import React from "react";
import "../assets/css/actionbutton.css"

export default function ActionButton ({ role }) {
  return (  
    <div className="action_button">
      <button type="button" className="action">{role}</button>
    </div>
  );
};