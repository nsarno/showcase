var React = require('react');
var DefaultNavbar = require('DefaultNavbar');

var Navbar = React.createClass({
  render: function() {
    return (
      <DefaultNavbar>
        <DefaultNavbar.Header>
          <i className="fa fa-diamond"></i>
        </DefaultNavbar.Header>
        <DefaultNavbar.Menu>
          <li><a href="/#/contact"><i className="fa fa-envelope"></i></a></li>
        </DefaultNavbar.Menu>
      </DefaultNavbar>
    );
  }
});

module.exports = Navbar;
