const webpack = require('webpack')
const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin')

const PATHS = {
  app: path.join(__dirname, 'src'),
  js: path.join(__dirname, 'src', 'js'),
  sass: path.join(__dirname, 'src', 'styles', 'scss'),
  build: path.join(__dirname, 'build')
}

module.exports = {
  context: PATHS.app,
  devtool: 'cheap-module-source-map',
  entry: path.join(PATHS.js, './client.js'),
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: ["babel-loader", "eslint-loader"]
			},
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        include: [
          path.resolve(__dirname, 'src/styles')
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/i,
        include: [
          path.resolve(__dirname, 'src/styles/fonts')
        ],
        loaders: [
          'file-loader?name=[path][name].[ext]',
          'image-webpack'
        ]
      },
      {
        test: /\.(png|svg)$/i,
        include: [
          path.resolve(__dirname, 'src/images')
        ],
        loaders: [
          'file-loader?name=[path][name].[ext]',
          'image-webpack'
        ]
      }
    ],
    sassLoader: {
      includePaths: [PATHS.sass]
    },
    output: {
      path: PATHS.build,
      filename: 'client.min.js'
    },
    eslint: {
      configFile: './.eslintrc'
    },
    externals: {
      "tiny": "tiny",
      "chico": "ch"
    },
    plugins: [
      new webpack.LoaderOptionsPlugin({
        options: {}
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.UglifyJsPlugin(
        {
          mangle: false,
          sourcemap: false,
          compress: {
            warnings: false
          },
          output: {
            comments: false
          }
        }
      ),
      new CopyWebpackPlugin([
        {
          from: '../src/index.html',
          to: 'index.html'
        }
      ])
    ]
  }
}
