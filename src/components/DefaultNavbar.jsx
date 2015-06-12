var React = require('react');

var DefaultNavbar = React.createClass({
  render: function() {
    return (
      <div className="navbar navbar-default navbar-fixed-top">
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
        <div className="navbar-brand navbar-brand-centered">
          <a href="#">{this.props.children}</a>
        </div>
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

module.exports = DefaultNavbar;
