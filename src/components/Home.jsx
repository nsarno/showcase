var React = require('react');
var DocumentTitle = require('react-document-title');
var $ = require('jquery');

var WeaponCard = React.createClass({
  render: function() {
    return (
      <div className="weapon-card col-sm-6 col-md-4">
        <div className="thumbnail">
          <img style={{backgroundImage: 'url(' + this.props.imgSrc + ')'}} src="assets/blank.png"/>
          <div className="caption">
            <h3 id="thumbnail-label">{this.props.name}</h3>
            <p>{this.props.children}</p>
          </div>
        </div>
      </div>
    );
  }
});

var Home = React.createClass({
  componentDidMount: function() {
    $('.navbar-brand').hide();
    $(window).scroll(function() {
      if ($('body').scrollTop() >= $('.logo').height() - $('.logo').offset().top) {
        $('.navbar-brand').fadeIn();
      } else {
        $('.navbar-brand').fadeOut();
      }
    });
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
        <section id="stack">
          <div className="row">
            <WeaponCard name="Rails" imgSrc="/assets/rails.jpg">
              Rails is my favorite framework to build rock solid, state of the art restful api.
              I love me some rails-api & CORS for a fully separated backend: mobile or web, one api to rule them all!
              Seasoned with some JWT to make it perfectly stateless... et voilà!
            </WeaponCard>

            <WeaponCard name="React" imgSrc="/assets/react.png">
              React recently became my weapon of choice to build a dynamic frontend web application.
              Clean, powerful, flexible, highly reusable... those are not adjectives developer used to associate with their frontend codebase.
              What used to be a nightmare just became a breeze thanks to the guys at Facebook & Instagram.
            </WeaponCard>

            <WeaponCard name="iOS" imgSrc="/assets/ios.jpg">
              I'm a mobile developer first. From iOS 4.0 to what it is now and from Objective-C to Swift, I grew up as a developer with
              an iPhone in my hand and Xcode on my screen.
            </WeaponCard>
            
          </div>
        </section>
        <section id="section-3">
        </section>
      </div>
    );
  }
});

module.exports = Home;
