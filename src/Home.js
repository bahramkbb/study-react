import React, { Component } from 'react';
import Intro from './Intro';
import logo from './logo.svg';
import './App.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Manny',
    }
  }

  componentWillMount() {
    console.log('Component will be loaded');
  }

  componentDidMount() {
    console.log('Component just loaded');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Home Page {this.state.name}!
          </p>
          <Intro name={this.state.name} />
        </header>
      </div>
    );
  }
}

export default Home;
