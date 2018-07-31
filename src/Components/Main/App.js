import React, { Component } from 'react';
import './style/App.css';
import Menu from './../Template/Menu';
import Logo from './style/imgs/logo.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <div className="row container-about">
          <div className="container-index col-md-6">
            <img className="image-index" src={Logo} />
          </div>
          <div className="col-md-6 container-text">
            <label className="text-about">
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
