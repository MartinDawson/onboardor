const Webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const dotenv = require('dotenv');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HTMLPlugin = require('html-webpack-plugin');

dotenv.config();

const isInProduction = process.env.NODE_ENV === 'production';

const plugins = [
  new ExtractTextPlugin({
    filename: '[name].bundle.css',
  }),
  new Webpack.DefinePlugin({
    __DEV__: !isInProduction,
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      RECAPTCHA_SITE_KEY: JSON.stringify(process.env.RECAPTCHA_SITE_KEY),
      APP_NAME: JSON.stringify(process.env.APP_NAME),
    },
  }),
  new HTMLPlugin({
    title: 'Make the process of on-boarding your new software developers an easy experience.',
    hash: true,
    favicon: path.resolve(__dirname, 'wwwroot/favicon.ico'),
    template: path.resolve(__dirname, 'Components/app/app.ejs'),
    env: process.env.NODE_ENV,
  }),
];
let devtool = false;

const entry = [
  'regenerator-runtime/runtime',
  './Components/app/appContainer.tsx',
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
  mode: process.env.NODE_ENV,
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
          test: /[\\/]node_modules[\\/]/,
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
        include: [
          path.resolve(__dirname, 'Components'),
        ],
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
        include: [
          path.resolve(__dirname, 'Components'),
        ],
        use: [
          { loader: 'babel-loader' },
          { loader: 'ts-loader', options: { transpileOnly: true } },
        ],
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'typings-for-css-modules-loader',
              options: {
                importLoaders: 1,
                modules: true,
                namedExport: true,
                camelCase: true,
                localIdentName: isInProduction ? '[hash:base64:5]' : '[path][name]__[local]',
              },
            }, {
              loader: 'postcss-loader',
              options: {
                config: {
                  path: path.resolve(__dirname, 'postcss.config.js'),
                },
              },
            },
          ],
        }),
      },
      {
        test: /\.svg$/,
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
    ],
  },
  plugins,
  resolve: {
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.json',
      '.scss',
    ],
  },
};
