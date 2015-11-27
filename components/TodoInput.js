import React from 'react';

var TodoInput = React.createClass({

  handleSubmit: function (e) {
    e.preventDefault();
    this.props.addTodo(this.state.text);
    this.setState({
      text: ''
    });
  },

  handleChange: function (e) {
    this.setState({
      text: e.target.value
    });
  },

  getInitialState: function () {
    return {
      text: ''
    };
  },

  render: function() {

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Add new todo"
          autoFocus="true"
          value={this.state.text}
          // onBlur={this.handleBlur.bind(this)}
          onChange={this.handleChange} />
        <input 
          type="submit"
          value="Add todo" />
      </form>
    )
  }
});

module.exports = TodoInput;
