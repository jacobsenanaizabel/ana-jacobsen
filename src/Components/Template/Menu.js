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
                SOBRE
              </Link>
            </li>
            <li>
              <Link className="li-style" to="/contact">
                CONTATO
              </Link>
            </li>
            <li>
              <Link className="li-style" to="/blog">
                BLOG
              </Link>
            </li>
            <li>
              <Link className="li-style" to="/portfolio">
                PORTFOLIO
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Menu;
