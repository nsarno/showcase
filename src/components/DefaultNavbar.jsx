var React = require('react');

var DefaultNavbar = React.createClass({
  render: function() {
    return (
      <div className="navbar navbar-default">
        <div className="container-fluid">
          {this.props.children}
        </div>
      </div>
    );
  }
});

DefaultNavbar.Header = React.createClass({
  render: function() {
    return (
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-menu">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#">{this.props.brand}</a>
      </div>
    );
  }
});

DefaultNavbar.Menu = React.createClass({
  render: function() {
    return (
      <div className="collapse navbar-collapse" id="nav-menu">
        <ul className="nav navbar-nav navbar-right">
          {this.props.children}
        </ul>
      </div>
    );
  }
});

DefaultNavbar.Menu.Link = React.createClass({
  render: function() {
    return (
      <li><a href={this.props.href}>{this.props.value}</a></li>
    );
  }
});

module.exports = DefaultNavbar;
