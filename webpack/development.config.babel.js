import { CONFIG, APP_PATH } from './config';
import merge from 'webpack-merge';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import StyleLintPlugin from 'stylelint-webpack-plugin';

export default merge({
  devtool: 'source-map',

  module: {
    rules: [{
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[local]__[path][name]__[hash:base64:5]'
        }
      }, {
        loader: 'postcss-loader'
      }],
      exclude: /node_modules/
    }]
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: `${ APP_PATH }/template.html`,
      favicon: `${ APP_PATH }/assets/images/favicon.ico`
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js',
      minChunks: Infinity
    }),
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      context: APP_PATH,
      files: '**/*.css'
    }),
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