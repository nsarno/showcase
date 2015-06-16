var React = require('react');

var Form = React.createClass({
  render: function() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        {this.props.children}
      </form>
    );
  }
});

Form.Input = React.createClass({
  render: function() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <input  
          className="form-control"
          type={this.props.type}
          id={this.props.id}
          placeholder={this.props.placeholder}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
});

Form.Textarea = React.createClass({
  render: function() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.id}>{this.props.label}</label>
        <textarea
          className="form-control"
          id={this.props.id}
          placeholder={this.props.placeholder}
          rows={this.props.rows}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
});

Form.Submit = React.createClass({
  render: function() {
    return (
      <button type="submit" className="btn btn-default submit"><i className="fa fa-paper-plane-o"></i></button>
    );
  }
});

module.exports = Form;
