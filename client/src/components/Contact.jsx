import React from "react";
import "../assets/css/contact.css"
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

export default function Contact () {
  return (  
    <section className="contact_container">
      <h2>Prenez contact avec moi!</h2>
      <form >
        <input type="text" name="name" placeholder="Nom et prénom" required />
        <input type="email" name="email" placeholder="adresse mail" required />
        <textarea
          type="message"
          row="7"
          name="message"
          placeholder="Votre message"
          required
        />
        <button type="submit" className="btn_contact">
          Envoyer
        </button>
      </form>

      <div className="footer">
        <p>©Copyright 2022 / Christophe Boinet - Développeur Web </p>
        <div className="socials">
          <a
            href="https://www.linkedin.com/in/cboinet/"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin /> LinkedIn
          </a>
          <a href="https://github.com/cboinet" target="_blank" rel="noreferrer">
            <BsGithub /> Github
          </a>{" "}
        </div>
      </div>
    </section>
  );
};
