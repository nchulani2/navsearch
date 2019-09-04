import React from 'react';
import '../styles/Button.css';

const Button = props => {
  return (
    <button className="button" style={{ margin: props.margin }}>
      <i className={props.iconClass}></i> {props.buttonText}
    </button>
  );
};

export default Button;
