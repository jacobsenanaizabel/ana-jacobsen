import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import icon from './style/imgs/icon.png';
import './style/Menu.css';

class Menu extends Component {
  render() {
    return (
      <nav className="navbar-form navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <Link to="/">
              <img
                className="navbar-brand nav-icon"
                alt="Ana Jacobsen!"
                src={icon}
              />
            </Link>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link className="li-style" to="/about">
                Sobre
              </Link>
            </li>
            <li>
              <Link className="li-style" to="/contact">
                Contato
              </Link>
            </li>
            <li>
              <Link className="li-style" to="/blog">
                Blog
              </Link>
            </li>
            <li>
              <Link className="li-style" to="/portfolio">
                Portfolio
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Menu;
