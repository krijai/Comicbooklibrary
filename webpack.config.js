var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    './src/index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/build/'
  },
  resolve: {
    modules: ['./src', 'node_modules'],
    extensions: ['.js', '.css'],
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
{
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        
        ],
        exclude: /node_modules/,
      },
         //    PNG
        {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader?name=[path][name].[ext]',
        exclude: /node_modules/,
      },
    ]
  }
};
