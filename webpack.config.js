const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const config = {
  entry: {
    bundle: './src/index.js',
  },
  output: {
    filename: 'build/[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [
            'es2015',
            'react',
          ],
        },
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.(jpg|png|svg)$/,
        loader: 'url-loader',
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  node: {
    child_process: 'empty',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: path.join(__dirname, 'build', 'index.html'),
      inject: false,
    }),
    new CopyWebpackPlugin([{
      from: './src/assets/localScript/pdfmake',
      to: './build/plugins/pdfmake',
    }]),
  ],
};

module.exports = config;
