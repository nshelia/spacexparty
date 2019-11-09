const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const LoadablePlugin = require('@loadable/webpack-plugin')
const baseConfig = require('./webpack.config.base.js')

const dotenv = require('dotenv').config({
  path: path.resolve(__dirname, '../.env')
});

const isDev = process.env.NODE_ENV !== 'production'
const isOnlyClientSide = process.env.ONLY_CLIENT_SIDE

module.exports = {
  ...baseConfig,
  target: "web",
  entry: {
    index: "./src/client/js/entry"
  },
  output: {
    path: path.resolve(__dirname, "../build"),
    filename: "[name].bundle.js",
    chunkFilename: "[name]-[chunkhash].chunk.js",
    publicPath: isOnlyClientSide ? '/' : '/static/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Loading...',
      filename: 'index.html',
      template: './src/client/template/index.html',
      inject: isOnlyClientSide
    }),
    new MiniCssExtractPlugin({
      filename: isDev ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDev ? '[id].css' : '[id].[hash].css'
    }),
    new Dotenv(),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.parsed),
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new CleanWebpackPlugin(["build"], { root: path.resolve(__dirname, "../") }),
    new LoadablePlugin(),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "build"),
    port: 3000,
    open: true,
    compress: true,
    https: false,
    historyApiFallback: {
      disableDotRule: true
    },
    proxy: {
      "/api": "http://localhost:8080"
    }
  }
}
