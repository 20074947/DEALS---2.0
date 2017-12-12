var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var CleanWebpackPlugin = require("clean-webpack-plugin");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  debug: true,
  devtool: "source-map",
  noInfo: false,
  entry: [    
    "./public/javascripts/angularApp" 
  ],
  target: "web",
  output: {
    path: path.join(__dirname, "build"),
    publicPath: "http://localhost:3000/",
    filename: "[name]-[hash].js"
  }, 
  module: {
    loaders: [
      { test: /\.js$/, 
        exclude: /node_modules/,
        loader: "babel-loader"},
      {          test: /\.(svg|png|jpe?g|gif)(\?\S*)?$/, 
        loader: "url?limit=100000&name=img/[name].[ext]"
      },
      {
        test: /\.(eot|woff|woff2|ttf)(\?\S*)?$/, 
        loader: "url?limit=100000&name=fonts/[name].[ext]"
      } ,{
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style", "css")
      }
    ],
    plugins: [
      new ExtractTextPlugin("[name]-[hash].css")
    ]}
};