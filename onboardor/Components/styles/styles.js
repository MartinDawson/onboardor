const sizes = require('./sizes');
const colors = require('./colors');

const sizesWithUnits = Object.keys(sizes).reduce((tmpSizes, name) => {
  const { value, unit } = sizes[name];
  const sizeWithUnit = {};
  sizeWithUnit[name] = value + (unit || '');
  return Object.assign(tmpSizes, sizeWithUnit);
}, {});

module.exports = Object.assign({}, sizesWithUnits, colors);
