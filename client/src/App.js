import React from 'react';
import './assets/index.css';
import Navbar from './components/Navbar';
import Accueil from './components/Accueil';
import Apropos from './components/Apropos';
import Projet from './components/Projet';
import Contact from './components/Contact';
import { Routes, Route } from "react-router-dom";


export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/a-propos" element={<Apropos />} />
        <Route path="/projet" element={<Projet />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}