var React = require('react');
var Navbar = require('Navbar');
var DocumentTitle = require('react-document-title');

var Home = React.createClass({
  render: function() {
    return (
      <div className="home">
        <Navbar />
        <div className="container">
          <DocumentTitle title='Home'>
            <h1>Home</h1>
          </DocumentTitle>
          <p>Hello, world</p>
        </div>
      </div>
    );
  }
});

module.exports = Home;