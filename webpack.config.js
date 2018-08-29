const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: "./app/js/entry", 
  output: {
    path: path.resolve(__dirname, "dist"), 
    filename: "bundle.js",
    publicPath: "/", 
  },
  resolve: {
		modules: [
		  "node_modules",
		  path.resolve(__dirname, "app"),
		  path.resolve(__dirname, "app/js"),
		  path.resolve(__dirname, "app/sass"),
      path.resolve(__dirname, "app/imgs"),
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
    contentBase: path.resolve(__dirname, "dist"), 
    compress: true, 
    https: false, 
    historyApiFallback: true,
  },
  plugins: [
 		new HtmlWebpackPlugin({
 			 title: 'Loading...',
      filename: 'index.html'
 		})
  ],
  mode: "development"
}