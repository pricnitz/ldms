import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AOS from 'aos';

import Allrouter from './Routers/Allrouter';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './css/style.css';
import 'remixicon/fonts/remixicon.css';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <Router>
      <header id="header" className="header">
        <Navbar />
      </header>

      <main>
        <Allrouter />
      </main>

      <footer className="footer">
        <Footer />
      </footer>
    </Router>
  );
}

export default App;
