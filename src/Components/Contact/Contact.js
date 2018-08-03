import React, { Component } from 'react';
import Menu from './../Template/Menu';
import './style/Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <Menu />
        <div className="row container-contact">
          <div className="container-titles">
            <h1 className="contact-title">Entre em contato, </h1>
            <h1 className="contact-title">
              vamos tomar um café <div className="coffe-img" />
            </h1>
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
