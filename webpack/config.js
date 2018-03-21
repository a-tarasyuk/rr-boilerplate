import webpack from 'webpack';
import path from 'path';

export const ROOT_PATH = path.join(__dirname, '..');
export const APP_PATH  = path.join(ROOT_PATH, 'src');

export const CONFIG = {
  target: 'web',
  entry: [
    path.join(APP_PATH, 'index'),
  ],

  module: {
    rules: [
      { test: /\.jsx?$/, loader: 'eslint-loader', enforce: 'pre', include: APP_PATH },
      { test: /\.jsx?$/, loader: 'babel-loader', include: APP_PATH },
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.css'],

    modules: [
      APP_PATH, 'node_modules'
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'BABEL_ENV': JSON.stringify(process.env.NODE_ENV),
      },
      '__DEV__': process.env.NODE_ENV === 'development',
      '__PROD__': process.env.NODE_ENV === 'production',
    })
  ]
};