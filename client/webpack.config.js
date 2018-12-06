const webpack = require('webpack')
const path = require('path')

module.exports = {
  context: path.join(__dirname, 'src'),
  devtool: 'inline-sourcemap',
  entry: './js/client.js',
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
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      /* {
        test: /\.json?$/,
        loader: 'json-loader'
      }, */
      {
        test: /manifest.json$/,
        loaders: [
          'file-loader?name=manifest.json!web-app-manifest-loader',
          'image-webpack'
        ]
      },
      {
        test: /\.scss$/,
        loaders: [ 'style', 'css', 'sass' ]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf)$/,
        loader: 'file-loader?name=../build/styles/fonts/[name].[ext]'
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack'
        ]
      }
    ]
  },
  imageWebpackLoader: {
    mozjpeg: {
      quality: 65
    },
    pngquant:{
      quality: "65-90",
      speed: 4
    },
    svgo:{
      plugins: [
        {
          removeViewBox: false
        },
        {
          removeEmptyAttrs: false
        }
      ]
    }
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
  eslint: {
    configFile: './.eslintrc'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('integration')
      }
    })
  ]
}
