const path = require('path');
const webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: {
    index: './index.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'umd'
  },
  externals: ['aws-sdk', 'dynamodb-doc'],
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: [{
        loader: 'babel-loader',
        options: { presets: ['env'] }
      }]
    }]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      // jshint camelcase: false
      mangle: true,
      compress: {
        warnings: false,
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        screw_ie8: true
      },
      output: {
        comments: false,
      }
    })
  ]
};
