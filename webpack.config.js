const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')
const Dotenv = require('dotenv-webpack')

const mainPath = (dir) => path.resolve(__dirname + '/src/frontend/' + dir) 

module.exports = {
  mode: "none",
  entry: {
    index: "./src/frontend/js/entry"
  },
  output: {
    path: path.resolve(__dirname, "build"), 
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
    publicPath: '/', 
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            comments: false
          }
        }
      })
    ]
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
        test: /\.scss$/,
        use: [
            "style-loader", 
            "css-loader",
            "postcss-loader?sourceMap", 
            "resolve-url-loader",
            "sass-loader?sourceMap",
            "import-glob-loader"
        ]
      },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
          }
        ]
      }
		]
	},
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
  plugins: [
    new Dotenv(),
 		new HtmlWebpackPlugin({
 			 title: 'Loading...',
      filename: 'index.html'
 		}),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV)
      }
    })
  ],
}
