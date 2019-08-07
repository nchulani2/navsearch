import React from 'react';
import '../styles/Spinner.css';

const Spinner = props => {
  return (
    <div className="spinner">
      <h1>Loading images. . .</h1>
      <div className="sk-folding-cube">
        <div className="sk-cube1 sk-cube" />
        <div className="sk-cube2 sk-cube" />
        <div className="sk-cube4 sk-cube" />
        <div className="sk-cube3 sk-cube" />
      </div>
    </div>
  );
};

export default Spinner;
