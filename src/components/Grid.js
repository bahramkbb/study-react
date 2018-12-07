import React, { Component } from 'react';
import Note from './Note';

class Grid extends Component {
  renderItems(){
    return this.props.notes.map(item =>
      <Note
       key={item.id}
       removeNote={this.props.removeNote.bind(this)}
       item={item} />
    )
  }

  render() {
    return (
      <div className="row">
        <ul>
          {this.renderItems()}
        </ul>
      </div>
    )
  }
}

export default Grid;
