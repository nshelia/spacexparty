const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')

const isDev = process.env.NODE_ENV !== 'production'
const mainPath = (dir) => path.resolve(__dirname + '/src/frontend/' + dir) 

module.exports = {
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: false,
        uglifyOptions: {
          output: {
            comments: false
          }
        }
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },
  entry: {
    index: "./src/frontend/js/entry"
  },
  output: {
    path: path.resolve(__dirname, "build"), 
    filename: "[name].bundle.js",
    chunkFilename: "[name]-[chunkhash].chunk.js",
    publicPath: '/', 
  },
  resolve: {
    modules: [
      "node_modules",
      mainPath("src"),
      mainPath("js"),
      mainPath("sass"),
      mainPath("imgs"),
    ],
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
      },
      {
        test: /\.scss$/,
        use: [
          isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader?sourceMap',
          'resolve-url-loader',
          'sass-loader?sourceMap',
          'import-glob-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Loading...',
      filename: 'index.html'
    }),
    new MiniCssExtractPlugin({
      filename: isDev ? '[name].css' : '[name].[hash].css',
      chunkFilename: isDev ? '[id].css' : '[id].[hash].css',
    }),
    new Dotenv(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  devServer: {
    port: 3000,
    open: true,
    compress: true, 
    https: false, 
    historyApiFallback: true,
    proxy: {
        "/api": "http://localhost:8080"
    }
  },
  devtool: false
}

