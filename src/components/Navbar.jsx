var React = require('react');

var NavbarToggle = React.createClass({
  render: function() {
    return (
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#nav-menu">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
    );
  }
});

var NavbarBrand = React.createClass({
  render: function() {
    return (
      <a className="navbar-brand" href="#">{this.props.name}</a>
    );
  }
});

var NavbarMenu = React.createClass({
  render: function() {
    return (
      <div className="collapse navbar-collapse" id="nav-menu">
        <ul className="nav navbar-nav navbar-right">
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    );
  }
});

var Navbar = React.createClass({
  getInitialState: function() {
    return ({
      brand: 'X'
    });
  },
  render: function() {
    return (
      <div className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <NavbarToggle />
            <NavbarBrand name="X" />
          </div>
          <NavbarMenu />
        </div>
      </div>
    );
  }
});

module.exports = Navbar;
