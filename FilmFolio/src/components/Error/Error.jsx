import React from "react";
import "./Error.css";

const ErrorDisplay = ({ error }) => {
  return (
    <div className="error-container">
      <h2 className="error-title">Something went wrong!!</h2>
      <p className="error-message">{error}</p>
    </div>
  );
};

export default ErrorDisplay;
