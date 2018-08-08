import React, { Component } from 'react';
import Menu from './../Template/Menu';
import Mug from './style/imgs/mug.svg';
import './style/Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="Contact mobile">
        <Menu />
        <div className="row container-contact mobile">
          <div className="container-titles">
            <h1 className="contact-title mobile col-sm-12">
              Entre em contato,{' '}
            </h1>
            <div className="row lets-talk">
              <h1 className="contact-title mobile col-md-4 col-sm-12">
                vamos tomar um café{' '}
              </h1>
              <div className="coffe-img col-md-8">
                <div className="cup">
                  <img className="mug" src={Mug} alt="mug icon" />
                  <span className="smoke" />
                </div>
              </div>
            </div>
          </div>
          <div className="form-container">
            <form className="form-horizontal">
              <div className="form-group">
                <div className="col-sm-6">
                  <input
                    type="name"
                    className="form-control input-form"
                    placeholder="Nome"
                  />
                </div>
                <div className="col-sm-6">
                  <input
                    type="email"
                    className="form-control input-form"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-12">
                  <input
                    type="telephone"
                    className="form-control input-form"
                    placeholder="Telefone"
                  />
                </div>
              </div>
              <textarea
                className="form-control text-form"
                rows="6"
                placeholder="Menssagem"
              />
              <div className="form-group">
                <div className="col-sm-12 ">
                  <button type="submit" className="btn button-send">
                    Contate-me
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
