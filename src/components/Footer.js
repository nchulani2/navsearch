import React from 'react';
import '../styles/Footer.css';

const Footer = props => {
  return (
    <div
      className={`footer ${
        props.navState ? 'animated fadeInUp faster' : 'hiddenBody'
      }`}>
      <h3>Developed by Naveen Chulani</h3>
    </div>
  );
};

export default Footer;
