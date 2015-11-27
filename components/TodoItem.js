import React from 'react';

var TodoItem = React.createClass({

  handleCompleted: function() {
    this.props.completeTodo(this.props.todo.id);
  },

  handleDelete: function() {
    this.props.deleteTodo(this.props.todo.id);
  },

  render: function() {

    var textStyle = this.renderTextStyle();

    return (
      <ul>
        <li>
          <div style={textStyle}>
            {this.props.todo.text}
          </div>
          <button onClick={this.handleCompleted}>toggle completed</button>
          <button onClick={this.handleDelete}>delete</button>
        </li>
      </ul>
    )
  },

  renderTextStyle: function () {
    return {
      color: this.props.todo.completed ? 'lightgrey' : 'black',
      textDecoration: this.props.todo.completed ? 'line-through' : 'none'
    };
  }

});

module.exports = TodoItem;
