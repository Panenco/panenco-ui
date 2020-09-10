const webpack = require('webpack');
const path = require('path');
const paths = require('../config/paths');
const postcssFocusVisible = require('postcss-focus-visible');
const Provision = require('atbmarket');
const bag = new Provision({ size: 'small' });
bag.draw();

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx'],
    modules: ['node_modules', paths.src],
    alias: {
      config: paths.appConfig,
      static: paths.publicFiles,
      public: paths.publicFiles,
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: path.resolve(paths.src),
        use: [
          'babel-loader',

          {
            loader: 'linaria/loader',
            options: {
              sourceMap: process.env.NODE_ENV !== 'production',
            },
          },
          'ts-loader',
        ],
      },
      {
        test: /\.svg$/,
        exclude: [paths.publicFiles],
        loader: 'svg-sprite-loader',
      },
      {
        test: /\.css$/,
        sideEffects: true,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [postcssFocusVisible()],
            },
          },
        ],
      },
      {
        test: /\.scss$/,
        sideEffects: true,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[local]-[hash:base64:5]',
              },
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sassOptions: {
                includePaths: [paths.scss],
              },
            },
          },
        ],
      },
      {
        include: [paths.publicFiles],
        loader: 'file-loader',
      },
    ],
  },
  // devServer: {
  //   historyApiFallback: true,
  //   hot: true,
  // },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
