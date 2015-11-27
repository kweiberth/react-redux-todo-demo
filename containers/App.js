import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import TodoList from '../components/TodoList'

var App = React.createClass({

  render: function() {
    return (
      <div>
        <TodoList todos={this.props.todos} actions={this.props.actions} />
      </div>
    )
  }
});

var mapStateToProps = function (state) {
  console.log(state);
  return state;
};

// var mapDispatchToProps = function (dispatch) {
//   return {
//     actions: bindActionCreators(actions, dispatch)
//   };
// }

module.exports = connect(mapStateToProps)(App);
