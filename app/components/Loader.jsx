// Loader.jsx
import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="card">
        <div className="loader">
          <p>Loading</p>
          <div className="words">
            <span className="word">buttons</span>
            <span className="word">projects</span>
            <span className="word">switches</span>
            <span className="word">cards</span>
            <span className="word">timeline</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
