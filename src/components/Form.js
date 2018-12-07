import React, { Component } from 'react';

class Form extends Component {
  
  handleSubmit(event) {
    event.preventDefault();

    const note = {
      id: require('crypto').randomBytes(5).toString('hex'),
      title: event.target.title.value,
      details: event.target.details.value
    };
    event.target.title.value = '';
    event.target.details.value = '';
    this.props.addNewNote(note);
  }

  render() {
    return (
      <div className="row">
      <form onSubmit={this.handleSubmit.bind(this)}
        className="col s12">
        <div className="row">
          <div className="input-field col s12 m12 l3">
            <input
              name="title"
              type="text"
              placeholder="Note Title"
              className="validate"
              />
            <label htmlFor="title">Title</label>
          </div>
          <div className="input-field col s12 m9 l7">
            <input
              name="details"
              type="text"
              placeholder="Note Description"
              />
            <label htmlFor="title">Details</label>
          </div>
          <div className="input-field col s12 m3 l2">
            <button className="btn-large waves-effect waves-light"
              type="submit"
              name="action">
              Save Note
            </button>
          </div>
        </div>
      </form>
    </div>
    )
  }
}

export default Form;
