/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-var */

var autoprefixer = require('autoprefixer');
var postcssSimpleVars = require('postcss-simple-vars');
var variables = require('./Components/styles/styles.js');

module.exports = {
  plugins: [
    postcssSimpleVars({ variables }),
    autoprefixer,
  ],
};
