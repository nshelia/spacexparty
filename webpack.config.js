const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const mainPath = (dir) => path.resolve(__dirname + '/src/frontend/' + dir) 

module.exports = {
  entry: "./src/frontend/js/entry", 
  output: {
    path: path.resolve(__dirname, "build"), 
    filename: "bundle.js",
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
        test: /\.scss$/,
        use: [
            "style-loader", 
            "css-loader", 
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
 		new HtmlWebpackPlugin({
 			 title: 'Loading...',
      filename: 'index.html'
 		})
  ],
  mode: "development"
}