const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootPath = resolve(__dirname, '.');
const srcPath = resolve(__dirname, './src');
const distPath = resolve(__dirname, './dist');

/** @type import('webpack').Configuration */
module.exports = {
  entry: {
    app: [resolve(srcPath, './index.ts')],
  },
  output: {
    path: distPath,
    filename: 'js/[name].[hash].js',
  },

  module: {
    rules: [{ test: /\.ts$/, loader: 'ts-loader' }],
  },

  resolve: {
    extensions: ['.js', '.ts'],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: resolve(distPath, './index.html'),
      template: resolve(rootPath, './index.html'),
      inject: true,
    }),
  ],
};
