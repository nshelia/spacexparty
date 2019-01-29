const nodeExternals = require('webpack-node-externals');
const path = require('path');
const mainPath = (dir) => path.resolve(__dirname + '/../src/client/' + dir) 
const Dotenv = require('dotenv-webpack')
const isDev = process.env.NODE_ENV !== 'production'
const TerserPlugin = require('terser-webpack-plugin')

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
      })
    ]
  },
  target: 'node',
  externals: [nodeExternals()],
  entry: './src/server/server.js',
  output: {
    path: path.resolve(__dirname, "../build/server"), 
    publicPath: '/static/',
    filename: 'server.js',
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
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: isDev ? '[name].[ext]' : '[name]-[hash].[ext]'
        }
      }
    ]
  },
  plugins: [
    new Dotenv(),
  ],
}
