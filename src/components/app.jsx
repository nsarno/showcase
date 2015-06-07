var React = require('react');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;

var Navbar = require('Navbar');
var Home = require('Home');
var Contact = require('Contact');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Navbar />
        <RouteHandler/>
      </div>
    );
  }
});

var routes = (
  <Route name='app' path='/' handler={App}>
    <DefaultRoute handler={Home}/>
    <Route name='contact' handler={Contact}/>
  </Route>

);

Router.run(routes, function (Handler) {
  React.render(<Handler/>, document.body);
});
