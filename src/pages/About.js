import React from 'react';
import Footer from '../components/Footer';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const aboutStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  textAlign: 'center',
  animationDelay: '0.2s'
};
const headerStyle = {
  lineHeight: '30px',
  padding: '1rem 0 5px 0',
  textAlign: 'center',
  fontFamily: 'Indie Flower, cursive',
  fontWeight: 'bolder',
  letterSpacing: '2px',
  fontSize: '2rem',
  color: 'black',
  animationDelay: '0.2s'
};

const About = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <div className="animated fadeIn" style={{ ...headerStyle }}>
        navsearch
      </div>
      <div className="animated fadeIn" style={{ ...aboutStyle }}>
        <h3
          style={{
            fontFamily: 'Indie Flower, cursive',
            fontWeight: 'bolder',
            lineHeight: '2rem'
          }}>
          Navsearch is a free image search engine that uses the Unsplash API to
          retrieve images based on the user's input. Backend development is
          currently being implemented.{' '}
        </h3>
        <Link to="/">
          <Button></Button>
        </Link>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
