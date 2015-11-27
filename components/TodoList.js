import React from 'react';
import TodoItem from './TodoItem'

var TodoList = React.createClass({

  render: function() {

    return (
      <div>
        
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
      </div>
    )
  }
});

module.exports = TodoList;
