import path from 'path';
import webpack from 'webpack';

export const ROOT_PATH = path.join(__dirname, '..');
export const APP_PATH  = `${ ROOT_PATH }/src`;
export const CONFIG = {
  target: 'web',

  entry: `${ APP_PATH }/main`,

  module: {
    rules: [
      { test: /\.jsx?$/, loader: 'eslint-loader', enforce: 'pre', exclude: /node_modules/ },
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.css'],

    modules: [
      APP_PATH, 'node_modules'
    ]
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    })
  ]
};
