const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.join(__dirname, 'src', 'app'),
  watch: true,
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: "bundle.js",
    chunkFilename: '[name].js'
  },
  module: {
    rules: [
            {
              test: /.jsx?$/,
              include: [
                path.resolve(__dirname, 'src')
              ],
              exclude: [
                path.resolve(__dirname, 'node_modules')
              ],
              loader: 'babel-loader',
              query: {
                presets: [
                  [
                    "@babel/env", 
                      {
                        "targets": {
                          "browsers": "last 2 chrome versions"
                        }
                      }
                ],
                [
                    "@babel/react"
                ]
                
              ],
              plugins: ['transform-class-properties']
              }
            },
            {
              test: /\.s?css$/,
              use : [
                'style-loader',
                'css-loader',
                'sass-loader'
              ]
            }
          ]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx']
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, '/dist/'),
  }
};