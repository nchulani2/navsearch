import React from 'react';
import '../styles/Footer.css';

const Footer = props => {
  return (
    <div
      className={`footer ${
        props.navState ? 'animated fadeInUp faster' : 'hiddenBody'
      }`}>
      <h3
        style={{
          fontFamily: 'Indie Flower, cursive',
          fontWeight: 'bolder',
          lineHeight: '1rem',
          fontSize: '15px'
        }}>
        Developed by Naveen Chulani
      </h3>
    </div>
  );
};

export default Footer;
