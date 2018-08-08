import React, { Component } from 'react';
import './style/App.css';
import Menu from './../Template/Menu';
import Logo from './style/imgs/logo.png';

class App extends Component {
  constructor() {
    super();
    this.state = {
      opacity: 1,
      scale: 1,
      slide: false,
      flip: false
    };
  }

  onSlide() {
    this.setState({ slide: true, flip: true });
  }

  render() {
    return (
      <div className="App">
        <Menu />
        <div className="row container-about">
          <div className="container-index col-md-6 col-sm-6">
            <img className="image-index " src={Logo} alt="icon" />
          </div>
          <div className="col-md-6 container-text col-sm-6 mobile">
            <h1 className="welcome-title">Olá, seja bem-vindo</h1>
            <label className="text-about ">
              Etiam ullamcorper ultrices ipsum non faucibus. Pellentesque
              sagittis eget lacus iaculis tempor. Nunc pellentesque sem eget
              congue porttitor. Proin arcu purus, accumsan a metus non, porta
              consequat elit. Curabitur placerat pharetra maximus. Curabitur
              aliquet ex vitae augue ultrices ultrices. Nunc porttitor mi
              ligula, rhoncus dignissim dolor condimentum nec. Ut pellentesque
              dolor sit amet urna fringilla euismod. Duis vitae ante a neque
              sollicitudin placerat.
            </label>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
