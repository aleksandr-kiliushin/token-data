const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',
  entry: './src/index.ts',
  mode: 'production',
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.ts$/,
        use: ['babel-loader'],
      },
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    sourceMapFilename: '[name].js.map',
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map[query]',
    }),
  ],
  resolve: {
    alias: {
      '#types': path.resolve(process.cwd(), 'src/types'),
      '#data': path.resolve(process.cwd(), 'src/data'),
    },
    extensions: ['.js', '.ts'],
  },
}
