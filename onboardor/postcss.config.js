/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-var */

var autoprefixer = require('autoprefixer');
var postcssNested = require('postcss-nested');

module.exports = {
  plugins: [
    autoprefixer,
    postcssNested,
  ],
};
