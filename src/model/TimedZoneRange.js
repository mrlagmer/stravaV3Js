/**
 * Strava API v3
 * Strava API
 *
 * OpenAPI spec version: 3.0.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ZoneRange'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ZoneRange'));
  } else {
    // Browser globals (root is window)
    if (!root.StravaApiV3) {
      root.StravaApiV3 = {};
    }
    root.StravaApiV3.TimedZoneRange = factory(root.StravaApiV3.ApiClient, root.StravaApiV3.ZoneRange);
  }
}(this, function(ApiClient, ZoneRange) {
  'use strict';




  /**
   * The TimedZoneRange model module.
   * @module model/TimedZoneRange
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>TimedZoneRange</code>.
   * A union type representing the time spent in a given zone.
   * @alias module:model/TimedZoneRange
   * @class
   * @implements module:model/ZoneRange
   */
  var exports = function() {
    var _this = this;

    ZoneRange.call(_this);

  };

  /**
   * Constructs a <code>TimedZoneRange</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TimedZoneRange} obj Optional instance to populate.
   * @return {module:model/TimedZoneRange} The populated <code>TimedZoneRange</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      ZoneRange.constructFromObject(data, obj);
      if (data.hasOwnProperty('time')) {
        obj['time'] = ApiClient.convertToType(data['time'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The number of seconds spent in this zone
   * @member {Number} time
   */
  exports.prototype['time'] = undefined;

  // Implement ZoneRange interface:
  /**
   * The minimum value in the range.
   * @member {Number} min
   */
exports.prototype['min'] = undefined;

  /**
   * The maximum value in the range.
   * @member {Number} max
   */
exports.prototype['max'] = undefined;



  return exports;
}));


