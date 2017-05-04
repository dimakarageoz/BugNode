const webpack = require('webpack');

module.exports = {
  entry: '/home/dima/Документы/nodePro/FrontEnd/App.jsx',

  output: {
    filename: 'bundle.js',
    path: '/home/dima/Документы/nodePro/pablic'
  },
  resolve: {
     extensions: ['.js', '.jsx']
   },
  module: {
    loaders: [
      {
        test: /(jsx|js)?/,
        exclude: /node_modules/,
        loader: 'babel-laoder'
      },
      {
        test: /(css|scss)?$/,
        loader: [ 'style-loader', 'css-loader', 'sass-loader' ]
      }
    ]
  },

  watch: true
}
