var React = require('react');
var DocumentTitle = require('react-document-title');
var $ = require('jquery');

function toggleBrand() {
  if ($('body').scrollTop() >= $('.logo').height() - $('.logo').offset().top) {
    $('.navbar-brand').fadeIn();
  } else {
    $('.navbar-brand').fadeOut();
  }
}

var Home = React.createClass({
  componentDidMount: function() {
    $('.navbar-brand').hide();
    $(window).scroll(toggleBrand);
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
            <div className="col-sm-6 col-md-4">
              <div className="thumbnail">
                <img data-src="holder.js/100%x200" alt="100%x200" style={{height: '200px', width: '100%', display: 'block'}} src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjQyIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDI0MiAyMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjxkZWZzLz48cmVjdCB3aWR0aD0iMjQyIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjkyLjQ1MzEyNSIgeT0iMTAwIiBzdHlsZT0iZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjExcHQ7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+MjQyeDIwMDwvdGV4dD48L2c+PC9zdmc+" data-holder-rendered="true" />
                <div className="caption">
                  <h3 id="thumbnail-label">Thumbnail label<a className="anchorjs-link" href="#thumbnail-label"><span className="anchorjs-icon"></span></a></h3>
                  <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                  <p><a href="#" className="btn btn-primary" role="button">Button</a> <a className="btn btn-default" role="button">Button</a></p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4">
              <div className="thumbnail">
                <img data-src="holder.js/100%x200" alt="100%x200" style={{height: '200px', width: '100%', display: 'block'}} src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjQyIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDI0MiAyMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjxkZWZzLz48cmVjdCB3aWR0aD0iMjQyIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjkyLjQ1MzEyNSIgeT0iMTAwIiBzdHlsZT0iZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjExcHQ7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+MjQyeDIwMDwvdGV4dD48L2c+PC9zdmc+" data-holder-rendered="true" />
                <div className="caption">
                  <h3 id="thumbnail-label">Thumbnail label<a className="anchorjs-link" href="#thumbnail-label"><span className="anchorjs-icon"></span></a></h3>
                  <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                  <p><a href="#" className="btn btn-primary" role="button">Button</a> <a className="btn btn-default" role="button">Button</a></p>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-md-4">
              <div className="thumbnail">
                <img data-src="holder.js/100%x200" alt="100%x200" style={{height: '200px', width: '100%', display: 'block'}} src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9InllcyI/PjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjQyIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDI0MiAyMDAiIHByZXNlcnZlQXNwZWN0UmF0aW89Im5vbmUiPjxkZWZzLz48cmVjdCB3aWR0aD0iMjQyIiBoZWlnaHQ9IjIwMCIgZmlsbD0iI0VFRUVFRSIvPjxnPjx0ZXh0IHg9IjkyLjQ1MzEyNSIgeT0iMTAwIiBzdHlsZT0iZmlsbDojQUFBQUFBO2ZvbnQtd2VpZ2h0OmJvbGQ7Zm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmLCBtb25vc3BhY2U7Zm9udC1zaXplOjExcHQ7ZG9taW5hbnQtYmFzZWxpbmU6Y2VudHJhbCI+MjQyeDIwMDwvdGV4dD48L2c+PC9zdmc+" data-holder-rendered="true" />
                <div className="caption">
                  <h3 id="thumbnail-label">Thumbnail label<a className="anchorjs-link" href="#thumbnail-label"><span className="anchorjs-icon"></span></a></h3>
                  <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                  <p><a href="#" className="btn btn-primary" role="button">Button</a> <a className="btn btn-default" role="button">Button</a></p>
                </div>
              </div>
            </div>

          </div>
        </section>
        <section id="section-3">
        </section>
      </div>
    );
  }
});

module.exports = Home;
