// App.js

import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'

var App = React.createClass({

  render: function() {
    return
      <div>
        <TodoInput addTodo={this.props.actions.addTodo}/>
        <TodoList todos={this.props.todos} actions={this.props.actions}/>
      </div>
  }

});

module.exports = App;
