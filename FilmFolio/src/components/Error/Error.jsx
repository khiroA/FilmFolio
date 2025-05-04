import React from 'react';
import './Error.css';

const Error = ({ error }) => {

  
  return (
    <div className="error-container">
      <h2 className="error-title">Something went wrong!!</h2>
      <p className="error-message">{error || "An unexpected error occurred."}</p>
    </div>
  );
};

export default Error;
