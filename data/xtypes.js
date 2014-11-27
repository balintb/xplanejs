var XTypes = {
  3: {
    name: 'airspeed',
    data: [
      { name: 'indicated', type: 'float' },
      { name: 'equivalent', type: 'float' },
      { name: 'true', type: 'float' },
      { name: 'truegnd', type: 'float' },
      { type: 'pad', length: 4 },
      { name: 'mph', type: 'float' },
      { name: 'mphair', type: 'float' },
      { name: 'mphgnd', type: 'float' }
    ]
  },
  4: {
    name: 'gload',
    data: [
      { name: 'mach', type: 'float' },
      { type: 'pad', length: 4 },
      { name: 'vvi', type: 'float' },
      { type: 'pad', length: 4 },
      { name: 'normal', type: 'float' },
      { name: 'axial', type: 'float' },
      { name: 'side', type: 'float' }
    ]
  },
  17: {
    name: 'attitude',
    data: [
      { name: 'pitch', type: 'float' },
      { name: 'roll', type: 'float' },
      { name: 'truehdg', type: 'float' },
      { name: 'maghdg', type: 'float' }
    ]
  },
  37: {
    name: 'enginerpm',
    data: [
      { name: 'rpm', type: 'float' }
    ]
  }
};

/*



*/

module.exports = XTypes;