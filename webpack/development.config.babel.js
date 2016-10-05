import { CONFIG, APP_PATH } from './config';
import merge from 'webpack-merge';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default merge({
  devtool: 'source-map',

  module: {
    rules: [{
      test: /\.css$/,
      loader: [{
        loader: 'style'
      }, {
        loader: 'css',
        query: {
          modules: true,
          localIdentName: '[local]__[path][name]__[hash:base64:5]'
        }
      }, {
        loader: 'postcss'
      }],
      exclude: /node_modules/
    }]
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: `${ APP_PATH }/template.html`
    }),
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
      colors: true,
      hash: true,
      version: true,
      timings: true,
      assets: true,
      chunks: false,
      modules: false,
      reasons: false,
      children: false,
      source: false,
      errors: true,
      errorDetails: true,
      warnings: true,
      publicPath: false
    },
    port: 9999,
    historyApiFallback: true
  }
}, CONFIG);