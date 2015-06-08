var React = require('react');

var Form = React.createClass({
  render: function() {
    return (
      <form>
        {this.props.children}
      </form>
    );
  }
});

Form.Input = React.createClass({
  render: function() {
    return (
      <div className="form-group">
        <label for={this.props.id}>{this.props.label}</label>
        <input type={this.props.type} className="form-control" id={this.props.id} placeholder={this.props.placeholder} />
      </div>
    );
  }
});

Form.Textarea = React.createClass({
  render: function() {
    return (
      <div className="form-group">
        <label for={this.props.id}>{this.props.label}</label>
        <textarea className="form-control" id={this.props.id} placeholder={this.props.placeholder} rows={this.props.rows}/>
      </div>
    );
  }
});

Form.Submit = React.createClass({
  render: function() {
    return (
      <button type="submit" className="btn btn-default">{this.props.value}</button>
    );
  }
});

module.exports = Form;
