import React from 'react';
import { Link } from 'react-router-dom';
import './styles/NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Sorry, the page you are looking for does not exist.</p>
        <Link to="/" className="not-found-home-link">Back Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
