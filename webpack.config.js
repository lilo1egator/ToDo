'use strict';

let path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist/js'
  },
  target: 'web',
  watch: true,
  devtool: "source-map",
  module: {}
};
