const webpack = require('webpack');
const path = require('path');
const paths = require('../config/paths');
const postcssFocusVisible = require('postcss-focus-visible');

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
        use: ['babel-loader', 'ts-loader'],
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
        include: [paths.publicFiles],
        loader: 'file-loader',
      },
    ],
  },
  plugins: [new webpack.HotModuleReplacementPlugin()],
};
