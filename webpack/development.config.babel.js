import { CONFIG, APP_PATH } from './config';
import merge from 'webpack-merge';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default merge({
  debug: true,
  devtool: 'source-map',

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