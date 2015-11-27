var actions = {
  
  addTodo: function (text) {
    return {
      type: 'ADD_TODO',
      text: text
    };
  },

  deleteTodo: function (id) {
    return {
      type: 'DELETE_TODO',
      id: id
    };
  },

  completeTodo: function (id) {
    return {
      type: 'COMPLETE_TODO',
      id: id
    };
  }

};

module.exports = actions;
