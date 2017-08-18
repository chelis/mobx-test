/*
    ./webpack.config.js
*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, "dist"),
    filename: 'bundle.js'
  },
   plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'dist/index.html'),
      inject: 'head',
      hash: true
    })
  ], 
devServer: {
    contentBase: "dist/",
},  
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  }
}