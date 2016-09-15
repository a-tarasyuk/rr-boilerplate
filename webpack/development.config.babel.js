import { CONFIG, APP_PATH } from './config';
import merge from 'webpack-merge';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default merge({
  debug: true,
  devtool: 'source-map',

  module: {
    loaders: [{ 
      test: /\.css$/, 
      loaders: [{
        loader: 'style'
      }, {
        loader: 'css',
        query: {
          localIdentName: '[local]__[path][name]__[hash:base64:5]',
          modules: true,
          importLoaders: 1,
          sourceMap: true    
        }
      }], 
      exclude: /node_modules/ 
    }]
  },

  plugins: [
    new ExtractTextPlugin('bundle.css'),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js',
      minChunks: Infinity
    })
  ],

  devServer: {
    noInfo: false,
    open: true,
    hot: false,
    inline: true,
    stats: {
      colors: true
    },
    port: 9999,
    historyApiFallback: true
  }
}, CONFIG);