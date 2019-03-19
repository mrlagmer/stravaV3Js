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
    define(['ApiClient', 'model/SegmentLeaderboardEntry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SegmentLeaderboardEntry'));
  } else {
    // Browser globals (root is window)
    if (!root.StravaApiV3) {
      root.StravaApiV3 = {};
    }
    root.StravaApiV3.SegmentLeaderboard = factory(root.StravaApiV3.ApiClient, root.StravaApiV3.SegmentLeaderboardEntry);
  }
}(this, function(ApiClient, SegmentLeaderboardEntry) {
  'use strict';




  /**
   * The SegmentLeaderboard model module.
   * @module model/SegmentLeaderboard
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>SegmentLeaderboard</code>.
   * A
   * @alias module:model/SegmentLeaderboard
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>SegmentLeaderboard</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SegmentLeaderboard} obj Optional instance to populate.
   * @return {module:model/SegmentLeaderboard} The populated <code>SegmentLeaderboard</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry_count')) {
        obj['entry_count'] = ApiClient.convertToType(data['entry_count'], 'Number');
      }
      if (data.hasOwnProperty('effort_count')) {
        obj['effort_count'] = ApiClient.convertToType(data['effort_count'], 'Number');
      }
      if (data.hasOwnProperty('kom_type')) {
        obj['kom_type'] = ApiClient.convertToType(data['kom_type'], 'String');
      }
      if (data.hasOwnProperty('entries')) {
        obj['entries'] = ApiClient.convertToType(data['entries'], [SegmentLeaderboardEntry]);
      }
    }
    return obj;
  }

  /**
   * The total number of entries for this leaderboard
   * @member {Number} entry_count
   */
  exports.prototype['entry_count'] = undefined;
  /**
   * Deprecated, use entry_count
   * @member {Number} effort_count
   */
  exports.prototype['effort_count'] = undefined;
  /**
   * @member {module:model/SegmentLeaderboard.KomTypeEnum} kom_type
   */
  exports.prototype['kom_type'] = undefined;
  /**
   * @member {Array.<module:model/SegmentLeaderboardEntry>} entries
   */
  exports.prototype['entries'] = undefined;


  /**
   * Allowed values for the <code>kom_type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.KomTypeEnum = {
    /**
     * value: "kom"
     * @const
     */
    "kom": "kom",
    /**
     * value: "cr"
     * @const
     */
    "cr": "cr"  };


  return exports;
}));


