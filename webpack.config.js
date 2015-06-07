var path = require('path');

var config = {
  entry: path.resolve('./src/app.jsx'),
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel' },
      { test: /\.jsx$/, exclude: /node_modules/, loader: 'babel' }
    ]
  }
}

module.exports = config;
