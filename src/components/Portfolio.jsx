import React from 'react';
import { Link } from 'react-router-dom';
import PortfolioItem1 from '../assets/images/first-react-app.png';
import PortfolioItem2 from '../assets/images/full-stack-blog.png';
import PortfolioItem3 from '../assets/images/full-stack-notetaker.png';


function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>
      <p>Select a portfolio item to view details:</p>
      <ul class = "portfolio-list">
        <li>
          <div>
            <img src={PortfolioItem1} class = "header-avatar" alt="Home" width="200" height = "200" />
          </div>
          <Link to="/portfolio/1"> First React App </Link>
        </li>
        <li>
          <div>
            <img src={PortfolioItem2} class = "header-avatar" alt="Home" width="200" height = "200"  />
          </div>
          <Link to="/portfolio/2"> Full Stack Blog Application </Link>
        </li>
        <li>
          <div>
            <img src={PortfolioItem3} class = "header-avatar" alt="Home" width="200" height = "200"  />
          </div>
          <Link to="/portfolio/3"> Full Stacks note taker </Link>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
