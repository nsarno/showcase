var React = require('react');
var DocumentTitle = require('react-document-title');
var $ = require('jquery');

var Card = React.createClass({
  render: function() {
    return (
      <div className="card col-sm-6 col-md-4">
        <div className="thumbnail">
          <img style={{backgroundImage: 'url(' + this.props.imgSrc + ')'}} src="assets/blank.png"/>
          <div className="caption">
            <h3 id="thumbnail-label">{this.props.name}</h3>
            {this.props.children}
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
        <DocumentTitle title="Arnaud Mesureur" />
        <header id="header">
          <div className="logo"><i className="fa fa-diamond"></i></div>
          <h1>
            <span className="name">Arnaud Mesureur</span>
            <span className="location">Paris, France</span>
            <span className="tagline">Full stack developer & passionate hacker</span>
          </h1>
        </header>
        <section id="stack">
          <h2><i className="fa fa-cubes"></i> Tech Stack</h2>
          <div className="row">
            <Card name="Rails" imgSrc="/assets/rails.jpg">
              <p>
                Rails is my favorite framework to build rock solid, state of the art restful api.
                I love me some rails-api & CORS for
                a fully isolated and lightweight backend, consumed indifferently by mobile or web apps.
                Seasoned with some JWT to make it perfectly stateless... et voilà!
              </p>
            </Card>

            <Card name="React" imgSrc="/assets/react.png">
              <p>
                React recently became my weapon of choice to build dynamic web applications.
                Clean, powerful, flexible, highly reusable... those are not adjectives developer used to associate with their frontend codebase.
                What used to be a nightmare just became a breeze thanks to the guys at Facebook & Instagram.
              </p>
            </Card>

            <Card name="iOS" imgSrc="/assets/ios.jpg">
              <p>
                I'm a mobile developer first. From iOS 4.0 to what it is now and from Objective-C to Swift, I grew up as a developer with
                an iPhone in my hand and Xcode on my screen.
              </p>
            </Card>
          </div>
        </section>
        <section id="xp">
          <div className="row">
            <h2><i className="fa fa-coffee"></i> Experience</h2>
            <Card name="Appsfire" imgSrc="/assets/appsfire.png">
              <ul>
                <li>Integrated Appsfire SDK in frameworks like Titanium, Phonegap, Unity</li>
                <li>Built demo applications to showcase Appsfire SDK</li>
                <li>Created original animations for the Appsfire app</li>
              </ul>
            </Card>
            <Card name="Quanta" imgSrc="/assets/quanta.png">
              <ul>
                <li>Built from scratch Quanta Monitoring, a performance intelligence application</li>
                <li>Created and maintained a data intensive Rails API</li>
                <li>Managed and optimized ever growing databases (billions+ of rows) on a daily basis</li>
                <li>Built a complex single page application with AngularJS</li>
                <li>Created scripts to aggregate data from various sources like Google Analytics, Zabbix, Magento.</li>
              </ul>
            </Card>
            <Card name="Epitech" imgSrc="/assets/epitech.png">
              <ul>
                <li>C programing language teacher</li>
                <li>Unix system teacher</li>
                <li>Web development teacher</li>
              </ul>
            </Card>
          </div>
        </section>
        <section id="achievements">
          <div className="row">
            <h2>
              <i className="fa fa-star-o"></i>
              <i className="fa fa-star-o"></i>
              <i className="fa fa-star-o"></i> Achievements
            </h2>
            <Card name="Epitech" imgSrc="/assets/epitech.png">
              <p>Master in Computer Science</p>
            </Card>
            <Card name="StartupBus" imgSrc="/assets/startupbus.png">
              <p>Finalist at StartupBus Europe 2014</p>
            </Card>
            <Card name="CSULB" imgSrc="/assets/csulb.png">
              <p>American Language Institute Certificate</p>
            </Card>
          </div>
        </section>
        <section id="contact-me">
          <p>
            Am I a great fit for your team?
          </p>
          <a className="btn btn-default btn-primary">contact me</a>
        </section>
        <footer>
          <div className="social">
            <a href="https://github.com/nsarno"><i className="fa fa-github"></i></a>
            <a href="https://www.linkedin.com/in/arnaudmesureur"><i className="fa fa-linkedin"></i></a>
            <a href="https://angel.co/nsarno"><i className="fa fa-angellist"></i></a>
          </div>
          <p>Arnaud Mesureur © 2015</p>
        </footer>
      </div>
    );
  }
});

module.exports = Home;
