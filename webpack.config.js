var path = require('path');
var BUILD_DIR = path.resolve(__dirname, 'build/');

module.exports = {
  entry: './src/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'SelfBaroque.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
    ]
  }
};
