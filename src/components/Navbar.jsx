var React = require('react');

var Navbar = React.createClass({
  render: function() {
    return (
      <nav className="navbar navbar-fixed-top">
        <div className="container-fluid">
            <div className="navbar-header pull-left">
              <div className="navbar-brand navbar-brand-centered">
                <a href="#"><i className="fa fa-diamond"></i></a>
              </div>
            </div>
            <ul className="nav navbar-nav navbar-right pull-right">
              <li><a href="/#/contact"><i className="fa fa-envelope-o"></i></a></li>
            </ul>
        </div>
      </nav>
    );
  }
});

module.exports = Navbar;
