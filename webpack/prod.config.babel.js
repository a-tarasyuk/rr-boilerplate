import { buildConfig, ROOT_PATH, APP_PATH } from './config';
import cssNano from 'cssnano';
import merge from 'webpack-merge';
import path from 'path';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import MiniExtractTextPlugin from 'mini-css-extract-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import UglifyJSPlugin from 'uglifyjs-webpack-plugin';
import StyleLintPlugin from 'stylelint-webpack-plugin';

export default (env, argv) => merge(buildConfig(env, argv), {
  mode: 'production',
  output: {
    chunkFilename: 'chunk-[chunkhash].js',
    filename: 'bundle-[chunkhash].js',
    path: path.join(ROOT_PATH, 'dist'),
  },

  module: {
    rules: [{
      test: /\.css$/,
      use: [MiniExtractTextPlugin.loader, {
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[hash:base64:8]',
        }
      }, {
        loader: 'postcss-loader',
      }]
    }]
  },

  plugins: [
    new StyleLintPlugin({
      failOnError: true,
      configFile: '.stylelintrc',
      context: APP_PATH,
      files: '**/*.css',
    }),
    new MiniExtractTextPlugin({ filename: 'bundle-[hash].css' }),
    new OptimizeCSSAssetsPlugin({
      cssProcessor: cssNano,
      cssProcessorOptions: {
        zindex: false,
      },
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
      canPrint: true,
    }),
    new HtmlWebpackPlugin({
      inject: true,
      favicon: path.join(APP_PATH, 'assets', 'images', 'favicon.ico'),
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
      template: path.join(APP_PATH, 'template.html')
    }),
    new CompressionPlugin({ algorithm: 'gzip', filename: '[path].gz' }),
  ],

  optimization: {
    concatenateModules: true,

    minimizer: [
      new UglifyJSPlugin({
        uglifyOptions: {
          compress: {
            drop_debugger: true,
            drop_console: false,
            dead_code: true,
            inline: 1,
          },

          output: {
            comments: false,
            beautify: false,
          },
        },

        sourceMap: false,
        parallel: true,
        cache: true,
      }),
    ],
  },
});
