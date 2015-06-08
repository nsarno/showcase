var React = require('react');
var DefaultNavbar = require('DefaultNavbar');

var Navbar = React.createClass({
  render: function() {
    return (
      <DefaultNavbar>
        <DefaultNavbar.Header brand="Home"/>
        <DefaultNavbar.Menu>
          <DefaultNavbar.Menu.Link value="Contact" href="/#/contact"/>
        </DefaultNavbar.Menu>
      </DefaultNavbar>
    );
  }
});

module.exports = Navbar;
