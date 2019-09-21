import React from 'react';
import '../styles/Spinner.css';

const Spinner = props => {
  return (
    <div className="spinner">
      <div className="spinnerCont">
        <div className="sk-folding-cube">
          <div className="sk-cube1 sk-cube" />
          <div className="sk-cube2 sk-cube" />
          <div className="sk-cube4 sk-cube" />
          <div className="sk-cube3 sk-cube" />
        </div>
        <h1>Loading . . .</h1>
      </div>
    </div>
  );
};

export default Spinner;
