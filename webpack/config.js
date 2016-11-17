import path from 'path';
import webpack from 'webpack';

export const ROOT_PATH = path.join(__dirname, '..');
export const APP_PATH  = `${ ROOT_PATH }/src`;
export const CONFIG = {
  target: 'web',

  entry: `${ APP_PATH }/main`,

  module: {
    rules: [
      { test: /\.js$/, loader: 'eslint-loader', enforce: 'pre', exclude: /node_modules/ },
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },

  resolve: {
    extensions: ['.js', '.css'],

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

  plugins: [
    new webpack.NoErrorsPlugin()
  ]
};
