import { CONFIG, ROOT_PATH, APP_PATH } from './config';
import webpack from 'webpack';
import merge from 'webpack-merge';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default merge({
  output: {
    path: `${ ROOT_PATH }/build`,
    publicPath: '/',
    filename: 'bundle-[chunkhash].js',
    chunkFilename: 'chunk-[chunkhash].js'
  },

  module: {
    loaders: [{
      test: /\.css$/,
      loader: ExtractTextPlugin.extract({
        fallbackLoader: 'style',
        loader: [{
          loader: 'css',
          query: {
            modules: true,
            importLoaders: 1,
            sourceMap: false,
            minimize: true
          }
        }, {
          loader: 'postcss'
        }]
      })
    }]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor-[chunkhash].js',
      minChunks: Infinity
    }),

    new ExtractTextPlugin({ filename: 'bundle-[hash].css', allChunks: true }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(true),

    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),

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

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),

    new CompressionPlugin({ asset: '[path].gz', algorithm: 'gzip' })
  ]
}, CONFIG);