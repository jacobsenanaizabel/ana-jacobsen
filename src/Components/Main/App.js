import React, { Component } from 'react';
import './style/App.css';
import Menu from './../Template/Menu';
import Logo from './style/imgs/logo.png';

const styles = {
  transition: 'all 2s ease'
};
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
          <div
            className="container-index col-md-6 "
            onLoad={this.onSlide.bind(this)}
          >
            <img
              className={
                'image-index ' +
                (this.state.slide ? 'image-index-transition' : '')
              }
              src={Logo}
            />
          </div>
          <div className="col-md-6 container-text">
            <h1 className="welcome-title">Olá, seja bem-vindo</h1>
            <label
              className={
                'text-about ' + (this.state.flip ? 'text-transition-open' : '')
              }
              style={{ ...styles }}
            >
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
