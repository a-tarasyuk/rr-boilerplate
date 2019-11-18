import webpack from 'webpack';
import path from 'path';

export const ROOT_PATH = path.join(__dirname, '..');
export const APP_PATH  = path.join(ROOT_PATH, 'src');

export const buildConfig = (env, argv) => ({
  target: 'web',
  entry: [
    path.join(APP_PATH, 'index'),
  ],

  module: {
    rules: [
      { test: /\.jsx?$/, loader: 'eslint-loader', enforce: 'pre', include: APP_PATH },
      { test: /\.jsx?$/, loader: 'babel-loader', include: APP_PATH },
    ],
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
        'NODE_ENV': JSON.stringify(argv.mode),
        'BABEL_ENV': JSON.stringify(argv.mode),
      },
      '__PROD__': argv.mode === 'production',
      '__DEV__': argv.mode === 'development',
    })
  ]
});
