const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')
const CleanWebpackPlugin = require('clean-webpack-plugin');
const reactLoadablePlugin = require('react-loadable/webpack').ReactLoadablePlugin;
const OfflinePlugin = require('offline-plugin');

const isDev = process.env.NODE_ENV !== 'production'
const mainPath = (dir) => path.resolve(__dirname + '/../src/client/' + dir) 

let plugins = [
  new HtmlWebpackPlugin({
    title: 'Loading...',
    filename: 'index.html',
    template: './src/client/template/index.html',
    inject:true
  }),
  new MiniCssExtractPlugin({
    filename: isDev ? '[name].css' : '[name].[hash].css',
    chunkFilename: isDev ? '[id].css' : '[id].[hash].css'
  }),
  new Dotenv(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  }),
]

if (!isDev) {
  plugins = [...plugins,
    new CleanWebpackPlugin(["build"],{ root:  path.resolve(__dirname, "../")}),
    new reactLoadablePlugin({filename: path.resolve(__dirname, "../build/react-loadable.json")}),
    new OfflinePlugin({
      ServiceWorker: {
        events: true
      }
    }),
  ]
}

module.exports = {
  mode: isDev ? 'development' : 'production',
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel:true,
        terserOptions: {
          output: {
            comments: false
          }
        }
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: ['default', { discardComments: { removeAll: true } }],
        },
        canPrint: true
      })
    ]
  },
  "target": "web",
  entry: {
    index: "./src/client/js/entry"
  },
  output: {
    path: path.resolve(__dirname, "../build"), 
    filename: "[name].bundle.js",
    chunkFilename: "[name]-[chunkhash].chunk.js",
    publicPath: '/static/', 
  },
  resolve: {
    modules: [
      "node_modules",
      mainPath("js"),
      mainPath("imgs"),
    ],
    extensions: [".js",".json"],
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
        test: /\.(png|jpg|gif|svg|ico)$/,
        loader: 'file-loader',
        options: {
          name: isDev ? '[name].[ext]' : '[name]-[hash].[ext]'
        }
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
  plugins,
  devServer: {
    contentBase: path.resolve(__dirname, "../build"), 
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
