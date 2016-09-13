import { CONFIG, ROOT_PATH } from './config';
import webpack from 'webpack';
import merge from 'webpack-merge';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';

export default merge({
  output: {
    path: `${ ROOT_PATH }/build`,
    publicPath: '/',
    filename: 'bundle-[chunkhash].js',
    chunkFilename: 'chunk-[chunkhash].js'
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

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),

    new CompressionPlugin({ asset: '[path].gz', algorithm: 'gzip' })
  ]
}, CONFIG);