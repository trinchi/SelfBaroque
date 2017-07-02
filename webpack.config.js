var path = require('path');
var BUILD_DIR = path.resolve(__dirname, 'build/');

module.exports = {
  entry: './src/index.jsx',
  output: {
      path: BUILD_DIR,
      publicPath: "build/",
      filename: 'SelfBaroque.js'
  },
  module: {
      rules: [
          {
              test: /\.jsx$/,
              exclude: /node_modules/,
              loader: 'babel-loader'
          }
      ]
  }
};
