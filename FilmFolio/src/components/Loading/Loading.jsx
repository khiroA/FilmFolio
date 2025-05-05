import React from 'react';
import './Loading.css';

const Loading = ({ size = 44 }) => {
  const spinnerStyle = {
    width: size,
    height: size,
  };

  return (
    <div className='loader-con'>
      <div className="loader" style={spinnerStyle}></div>
    </div>
  );
};

export default Loading;
