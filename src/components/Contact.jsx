var React = require('react');
var Form = require('Form');
var DocumentTitle = require('react-document-title');
// var mandrill = require('mandrill-api/mandrill');
var $ = require('jquery');

var ContactForm = React.createClass({
  render: function() {
    var { handleSubmit, ...other } = this.props;
    return (
      <Form handleSubmit={handleSubmit}>
        <Form.Input {...other} id="name" label="What's your name?" type="text" placeholder="John Doe" />
        <Form.Input {...other} id="email" label="What's your email address?" type="email" placeholder="john.doe@example.net" />
        <Form.Textarea {...other} id="message" label="Please leave your message." placeholder="Hi ..." rows="10" />
        <Form.Submit />
      </Form>
    );
  }
});

var Contact = React.createClass({
  getInitialState: function() {
    return {
      name: "",
      email: "",
      message: ""
    };
  },

  send: function() {
    var message = {
      "text": this.state.message,
      "subject": "Contact",
      "from_email": this.state.email,
      "from_name": this.state.name,
      "to": [{
        "email": "arnaud.mesureur@gmail.com",
        "name": "Arnaud Mesureur",
        "type": "to"
      }]
    };

    $.ajax({
      type: "POST",
      url: "https://mandrillapp.com/api/1.0/messages/send.json",
      data: {
        'key': '_rWLfrC4VDPa2GvY84AN_g',
        'message': message
      }
    }).done(function(result) {
      console.log(result);
    }).fail(function(error) {
      console.log(error);
    });
  },

  handleSubmit: function(event) {
    event.preventDefault();
    this.send();
  },

  handleChange: function(event) {
    var state = {}
    state[event.target.id] = event.target.value;
    this.setState(state);
  },

  render: function() {
    return (
      <div id="contact" className="container">
        <DocumentTitle title='Contact'/>
        <ContactForm handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
      </div>
    );
  }
});

module.exports = Contact;
