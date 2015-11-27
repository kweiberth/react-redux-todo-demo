# react-redux-todo-demo

This is a demo app based on the [todomvc example](https://github.com/rackt/redux/tree/master/examples/todomvc) in the [redux source code](https://github.com/rackt/redux).

### Running the app

First, `npm install` all of the dependencies. Then, run `npm start` to spin up a nodemon server at port 3000.

### Hot module reloading

Webpack traverses all of the Javascript files (starting with client/client.js and moving through the `import` and/or `require` statements) and bundles them into one file called `bundle.js`. `bundle.js` is then loaded by a script tag in the `index.html`. The server currently has webpack's hot module reloading middleware set up, meaning that any changes to react/redux code will not trigger a complete re-bundle, but rather will update "inline" and the changes will be immediately reflected in the browser. 
