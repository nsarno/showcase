var path = require('path');

var entry_path = path.resolve(path.join('src', 'components', 'app.jsx'));
var dist_path = path.resolve('dist');
var components_path = path.resolve(path.join('src', 'components'));

var config = {
  entry: entry_path,
  output: {
    path: dist_path,
    filename: 'bundle.js'
  },
  resolve: {
    root: components_path,
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel' }
    ]
  }
}

module.exports = config;
