import React, { Component } from 'react';

class Form extends Component {
  // constructor(props){
  //   super(props);
  // }

  // handleChange(event) {
  //   this.props.handleChange(event);
  // }
  //
  // handleSubmit(event) {
  //   this.props.handleSubmit(event);
  // }

  render() {
    return (
      <div className="row">
      <form onSubmit={this.props.handleSubmit} className="col s12">
        <div className="row">
          <div className="input-field col s12 m12 l3">
            <input
              name="currentTitle"
              type="text"
              value={this.props.currentTitle}
              onChange={this.props.handleChange}
              placeholder="Note Title"
              />
          </div>
          <div className="input-field col s12 m9 l7">
            <input
              name="currentDetails"
              type="text"
              value={this.props.currentDetails}
              onChange={this.props.handleChange}
              placeholder="Note Description"
              />
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
