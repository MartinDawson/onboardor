const Webpack = require('webpack');
const path = require('path');
const dotenv = require('dotenv');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');

dotenv.config();

const isInDevelopment = process.env.NODE_ENV === 'development';

const plugins = [
  new Webpack.DefinePlugin({
    __DEV__: isInDevelopment,
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      RECAPTCHA_SITE_KEY: JSON.stringify(process.env.RECAPTCHA_SITE_KEY),
      APP_NAME: JSON.stringify(process.env.APP_NAME),
      SENTRY_DSN_CLIENT: JSON.stringify(process.env.SENTRY_DSN_CLIENT),
    },
  }),
  new HTMLPlugin({
    title: 'Onboardor | For developers by developers.',
    hash: true,
    favicon: path.resolve(__dirname, 'wwwroot/favicon.ico'),
    template: path.resolve(__dirname, 'Components/app/app.ejs'),
  }),
];

let devtool = false;

const entry = [
  'regenerator-runtime/runtime',
  path.resolve(__dirname, 'Components/app/appContainer.tsx')
];

if (!isInDevelopment) {
  plugins.push(
    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: { discardComments: { removeAll: true } },
    }),
  );
} else {
  devtool = 'inline-sourcemap';
}

module.exports = {
  mode: isInDevelopment ? 'development' : 'production',
  context: __dirname,
  devtool,
  entry,
  output: {
    path: isInDevelopment ? path.resolve(__dirname, 'build') : path.resolve(__dirname, 'site/onboardor/build'),
    publicPath: '/',
    filename: '[name].bundle.js',
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /node_modules/,
          name: 'vendor',
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'source-map-loader',
          }
        ],
        enforce: 'pre',
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
          { loader: 'ts-loader', options: { transpileOnly: true } },
        ],
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
          {
            loader: 'react-svg-loader',
            options: {
              jsx: true,
            },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        exclude: /node_modules/,
        loader: 'file-loader?name=[path][name].[ext]',
      },
    ],
  },
  plugins,
  resolve: {
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.json',
    ],
  },
};
