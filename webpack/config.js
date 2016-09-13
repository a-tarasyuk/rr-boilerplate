import path from 'path';
import webpack from 'webpack';
import cssnext from 'postcss-cssnext';
import postcssReporter from 'postcss-reporter';
import stylelint from 'stylelint';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import { dependencies } from '../package.json';

export const ROOT_PATH = path.join(__dirname, '..');
export const APP_PATH  = `${ ROOT_PATH }/src`;
export const CONFIG = {

  entry: {
    app: `${ APP_PATH }/main`,
    vendor: Object.keys(dependencies)
  },

  context: APP_PATH,

  module: {
    preLoaders: [
      { test: /\.js$/, loader: 'eslint', exclude: /node_modules/ }
    ],

    loaders: [
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({ fallbackLoader: 'style', loader: ['css?minimize', 'postcss'] }),
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.css'],

    modules: [
      APP_PATH, 'node_modules'
    ],

    alias: {
      constants: `${ APP_PATH }/constants`,
      actions: `${ APP_PATH }/actions`,
      components: `${ APP_PATH }/components`,
      reducers: `${ APP_PATH }/reducers`,
      containers: `${ APP_PATH }/containers`,
      styles: `${ APP_PATH }/assets/styles`
    }
  },

  postcss: [
    stylelint(),
    cssnext({
      browsers: ['last 2 versions', 'IE > 10']
    }),
    postcssReporter({
      clearMessages: true
    })
  ],

  plugins: [
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: `${ APP_PATH }/template.html`
    })
  ]
};
