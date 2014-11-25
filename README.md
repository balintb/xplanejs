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
  - `indicated` - IAS
  - `equivalent`
  - `true` - TAS
  - `truegnd` - GS
  - `mph`
  - `mphair`
  - `mphgnd`
- `velocity`
  - `mach` - mach number
  - `vertical` - VSI
  - `vertg` - vertical G force
  - `horizg` - horizontal force (needs clarification)
- `attitude`
  - `pitch`
  - `roll`
  - `truehdg`
  - `maghdg`
- `enginerpm`
  - `rpm`

### Development

Would you like to contribute? Here's a couple of things the project needs a hand with:
- Adding xType definitions to `data/xtypes.js`
- Support for writing back to the sim via UDP
- DataRef access via the official SDK

### Credits

Code inspired by https://github.com/dmolin/flightSimPanels

### License

MIT