import React from 'react';

var Song = React.createClass({

  // handleClick: function() {
  //   this.props.fetchSongs(3);
  // },

  render: function() {

    return (
      <ul>
        <li>
          <div>{this.props.todo.text}</div>
          <button onClick={this.handleClick}>click when completed</button>
        </li>
      </ul>
    )
  }
});

module.exports = Song;
