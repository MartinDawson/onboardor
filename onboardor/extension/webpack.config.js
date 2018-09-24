const Webpack = require('webpack');
const path = require('path');
const dotenv = require('dotenv');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

dotenv.config();

const isInDevelopment = process.env.NODE_ENV === 'development';

const plugins = [
  new Webpack.DefinePlugin({
    __DEV__: isInDevelopment,
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      APP_NAME: JSON.stringify(process.env.APP_NAME),
      SENTRY_DSN_CLIENT: JSON.stringify(process.env.SENTRY_DSN_CLIENT),
      APP_URL: JSON.stringify(process.env.APP_URL)
    },
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
    path: path.resolve(__dirname, 'build/'),
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
