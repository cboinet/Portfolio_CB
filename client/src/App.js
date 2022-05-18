import React from 'react';
import './assets/index.css';
import Accueil from './components/Accueil';
import Apropos from './components/Apropos';
import Contact from './components/Contact';
import Projet from './components/Projet';
import Skills from './components/Skills';


export default function App() {
  return (
    <div>
      <Accueil />
      <Apropos />
      <Skills />
      <Projet />
      <Contact />
    </div>
  );
}