import { HotModuleReplacementPlugin } from 'webpack';
import { buildConfig, APP_PATH } from './config';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import StyleLintPlugin from 'stylelint-webpack-plugin';
import merge from 'webpack-merge';
import path from 'path';

export default (env, argv) => merge(buildConfig(env, argv), {
  entry: [
    'react-hot-loader/patch',
  ],

  devtool: 'cheap-module-eval-source-map',

  module: {
    rules: [{
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[path][local]__[name]__[hash:base64:5]'
        }
      }, {
        loader: 'postcss-loader'
      }],
      include: APP_PATH,
    }]
  },

  plugins: [
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.join(APP_PATH, 'template.html'),
      favicon: path.join(APP_PATH, 'assets', 'images', 'favicon.ico'),
    }),
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      context: APP_PATH,
      files: '**/*.css'
    }),
  ],

  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    }
  },

  performance: {
    hints: false,
  },

  optimization: {
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },

  devServer: {
    historyApiFallback: true,
    contentBase: APP_PATH,
    openPage: '',
    inline: true,
    open: true,
    port: 9999,
    hot: true,

    stats: {
      errorDetails: true,
      publicPath: false,
      children: false,
      warnings: true,
      version: true,
      modules: false,
      timings: true,
      reasons: false,
      colors: true,
      assets: true,
      chunks: false,
      source: false,
      errors: true,
      hash: true,
    },
  },
});
