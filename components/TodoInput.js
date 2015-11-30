// TodoInput.js

import React from 'react';

var TodoInput = React.createClass({

  handleSubmit: function (e) {

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
      <div>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Add new todo"
            value={this.state.text}
            onChange={this.handleChange}/>
          <input 
            type="submit"
            value="Add todo"/>
        </form>

      </div>
    )
  }

});

module.exports = TodoInput;
