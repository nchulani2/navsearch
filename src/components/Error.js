import React from 'react';
import '../styles/Error.css';
const Error = props => {
  return (
    <div className="error">
      <h1>Sorry, no images found for "{props.userInput}" </h1>
      <h3>Try searchin' for something else!</h3>
    </div>
  );
};

export default Error;
