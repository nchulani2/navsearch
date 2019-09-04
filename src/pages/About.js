import React from 'react';
import Button from '../components/Button';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const aboutStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
  textAlign: 'center'
};

const About = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Link to="/">
        <div>
          <Header color="black"></Header>
        </div>
      </Link>
      <div style={{ ...aboutStyle }}>
        <h3
          style={{
            fontFamily: 'Indie Flower, cursive',
            fontWeight: 'bolder',
            lineHeight: '2rem'
          }}>
          Navsearch is a free image search engine that uses the Unsplash API to
          retrieve images based on the user's input. Backend is currently being
          implemented.{' '}
        </h3>
        <Link to="/">
          <Button
            buttonText="Back to home!"
            iconClass="long arrow alternate left icon"></Button>
        </Link>
      </div>
    </div>
  );
};

export default About;
