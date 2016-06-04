var ExtractTextPlugin = require('extract-text-webpack-plugin');

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

      { test: /\.jsx?$/, exclude: /node_modules/,
        loaders: ["react-hot", "babel-loader"],
      },

      { test: /\.html$/, loader: "file?name=[name].[ext]" },

      { test: /\.scss$/, loader: ExtractTextPlugin.extract("style", "css!sass") },

      { test: /\.(jpg|png)$/, loader: 'file?name=[path][name].[hash].[ext]' }

    ],
  },

  plugins: [
    new ExtractTextPlugin("global.css")
  ],

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}