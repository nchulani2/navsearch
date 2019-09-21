import React, { Component } from 'react';
import Particles from 'react-particles-js';
import { Link } from 'react-router-dom';
import '../styles/pages/Home.css';

class Home extends Component {
  checker = window.innerWidth > 700;
  state = {
    value: this.checker ? 25 : 15,
    size: this.checker ? 60 : 30
  };
  componentDidMount = () => {
    window.addEventListener('resize', this.handleParticles);
  };
  handleParticles = () => {
    if (window.innerWidth > 700) {
      this.setState({ value: 25, size: 60 });
    } else {
      this.setState({ value: 15, size: 30 });
    }
  };
  render() {
    return (
      <div className="sectioning">
        <div className="sectionPage animated fadeInUpBig faster">
          <div className="canvasEle">
            <Particles
              className="particleCanv"
              params={{
                particles: {
                  number: {
                    value: this.state.value,
                    density: {
                      enable: false
                    }
                  },
                  color: {
                    value: ['#ff4b4b']
                  },
                  shape: {
                    stroke: {
                      width: 3,
                      color: '#000'
                    },
                    type: 'circle'
                  },

                  size: {
                    value: this.state.size,
                    random: true,
                    anim: {
                      enable: false
                    }
                  },
                  opacity: {
                    value: 1,
                    random: true,
                    anim: {
                      enable: false
                    }
                  },

                  line_linked: {
                    enable: false
                  },
                  move: {
                    random: true,
                    speed: 3,
                    direction: 'none',
                    out_mode: 'out'
                  }
                }
              }}
            />
          </div>
          <div className="homePos">
            <h3 className="animated fadeIn">
              Navsearch is a free image search engine built with React and
              Redux. The images previewed are all available on Unsplash as this
              site specifically uses their API.
            </h3>
            <Link to="/gallery">
              <button className="button_home animated flipInX" type="submit">
                View Gallery
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
