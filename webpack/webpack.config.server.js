const nodeExternals = require('webpack-node-externals');
const path = require('path');
const Dotenv = require('dotenv-webpack')
const baseConfig = require('./webpack.config.base.js')

module.exports = {
  ...baseConfig,
  target: 'node',
  externals: [nodeExternals()],
  entry: './src/server/server.js',
  output: {
    path: path.resolve(__dirname, "../build/server"),
    publicPath: '/static/',
    filename: 'server.js',
  },
  plugins: [
    new Dotenv()
  ],
}
