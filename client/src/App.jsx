import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import Home from './pages/Home';
import About from './pages/About';

import './css/style.css'
import 'remixicon/fonts/remixicon.css'
import 'aos/dist/aos.css';


import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {




  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <Router>
      <div>
        <header id="header">
        <Navbar />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <div id='footer'>
        <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
