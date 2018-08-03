import React, { Component } from 'react';
import Menu from './../Template/Menu';
import './style/About.css';
import me from './style/imgs/me.JPG';

class About extends Component {
  render() {
    return (
      <div className="About">
        <Menu />
        <div className="row about">
          <div className="container-me-image col-md-12">
            <img className="image-me" src={me} alt="ana jacobsen" />
          </div>
          <div className="container-about col-md-12">
            <label className="text-about">
              Etiam ullamcorper ultrices ipsum non faucibus. Pellentesque
              sagittis eget lacus iaculis tempor. Nunc pellentesque sem eget
              congue porttitor. Proin arcu purus, accumsan a metus non, porta
              consequat elit. Curabitur placerat pharetra maximus. Curabitur
              aliquet ex vitae augue ultrices ultrices.
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
