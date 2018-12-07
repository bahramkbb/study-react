import React from 'react';

const Note = (props) => {
  return (
    <li className="col s12 m6 l4">
      <div className="card teal darken-1">
        <div className="card-content white-text">
          <span className="card-title">{props.item.title}</span>
          <p>{props.item.details}</p>
        </div>
        <div className="card-action">
            <button className="btn-floating waves-effect waves-light red"
              onClick={() => props.removeNote(props.item)}>
              <i className="material-icons">delete</i>
            </button>
        </div>
      </div>
    </li>
    );
}

export default Note;
