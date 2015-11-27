import React from 'react';

var TextDisplay = React.createClass({

  render: function() {

    return (
      <div>
        {this.props.passedDownText}
      </div>
    )
  }

});

module.exports = TextDisplay;
