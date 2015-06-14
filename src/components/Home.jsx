var React = require('react');
var DocumentTitle = require('react-document-title');
var $ = require('jquery');

function toggleBrand() {
  if ($('body').scrollTop() >= $('#section-2').offset().top) {
    $('.navbar-brand').fadeIn();
  } else {
    $('.navbar-brand').fadeOut();
  }
}

var Home = React.createClass({
  componentDidMount: function() { 
    toggleBrand();
    $(window).scroll(toggleBrand);
    togglePizza();
  },

  componentWillUnmount: function() {
    $('.navbar-brand').fadeIn();
  },

  render: function() {
    return (
      <div id="home" className="container-fluid">
        <DocumentTitle title="Home" />
        <header id="header">
          <div className="logo"><i className="fa fa-diamond"></i></div>
          <h1>
            <span className="name">Arnaud Mesureur</span>
            <span className="location">Paris, France</span>
            <span className="tagline">Full stack developer, passionate hacker & 🍕 slayer</span>
          </h1>
        </header>
        <section id="section-2">
        </section>
        <section id="section-3">
        </section>
      </div>
    );
  }
});

module.exports = Home;
