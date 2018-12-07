import React, { Component } from 'react';
import { connect } from 'react-redux';

//Import Components
import Header from './components/Header';
import Grid from './components/Grid';
import Form from './components/Form';

//Import store functions
import { getInitialNotes, addNewNote, removeNote } from './store/actions';

// const styles = {
//   textAlign: 'center',
//   margin: 0,
//   padding: 0
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header name={this.props.name}/>
        <Form addNewNote={this.props.addNewNote} />
        <Grid notes={this.props.notes} removeNote={this.props.removeNote}/>

      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      getInitialNotes: () => {
        dispatch(getInitialNotes())
      },
      addNewNote: (note) => {
        dispatch(addNewNote(note))
      },
      removeNote: (note) => {
        dispatch(removeNote(note))
      },
    };
}

const mapStateToProps = (state, ownProps) => {
  return {
    notes: state.notes,
    name: state.name,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
