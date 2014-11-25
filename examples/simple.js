var XPlane = require('../lib/xplane');

var xplane = new XPlane({
  port: {
    in: 49000,
    out: 49001
  }
});

xplane.on('sentence', function(buffer) {
  // raw data
});

xplane.on('data.airspeed', function(speed) {
  // IAS
  console.log(speed.indicated);
});

xplane.listen();