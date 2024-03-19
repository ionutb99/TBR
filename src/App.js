import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Acasa from "./Acasa";
import Intrebari from './Intrebari';
import Despre from './Despre.js';
import Maps from './Maps.js';
import Contact from './Contact.js';
import Navbar  from './Navbar.js';
import Footer from './Footer.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Acasa />} />
        <Route path="/TBR/" element={<Intrebari />} />
        <Route path="/intrebari" element={<Intrebari />} />
        <Route path="/despre" element={<Despre />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/propuneri" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
