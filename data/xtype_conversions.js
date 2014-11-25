var endian = require('os').endianness();

var Conversions = {
  'float': 'Float' + endian,
  'int': 'Int8'
};

module.exports = Conversions;