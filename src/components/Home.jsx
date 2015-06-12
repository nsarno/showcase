var React = require('react');
var DocumentTitle = require('react-document-title');
var $ = require('jquery');

var NextSectionLink = React.createClass({

  goToNextSection: function(e) {
    $('html, body').animate({
      scrollTop: $(this.props.section).offset().top
    }, 500);
  },

  render: function() {
    return (
      <div className="next-section-link">
        <a href="#" onClick={this.goToNextSection}><i className="fa fa-angle-double-down"></i></a>
      </div>
    );
  }
});

var Home = React.createClass({

  render: function() {
    return (
      <div id="home" className="container-fluid">
        <DocumentTitle title="Home" />
        <section id="section-start">
          <div className="catch">
            <h1>Need a <strong>developer</strong>?</h1>
          </div>
          <NextSectionLink section="#section-end"/>
        </section>
        <section id="section-end">
          <div className="call-to-action">
            <a href="/#/contact"><i className="fa fa-envelope"></i></a>
          </div>
        </section>
      </div>
    );
  }
});

module.exports = Home;
