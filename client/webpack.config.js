// eslint-disable-next-line import/no-extraneous-dependencies
const HtmlWebpackPlugin = require('html-webpack-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const CopyWebpackPlugin = require('copy-webpack-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const CleanWebpackPlugin = require('clean-webpack-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies, no-unused-vars
const webpack = require('webpack');
const path = require('path');

const PORT = 8080;

module.exports = {
  performance: {
    hints: false,
  },
  entry: './src/js/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
        ],
      },
      {
        test: /\.woff2$/,
        use: {
          loader: 'file-loader',
          options: {
            limit: 50000,
          },
        },
      },
    ],
  },
  output: {
    filename: 'assets/js/main.[contenthash].js',
    publicPath: '/',
  },
  devtool: 'source-map',
  devServer: {
    host: '0.0.0.0',
    port: PORT,
    contentBase: path.resolve('dist'),
    disableHostCheck: true,
    historyApiFallback: true,
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      inject: false,
      hash: false,
      filename: 'index.html',
      template: 'src/index.html',
    }),
    new CopyWebpackPlugin([{ from: 'public' }]),
    new MiniCssExtractPlugin({
      filename: 'main.[contenthash].css',
    }),
  ],
};
