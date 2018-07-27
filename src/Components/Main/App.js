import React, { Component } from 'react';
import './style/App.css';
import Menu from './../Template/Menu';
import Logo from './style/imgs/logo.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <div className="container-index">
          <img className="image-index" src={Logo} />
        </div>
      </div>
    );
  }
}

export default App;
