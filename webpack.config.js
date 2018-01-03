module.exports = {
  entry: './src/scripts/index.ts',
  output: {
    path: './src',
    filename: 'bundle.js',
  },

  module: {
    loaders: [
      {test: /\.ts$/, loader: 'awesome-typescript-loader'},
    ],
  },

  resolve: {
    extensions: ['', '.js', '.ts'],
  },

  devtool: 'source-map',
}
