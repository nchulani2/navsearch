import React from 'react';
import '../styles/Spinner.css';

const Spinner = props => {
  return (
    <div className="spinner">
      <div className="spinnerOuter">
        <i className="loadey notched massive circle loading icon" />
        <h4>Almost done . . .</h4>
      </div>
    </div>
  );
};

export default Spinner;
