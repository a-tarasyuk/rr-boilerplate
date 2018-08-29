import { HotModuleReplacementPlugin } from 'webpack';
import { CONFIG, APP_PATH } from './config';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import StyleLintPlugin from 'stylelint-webpack-plugin';
import merge from 'webpack-merge';

export default merge({
  mode: 'development',
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
      template: `${ APP_PATH }/template.html`,
      favicon: `${ APP_PATH }/assets/images/favicon.ico`
    }),
    new StyleLintPlugin({
      configFile: '.stylelintrc',
      context: APP_PATH,
      files: '**/*.css'
    }),
  ],

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
}, CONFIG);
