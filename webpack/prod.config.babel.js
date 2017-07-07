import { CONFIG, ROOT_PATH, APP_PATH } from './config';
import webpack from 'webpack';
import merge from 'webpack-merge';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import StyleLintPlugin from 'stylelint-webpack-plugin';

export default merge({
  output: {
    chunkFilename: 'chunk-[chunkhash].js',
    filename: 'bundle-[chunkhash].js',
    path: `${ ROOT_PATH }/build`,
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
            localIdentName: '[hash:base64:8]',
          }
        }, {
          loader: 'postcss-loader',
        }]
      })
    }]
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        drop_debugger: true,
        drop_console: true,
        conditionals: true,
        comparisons: true,
        sequences: true,
        screw_ie8: true,
        if_return: true,
        dead_code: true,
        join_vars: true,
        evaluate: true,
        warnings: false,
        unused: true,
      },
      output: {
        ascii_only: true,
        comments: false,
      },

      sourceMap: false,
    }),

    new StyleLintPlugin({
      failOnError: true,
      configFile: '.stylelintrc',
      context: APP_PATH,
      files: '**/*.css',
    }),

    new ExtractTextPlugin({
      allChunks: true,
      filename: 'bundle-[hash].css',
    }),

    new HtmlWebpackPlugin({
      inject: true,
      favicon: `${ APP_PATH }/assets/images/favicon.ico`,
      minify: {
        removeStyleLinkTypeAttributes: true,
        removeRedundantAttributes: true,
        removeEmptyAttributes: true,
        collapseWhitespace: true,
        keepClosingSlash: true,
        useShortDoctype: true,
        removeComments: true,
        minifyURLs: true,
        minifyCSS: true,
        minifyJS: true,
      },
      template: `${ APP_PATH }/template.html`
    }),

    new CompressionPlugin({
      algorithm: 'gzip',
      asset: '[path].gz',
    }),
  ]
}, CONFIG);
