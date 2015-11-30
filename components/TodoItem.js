// TodoItem.js

import React from 'react';

var TodoItem = React.createClass({

  handleCompleted: function() {

  },

  handleDelete: function() {

  },

  render: function() {

    return
      <li>
        <div>
          this should be the todo text
        </div>
        <button onClick={this.handleCompleted}>toggle completed</button>
        <button onClick={this.handleDelete}>delete</button>
      </li>

  }

});

module.exports = TodoItem;
