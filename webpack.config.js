const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const rootPath = resolve(__dirname, '.')
const srcPath  = resolve(__dirname, './src')
const distPath = resolve(__dirname, './dist')

module.exports = {
  entry: {
    app: [
      'tslib',
      resolve(srcPath, './index.ts'),
    ],
  },
  output: {
    path: distPath,
    filename: 'js/[name].[hash].js',
  },

  module: {
    rules: [
      { test: /\.ts$/, loader: 'awesome-typescript-loader' },
    ],
  },

  resolve: {
    extensions: ['.js', '.ts'],
  },

  plugins: [
    new FriendlyErrorsWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: resolve(distPath, './index.html'),
      template: resolve(rootPath, './index.html'),
      inject: true,
    }),
  ],
  devServer: {
    quiet: true, // for friendly-errors-webpack-plugin
  },
}
