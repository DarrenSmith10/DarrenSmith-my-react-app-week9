import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Search from './components/Search';
import Portfolio from './components/Portfolio';
import PortfolioItem from './components/PortfolioItem';
import myImage from "./assets/images/DarrenNewProfile.jpg";
import mylogo from "./assets/images/MonsterNormalnormal1.png";
import './App.css';

function App() {
  return (
    <Router>
      <div>
      <div>
        <img src={mylogo} class = "logo react" alt="React logo" width="100" />
        <img src={myImage} class = "header-avatar" alt="Home" width="300" />
      </div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
              <Link to="/search?q=hello+world">Search</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<PortfolioItem />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
