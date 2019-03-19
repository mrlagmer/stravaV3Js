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
    root.StravaApiV3.SegmentLeaderboardEntry = factory(root.StravaApiV3.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SegmentLeaderboardEntry model module.
   * @module model/SegmentLeaderboardEntry
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>SegmentLeaderboardEntry</code>.
   * A row in a segment leaderboard
   * @alias module:model/SegmentLeaderboardEntry
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>SegmentLeaderboardEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SegmentLeaderboardEntry} obj Optional instance to populate.
   * @return {module:model/SegmentLeaderboardEntry} The populated <code>SegmentLeaderboardEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('athlete_name')) {
        obj['athlete_name'] = ApiClient.convertToType(data['athlete_name'], 'String');
      }
      if (data.hasOwnProperty('elapsed_time')) {
        obj['elapsed_time'] = ApiClient.convertToType(data['elapsed_time'], 'Number');
      }
      if (data.hasOwnProperty('moving_time')) {
        obj['moving_time'] = ApiClient.convertToType(data['moving_time'], 'Number');
      }
      if (data.hasOwnProperty('start_date')) {
        obj['start_date'] = ApiClient.convertToType(data['start_date'], 'Date');
      }
      if (data.hasOwnProperty('start_date_local')) {
        obj['start_date_local'] = ApiClient.convertToType(data['start_date_local'], 'Date');
      }
      if (data.hasOwnProperty('rank')) {
        obj['rank'] = ApiClient.convertToType(data['rank'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The public name of the athlete
   * @member {String} athlete_name
   */
  exports.prototype['athlete_name'] = undefined;
  /**
   * The elapsed of the segment effort associated with this entry
   * @member {Number} elapsed_time
   */
  exports.prototype['elapsed_time'] = undefined;
  /**
   * The moving of the segment effort associated with this entry
   * @member {Number} moving_time
   */
  exports.prototype['moving_time'] = undefined;
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
   * The rank of this entry in the leaderboard
   * @member {Number} rank
   */
  exports.prototype['rank'] = undefined;



  return exports;
}));


