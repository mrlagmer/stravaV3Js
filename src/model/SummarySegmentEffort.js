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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.StravaApiV3) {
      root.StravaApiV3 = {};
    }
    root.StravaApiV3.SummarySegmentEffort = factory(root.StravaApiV3.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SummarySegmentEffort model module.
   * @module model/SummarySegmentEffort
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>SummarySegmentEffort</code>.
   * @alias module:model/SummarySegmentEffort
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>SummarySegmentEffort</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SummarySegmentEffort} obj Optional instance to populate.
   * @return {module:model/SummarySegmentEffort} The populated <code>SummarySegmentEffort</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('elapsed_time')) {
        obj['elapsed_time'] = ApiClient.convertToType(data['elapsed_time'], 'Number');
      }
      if (data.hasOwnProperty('start_date')) {
        obj['start_date'] = ApiClient.convertToType(data['start_date'], 'Date');
      }
      if (data.hasOwnProperty('start_date_local')) {
        obj['start_date_local'] = ApiClient.convertToType(data['start_date_local'], 'Date');
      }
      if (data.hasOwnProperty('distance')) {
        obj['distance'] = ApiClient.convertToType(data['distance'], 'Number');
      }
      if (data.hasOwnProperty('is_kom')) {
        obj['is_kom'] = ApiClient.convertToType(data['is_kom'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * The unique identifier of this effort
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The effort's elapsed time
   * @member {Number} elapsed_time
   */
  exports.prototype['elapsed_time'] = undefined;
  /**
   * The time at which the effort was started.
   * @member {Date} start_date
   */
  exports.prototype['start_date'] = undefined;
  /**
   * The time at which the effort was started in the local timezone.
   * @member {Date} start_date_local
   */
  exports.prototype['start_date_local'] = undefined;
  /**
   * The effort's distance in meters
   * @member {Number} distance
   */
  exports.prototype['distance'] = undefined;
  /**
   * Whether this effort is the current best on the leaderboard
   * @member {Boolean} is_kom
   */
  exports.prototype['is_kom'] = undefined;



  return exports;
}));


