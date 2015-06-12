var React = require('react');
var DocumentTitle = require('react-document-title');

var Home = React.createClass({
  render: function() {
    return (
      <div id="home" className="container">
        <DocumentTitle title='Home' />
        <section className="row">
          <div className="col-md-4 col-md-offset-4 col-centered vertical-center">
            <h1>Hello, world!</h1>
          </div>
        </section>
      </div>
    );
  }
});

module.exports = Home;
