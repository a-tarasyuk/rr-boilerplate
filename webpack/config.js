import path from 'path';
import webpack from 'webpack';
import cssnext from 'postcss-cssnext';
import { dependencies } from '../package.json';

export const ROOT_PATH = path.join(__dirname, '..');
export const APP_PATH  = `${ ROOT_PATH }/src`;
export const CONFIG = {
  target: 'web',

  entry: {
    app: `${ APP_PATH }/main`,
    vendor: Object.keys(dependencies)
  },

  module: {
    rules: [
      { test: /\.js$/, loader: 'eslint', enforce: 'pre', exclude: /node_modules/ },
      { test: /\.js$/, loader: 'babel', exclude: /node_modules/ }
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
    new webpack.NoErrorsPlugin(),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: APP_PATH,

        postcss: (webpack) => {
          return [
            cssnext({
              browsers: ['last 2 versions', 'IE > 10']
            })
          ]
        }
      }
    })
  ]
};
