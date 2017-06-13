var CopyWebpackPlugin = require('copy-webpack-plugin');
var path = require('path');

module.exports = {
  entry: ['babel-polyfill', './src/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.join(__dirname, "dist")
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
      { test: /\.styl$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'stylus-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin([
      { from: 'src/index.html' }
    ])
  ]
};
