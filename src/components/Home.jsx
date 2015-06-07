var React = require('react');
var DocumentTitle = require('react-document-title');

var Home = React.createClass({
  render: function() {
    return (
      <div className="container">
        <DocumentTitle title='Home'>
          <h1>Home</h1>
        </DocumentTitle>
      </div>
    );
  }
});

module.exports = Home;