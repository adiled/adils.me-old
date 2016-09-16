var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack')

module.exports = {
  context: __dirname + "/app",
  entry: {
    javascript: "./app.js",
    html: "./index.html"
  },

  output: {
    filename: "app.js",
    path: __dirname + "/dist",
  },

  module: {
    loaders: [

      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ["react-hot", "babel-loader"] },

      { test: /\.html$/, loader: "file?name=[name].[ext]" },

      { test: /\.scss$/, loader: ExtractTextPlugin.extract("style", "css!sass") },
      { test: /\.css$/, loader: ExtractTextPlugin.extract("style", "css") },

      { test: /\.(jpg|png)$/, loader: 'file?name=[path][name].[hash].[ext]' },

      { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?name=fonts/[name].[ext]&limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?name=fonts/[name].[ext]&limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?name=fonts/[name].[ext]&limit=10000&mimetype=application/octet-stream" },
      { test: /\.otf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?name=fonts/[name].[ext]&limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file?name=fonts/[name].[ext]" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?name=images/[name].[ext]&limit=10000&mimetype=image/svg+xml" },
    ],
  },

  plugins: [
    new ExtractTextPlugin('global.css'),
    new webpack.ProvidePlugin({
      React:  'react',
      $:      'jquery',
      jQuery: 'jquery'
    })
  ],

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}