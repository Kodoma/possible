const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
var ImageminPlugin = require('imagemin-webpack-plugin').default

const DIST_DIR = path.resolve(__dirname,"dist");
const SRC_DIR = path.resolve(__dirname,"src");


const DEV_MODE = process.env.WEBPACK_SERVE;

module.exports = {
  context: path.join(__dirname, 'src'),
  devtool: 'inline-sourcemap',
  entry: './js/client.js',
  stats: {
    warnings: false,
    colors: true
  },
  module:
  {
		rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: ["babel-loader", "eslint-loader"]
			},
      {
        test: /manifest.json$/,
        loaders: [
          'file-loader?name=manifest.json!web-app-manifest-loader',
          'image-webpack'
        ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf)$/,
        loader: 'file-loader?name=../build/styles/fonts/[name].[ext]'
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|ttf|eot|svg)$/,
        use: [
            {
                loader: "file-loader",
                options: {
                    name: `[name].[ext]`
                }
            }
        ]
      }
    ]
	},
  devServer: {
    inline: true,
    contentBase: './src',
    host: '0.0.0.0',
    port: 5000,
    historyApiFallback: true
  },
  output: {
    path: path.join(__dirname, '/src/'),
    filename: 'client.min.js'
  },
  externals: {
    "tiny": "tiny",
    "chico": "ch"
  },
  plugins: [
    prodPlugin(new CleanWebpackPlugin([DIST_DIR])),
    new webpack.LoaderOptionsPlugin({
      options: {}
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(SRC_DIR, 'index.html'),
      favicon: path.resolve(SRC_DIR, 'assets/favicon.ico')
    }),
    new ImageminPlugin({
      disable: process.env.NODE_ENV !== 'production', // Disable during development
      pngquant: {
        quality: '95-100'
      }
    }),
    new ExtractTextPlugin({
      filename: 'possible.css'
    })
  ]
}

function prodPlugin(plugin) {
  return !DEV_MODE ? plugin : () => {};
}