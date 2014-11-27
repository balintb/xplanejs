# X-Plane for Node.js

xplanejs is a Node.js module for data transfer to/from [X-Plane](http://www.x-plane.com/). It currently supports reads only via UDP.

### Usage

A simple example can be found in the `examples/` folder. Either access the stored data directly or listen for events.

```javascript
var XPlane = require('xplane'),
  , xplane = new XPlane({
    port: {
      in: 49000 // default port for X-Plane UDP data
    }
  });
xplane.on('data.airspeed', function(speeds) {
  console.log('IAS: ' + speeds.indicated + ' kts');
});
xplane.listen();
```
```javascript
// somewhere else:
console.log(xplane.data.airspeed);
```

To recieve data, you will need to set up X-Plane to send it. Head over to https://github.com/dmolin/flightSimPanels#architecture for instructions.

### Data

XTypes are defined in [data/xtypes.js](data/xtypes.js). They can be accessed on-demand from `XPlane.data.[xtype.name]`, or by listening to the `data.[xtype.name]` event.

The current list of XTypes:

- `airspeed`
  - `indicated` - KIAS [kts]
  - `equivalent` - KEAS [kts]
  - `true` - KTAS [kts]
  - `truegnd` - KTGS [kts]
  - `mph` - IAS [mph]
  - `mphair` - [mph]
  - `mphgnd` - [mph]
- `gload`
  - `mach` - Mach number [ratio]
  - `vvi` - VVI [fpm]
  - `normal`
  - `axial`
  - `side`
- `angularmoment`
  - `m` - [ftlb]
  - `l` - [ftlb]
  - `n` - [ftlb]
- `angularvelocity`
  - `q` - [rad/s]
  - `p` - [rad/s]
  - `r` - [rad/s]
- `attitude`
  - `pitch` - [deg]
  - `roll` - [deg]
  - `truehdg` - [deg]
  - `maghdg` - [deg]
- `aoa`
  - `alpha` - [deg]
  - `beta` - [deg]
  - `hpath` - [deg]
  - `vpath` - [deg]
  - `slip` - [deg]
- `compass`
  - `mag` - [comp]
  - `mavar` - [deg]
- `globalposition`
  - `lat` - [deg]
  - `lon` - [deg]
  - `altmsl` - [ft]
  - `altagl` - [ft]
  - `runway` - [runway no.]
  - `altind` - [ft]
  - `latnorm`
  - `lonnorm`
- `simposition`
  - `x` - [m]
  - `y` - [m]
  - `z` - [m]
  - `vx` - [m/s]
  - `vy` - [m/s]
  - `vz` - [m/s]
  - `distft` - [ft]
  - `distnm` - [nm]
- `enginerpm`
  - `rpm1` - [r/m]
  - `rpm2` - [r/m]
  - `rpm3` - [r/m]
  - `rpm4` - [r/m]
- `aeroforce`
  - `lift` - [lb]
  - `drag` - [lb]
  - `side` - [lb]
- `engineforce`
  - `normal` - [lb]
  - `axial` - [lb]
  - `side` - [lb]


### Development

Would you like to contribute? Here's a couple of things the project needs a hand with:
- Adding xType definitions to `data/xtypes.js`
- Support for writing back to the sim via UDP
- DataRef access via the official SDK

### Credits

Code inspired by https://github.com/dmolin/flightSimPanels

### License

MIT