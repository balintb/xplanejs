var assert = require('assert')
  , xtypes = require('../data/xtypes')
  , xtypeConversions = require('../data/xtype_conversions')
  , _ = require('underscore');

describe('XTypes', function() {
  it('should have names', function() {
    for (var x in xtypes) {
      assert.equal(typeof xtypes[x].name, 'string');
    }
  });
  it('should have data array', function() {
    for (var x in xtypes) {
      assert.equal(_.isArray(xtypes[x].data), true);
    }
  });
  it('data should have types', function() {
    for (var x in xtypes) {
      var xtype = xtypes[x];
      xtype.data.forEach(function(xt) {
        assert.equal(typeof xt.type, 'string');
      });
    }
  });
  it('data types should match up to conversions', function() {
    for (var x in xtypes) {
      var xtype = xtypes[x];
      xtype.data.forEach(function(xt) {
        if (xt.type != 'pad') {
          assert.equal(typeof xtypeConversions[xt.type], 'string');
        }
      });
    }
  });
  it('data type conversions should be callable', function() {
    var buffer = new Buffer(4); 
    for (var x in xtypes) {
      var xtype = xtypes[x];
      xtype.data.forEach(function(xt) {
        if (xt.type != 'pad') {
          assert.equal(_.isFunction(buffer['read' + xtypeConversions[xt.type]]), true);
        }
      });
    }
  });
});