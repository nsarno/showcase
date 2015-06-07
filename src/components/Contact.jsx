var React = require('react');
var DocumentTitle = require('react-document-title');

var Contact = React.createClass({
  render: function() {
    return (
      <div className="container">
        <DocumentTitle title='Contact'>
          <h1>Contact</h1>
        </DocumentTitle>
      </div>
    );
  }
});

module.exports = Contact;