import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Projects/Header';
import Navbar from './Projects/Navbar';
import Footer from './Projects/Footer';
import Home from './Projects/Home';
import About from './Projects/About';
import Contact from './Projects/Contact';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
