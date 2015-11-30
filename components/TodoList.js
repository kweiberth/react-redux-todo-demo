// TodoList.js

import React from 'react';
import TodoItem from './TodoItem'

var TodoList = React.createClass({

  render: function() {

    return (
      <ul>
        
        {
          this.props.todos.map(function (todo) {
            return (
              <TodoItem 
                key={todo.id} 
                todo={todo} 
                deleteTodo={this.props.actions.deleteTodo} 
                completeTodo={this.props.actions.completeTodo} />
            )
          }.bind(this))
        }
        
      </ul>
    )
  }

});

module.exports = TodoList;
