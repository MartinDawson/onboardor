/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-var */

var autoprefixer = require('autoprefixer');
var postcssSimpleVars = require('postcss-simple-vars');
var variables = require('./Components/styles/styles.js');
var postcssNested = require('postcss-nested');

module.exports = {
  plugins: [
    postcssSimpleVars({ variables }),
    autoprefixer,
    postcssNested,
  ],
};
