import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class NotFound extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            404 Not Found!
          </p>
        </header>
      </div>
    );
  }
}

export default NotFound;
