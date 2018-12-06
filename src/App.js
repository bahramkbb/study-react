import React, { Component } from 'react';
import firebase from 'firebase';
import _ from 'lodash';

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

  componentWillMount() {
    firebase.initializeApp({

    });

    firebase.database().ref('notes')
      .on('value', snapshot => {
        const fbstore = snapshot.val();
        const store = _.map(fbstore, (value,id) => {
          return {
            id: id,
            title: value.title,
            details: value.details,
          };
        });

        this.setState({
          notes: store,
        });

      });
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event){
    console.log(`Your note: ${this.state.currentTitle} has been added!`);

    const data = {
      title: this.state.currentTitle,
      details: this.state.currentDetails,
    };

    firebase.database().ref('/notes').push(data, response => response);

    this.setState({
      currentTitle: '',
      currentDetails: '',
    });

    event.preventDefault();
  }

  deleteNote(id){
    firebase.database().ref(`/notes/${id}`).remove();
  }

  render() {
    return (
      <div className="App">
        <Header name="Bahram"/>
        <Form
          currentTitle={this.state.currentTitle}
          currentDetails={this.state.currentDetails}
          handleChange={this.handleChange.bind(this)}
          handleSubmit={this.handleSubmit.bind(this)}/>
        <Grid notes={this.state.notes} deleteNote={this.deleteNote.bind(this)}/>
      </div>
    );
  }
}

export default App;
