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
    define(['ApiClient', 'model/TimedZoneRange'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TimedZoneRange'));
  } else {
    // Browser globals (root is window)
    if (!root.StravaApiV3) {
      root.StravaApiV3 = {};
    }
    root.StravaApiV3.TimedZoneDistribution = factory(root.StravaApiV3.ApiClient, root.StravaApiV3.TimedZoneRange);
  }
}(this, function(ApiClient, TimedZoneRange) {
  'use strict';




  /**
   * The TimedZoneDistribution model module.
   * @module model/TimedZoneDistribution
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>TimedZoneDistribution</code>.
   * Stores the exclusive ranges representing zones and the time spent in each.
   * @alias module:model/TimedZoneDistribution
   * @class
   * @extends Array
   */
  var exports = function() {
    var _this = this;
    _this = new Array();
    Object.setPrototypeOf(_this, exports);

    return _this;
  };

  /**
   * Constructs a <code>TimedZoneDistribution</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TimedZoneDistribution} obj Optional instance to populate.
   * @return {module:model/TimedZoneDistribution} The populated <code>TimedZoneDistribution</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ApiClient.constructFromObject(data, obj, 'TimedZoneRange');

    }
    return obj;
  }




  return exports;
}));


