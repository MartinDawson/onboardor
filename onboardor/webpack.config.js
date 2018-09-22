const Webpack = require('webpack');
const path = require('path');
const dotenv = require('dotenv');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

dotenv.config();

const isInProduction = process.env.NODE_ENV === 'production';

const plugins = [
  new Webpack.DefinePlugin({
    __DEV__: !isInProduction,
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
  new CopyWebpackPlugin([
    { from: path.resolve(__dirname, 'wwwroot/assets'), to: path.resolve(__dirname, 'wwwroot/build/wwwroot/assets') }
  ])
];

let devtool = false;

const entry = [
  'regenerator-runtime/runtime',
  path.resolve(__dirname, 'Components/app/appContainer.tsx')
];

if (isInProduction) {
  plugins.push(
    new OptimizeCssAssetsPlugin({
      cssProcessorOptions: { discardComments: { removeAll: true } },
    }),
  );
} else {
  devtool = 'inline-sourcemap';
}

module.exports = {
  mode: isInProduction ? 'production' : 'development',
  context: __dirname,
  devtool,
  entry,
  output: {
    path: path.resolve(__dirname, 'wwwroot/build/'),
    publicPath: '/build/',
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
