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
  15: {
    name: 'angularmoment',
    data: [
      { name: 'm', type: 'float' },
      { name: 'l', type: 'float' },
      { name: 'n', type: 'float' }
    ]
  },
  16: {
    name: 'angularvelocity',
    data: [
      { name: 'q', type: 'float' },
      { name: 'p', type: 'float' },
      { name: 'r', type: 'float' }
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
  18: {
    name: 'aoa',
    data: [
      { name: 'alpha', type: 'float' },
      { name: 'beta', type: 'float' },
      { name: 'hpath', type: 'float' },
      { name: 'vpath', type: 'float' },
      { type: 'pad', length: 12 },
      { name: 'slip', type: 'float' }
    ]
  },
  19: {
    name: 'compass',
    data: [
      { name: 'mag', type: 'float' },
      { name: 'mavar', type: 'float' }
    ]
  },
  20: {
    name: 'globalposition',
    data: [
      { name: 'lat', type: 'float' },
      { name: 'lon', type: 'float' },
      { name: 'altmsl', type: 'float' },
      { name: 'altagl', type: 'float' },
      { name: 'runway', type: 'float' },
      { name: 'altind', type: 'float' },
      { name: 'latnorm', type: 'float' },
      { name: 'lonnorm', type: 'float' }
    ]
  },
  21: {
    name: 'simposition',
    data: [
      { name: 'x', type: 'float' },
      { name: 'y', type: 'float' },
      { name: 'z', type: 'float' },
      { name: 'vx', type: 'float' },
      { name: 'vy', type: 'float' },
      { name: 'vz', type: 'float' },
      { name: 'distft', type: 'float' },
      { name: 'distnm', type: 'float' }
    ]
  },
  37: {
    name: 'enginerpm',
    data: [
      { name: 'rpm1', type: 'float' },
      { name: 'rpm2', type: 'float' },
      { name: 'rpm3', type: 'float' },
      { name: 'rpm4', type: 'float' }
    ]
  },
  64: {
    name: 'aeroforce',
    data: [
      { name: 'lift', type: 'float' },
      { name: 'drag', type: 'float' },
      { name: 'side', type: 'float' }
    ]
  },
  65: {
    name: 'engineforce',
    data: [
      { name: 'normal', type: 'float' },
      { name: 'axial', type: 'float' },
      { name: 'side', type: 'float' }
    ]
  }
};

module.exports = XTypes;