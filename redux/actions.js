var actions = {
  addTodo: function (text) {
    return {
      type: 'ADD_TODO',
      text: text
    }
  }
};

module.exports = actions;
