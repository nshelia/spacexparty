const path = require('path');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require('terser-webpack-plugin')
const isDev = process.env.NODE_ENV !== 'production'
const mainPath = (dir) => path.resolve(`${__dirname}/../src/client/${dir}`)

module.exports = {
  mode: isDev ? 'development' : 'production',
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        terserOptions: {
          output: {
            comments: false
          }
        }
      }),
      new OptimizeCSSAssetsPlugin({
        // eslint-disable-next-line global-require
        cssProcessor: require('cssnano'),
        cssProcessorPluginOptions: {
          preset: [
            'default',
            { discardComments: { removeAll: true } }
          ],
        },
        canPrint: true
      })
    ]
  },
  resolve: {
    modules: [
      "node_modules",
      mainPath("js"),
      mainPath("imgs"),
    ],
    extensions: [
      ".js",
      ".json"
    ],
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
  devtool: isDev ? 'source-map' : false
}
