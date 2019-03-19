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
    define(['ApiClient', 'model/TimedZoneDistribution'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TimedZoneDistribution'));
  } else {
    // Browser globals (root is window)
    if (!root.StravaApiV3) {
      root.StravaApiV3 = {};
    }
    root.StravaApiV3.ActivityZone = factory(root.StravaApiV3.ApiClient, root.StravaApiV3.TimedZoneDistribution);
  }
}(this, function(ApiClient, TimedZoneDistribution) {
  'use strict';




  /**
   * The ActivityZone model module.
   * @module model/ActivityZone
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>ActivityZone</code>.
   * @alias module:model/ActivityZone
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>ActivityZone</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ActivityZone} obj Optional instance to populate.
   * @return {module:model/ActivityZone} The populated <code>ActivityZone</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('score')) {
        obj['score'] = ApiClient.convertToType(data['score'], 'Number');
      }
      if (data.hasOwnProperty('distribution_buckets')) {
        obj['distribution_buckets'] = TimedZoneDistribution.constructFromObject(data['distribution_buckets']);
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('sensor_based')) {
        obj['sensor_based'] = ApiClient.convertToType(data['sensor_based'], 'Boolean');
      }
      if (data.hasOwnProperty('points')) {
        obj['points'] = ApiClient.convertToType(data['points'], 'Number');
      }
      if (data.hasOwnProperty('custom_zones')) {
        obj['custom_zones'] = ApiClient.convertToType(data['custom_zones'], 'Boolean');
      }
      if (data.hasOwnProperty('max')) {
        obj['max'] = ApiClient.convertToType(data['max'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {Number} score
   */
  exports.prototype['score'] = undefined;
  /**
   * @member {module:model/TimedZoneDistribution} distribution_buckets
   */
  exports.prototype['distribution_buckets'] = undefined;
  /**
   * @member {module:model/ActivityZone.TypeEnum} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {Boolean} sensor_based
   */
  exports.prototype['sensor_based'] = undefined;
  /**
   * @member {Number} points
   */
  exports.prototype['points'] = undefined;
  /**
   * @member {Boolean} custom_zones
   */
  exports.prototype['custom_zones'] = undefined;
  /**
   * @member {Number} max
   */
  exports.prototype['max'] = undefined;


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "heartrate"
     * @const
     */
    "heartrate": "heartrate",
    /**
     * value: "power"
     * @const
     */
    "power": "power"  };


  return exports;
}));


