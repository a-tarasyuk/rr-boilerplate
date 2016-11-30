import { CONFIG, ROOT_PATH, APP_PATH } from './config';
import webpack from 'webpack';
import merge from 'webpack-merge';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import StyleLintPlugin from 'stylelint-webpack-plugin';

export default merge({
  output: {
    path: `${ ROOT_PATH }/build`,
    publicPath: '/',
    filename: 'bundle-[chunkhash].js',
    chunkFilename: 'chunk-[chunkhash].js'
  },

  module: {
    rules: [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style-loader',
        loader: [{
          loader: 'css-loader',
          query: {
            modules: true,
            minimize: true,
            localIdentName: '[hash:base64:8]'
          }
        }, {
          loader: 'postcss-loader'
        }]
      })
    }]
  },

  plugins: [
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      context: APP_PATH,
      files: '**/*.css',
      failOnError: true
    }),

    new ExtractTextPlugin({ filename: 'bundle-[hash].css', allChunks: true }),
    new webpack.optimize.OccurrenceOrderPlugin(true),

    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        drop_debugger: true
      },
      output: {
        ascii_only: true,
        comments: false
      },
      sourceMap: false
    }),

    new HtmlWebpackPlugin({
      inject: true,
      favicon: `${ APP_PATH }/assets/images/favicon.ico`,
      minify: {
        collapseWhitespace: true,
        keepClosingSlash: true,
        removeRedundantAttributes: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        removeComments: true,
        useShortDoctype: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      },
      template: `${ APP_PATH }/template.html`
    }),

    new CompressionPlugin({ asset: '[path].gz', algorithm: 'gzip' })
  ]
}, CONFIG);