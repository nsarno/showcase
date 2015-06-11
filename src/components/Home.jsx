var React = require('react');
var DocumentTitle = require('react-document-title');

var Home = React.createClass({
  render: function() {
    return (
      <div className="container">
        <DocumentTitle title='Home' />
        <section>
          <h1>Hello, world!</h1>
        </section>
      </div>
    );
  }
});

module.exports = Home;