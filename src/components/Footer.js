import React from 'react';
import '../styles/Footer.css';

const Footer = props => {
  return (
    <div className="animated bounceInUp footer">
      <h3
        style={{
          fontFamily: 'Indie Flower, cursive',
          fontWeight: 'bolder',
          lineHeight: '1.5rem'
        }}>
        Developed by Naveen Chulani
      </h3>
    </div>
  );
};

export default Footer;
