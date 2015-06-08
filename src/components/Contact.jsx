var React = require('react');
var Form = require('Form');
var DocumentTitle = require('react-document-title');

var ContactForm = React.createClass({
  render: function() {
    return (
      <Form>
        <Form.Input id="name" label="Name" type="text" placeholder="Your name"/>
        <Form.Input id="email" label="Email address" type="email" placeholder="Your email address"/>
        <Form.Textarea id="message" label="Message" placeholder="Hi ..." rows="10"/>
        <Form.Submit value="Send"/>
      </Form>
    );
  }
});

var Contact = React.createClass({
  render: function() {
    return (
      <div className="container">
        <DocumentTitle title='Contact'/>
        <h1>Contact</h1>
        <ContactForm />
      </div>
    );
  }
});

module.exports = Contact;
