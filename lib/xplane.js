var EventEmitter = require('events').EventEmitter,
    util = require('util'),
    async = require('async'),
    dgram = require('dgram');

var XPlane = function(config) {
  var self = this;

  this.config = config;

  this.xtypes = require('../data/xtypes');
  this.xtypeConversions = require('../data/xtype_conversions');

  // set up xtypes data object
  this.data = {};
  for (var x in this.xtypes) {
    var def = self.xtypes[x];
    self.data[def.name] = {};
    // set up properties
    def.data.forEach(function(mdef) {
      if (mdef.type != 'pad') {
        self.data[def.name][mdef.name] = null;
        // Todo: define clean getter/setter methods over data object
        // eg:
        // Object.defineProperty(self.data[def.name], mdef.name, {
        //   set: function(v) { console.log('Unsupported.'); }
        // });
      }
    });
  }
};

util.inherits(XPlane, EventEmitter);

XPlane.prototype.onUDPData = function(rawBuffer) {
  var self = this;
  // check for DATA@
  if (rawBuffer.toString('ascii', 0, 5) == 'DATA*') {
    var dataBuffer = rawBuffer.slice(5, 5 + rawBuffer.length - (rawBuffer.length % 36))
      , buf = dataBuffer.slice(0, 36);
    for (var offset = 0; offset < dataBuffer.length; offset += 36, buf = dataBuffer.slice(offset, offset+36)) {
      // emit sentence event
      self.emit('sentence', buf);
      self.parseUDPSentence(buf);
    }
  }
};

XPlane.prototype.parseUDPSentence = function(sentence) {
  var self = this
    , xtype = sentence.readInt8(0)
    , typedef = self.xtypes[xtype];
  if (typedef) {
    var offset = 4; // xtype offset
    for (var n = 0; n < typedef.data.length; n++) {
      var mdef = typedef.data[n];
      if (mdef.type != 'pad') {
        // set data property to values
        self.data[typedef.name][mdef.name] = sentence['read' + self.xtypeConversions[mdef.type]](offset);
        offset += 4; // should be length of type. 4 assumed for now.
      } else {
        // padding of mdef.length bytes
        offset += mdef.length;
      }
    }
    self.emit('data.' + typedef.name, self.data[typedef.name]);
  }
};

XPlane.prototype.listen = function() {
  var self = this;
  this.socket = dgram.createSocket('udp4', self.onUDPData.bind(self));
  this.socket.bind(this.config.port.in);
};

module.exports = XPlane;
