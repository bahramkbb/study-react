import React, { Component } from 'react';

//Import Components
import Header from './components/Header';
import Grid from './components/Grid';
import Form from './components/Form';

// const styles = {
//   textAlign: 'center',
//   margin: 0,
//   padding: 0
// }

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      currentTitle: '',
      currentDetails: '',
    }
  }

  render() {
    return (
      <div className="App">
        <Header name="Bahram"/>
        <Form />
        <Grid />
      </div>
    );
  }
}

export default App;
