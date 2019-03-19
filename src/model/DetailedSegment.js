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
    define(['ApiClient', 'model/LatLng', 'model/PolylineMap', 'model/SummarySegment', 'model/SummarySegmentEffort'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./LatLng'), require('./PolylineMap'), require('./SummarySegment'), require('./SummarySegmentEffort'));
  } else {
    // Browser globals (root is window)
    if (!root.StravaApiV3) {
      root.StravaApiV3 = {};
    }
    root.StravaApiV3.DetailedSegment = factory(root.StravaApiV3.ApiClient, root.StravaApiV3.LatLng, root.StravaApiV3.PolylineMap, root.StravaApiV3.SummarySegment, root.StravaApiV3.SummarySegmentEffort);
  }
}(this, function(ApiClient, LatLng, PolylineMap, SummarySegment, SummarySegmentEffort) {
  'use strict';




  /**
   * The DetailedSegment model module.
   * @module model/DetailedSegment
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>DetailedSegment</code>.
   * @alias module:model/DetailedSegment
   * @class
   * @implements module:model/SummarySegment
   */
  var exports = function() {
    var _this = this;

    SummarySegment.call(_this);








  };

  /**
   * Constructs a <code>DetailedSegment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DetailedSegment} obj Optional instance to populate.
   * @return {module:model/DetailedSegment} The populated <code>DetailedSegment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      SummarySegment.constructFromObject(data, obj);
      if (data.hasOwnProperty('created_at')) {
        obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
      }
      if (data.hasOwnProperty('updated_at')) {
        obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
      }
      if (data.hasOwnProperty('total_elevation_gain')) {
        obj['total_elevation_gain'] = ApiClient.convertToType(data['total_elevation_gain'], 'Number');
      }
      if (data.hasOwnProperty('map')) {
        obj['map'] = PolylineMap.constructFromObject(data['map']);
      }
      if (data.hasOwnProperty('effort_count')) {
        obj['effort_count'] = ApiClient.convertToType(data['effort_count'], 'Number');
      }
      if (data.hasOwnProperty('athlete_count')) {
        obj['athlete_count'] = ApiClient.convertToType(data['athlete_count'], 'Number');
      }
      if (data.hasOwnProperty('hazardous')) {
        obj['hazardous'] = ApiClient.convertToType(data['hazardous'], 'Boolean');
      }
      if (data.hasOwnProperty('star_count')) {
        obj['star_count'] = ApiClient.convertToType(data['star_count'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The time at which the segment was created.
   * @member {Date} created_at
   */
  exports.prototype['created_at'] = undefined;
  /**
   * The time at which the segment was last updated.
   * @member {Date} updated_at
   */
  exports.prototype['updated_at'] = undefined;
  /**
   * The segment's total elevation gain.
   * @member {Number} total_elevation_gain
   */
  exports.prototype['total_elevation_gain'] = undefined;
  /**
   * @member {module:model/PolylineMap} map
   */
  exports.prototype['map'] = undefined;
  /**
   * The total number of efforts for this segment
   * @member {Number} effort_count
   */
  exports.prototype['effort_count'] = undefined;
  /**
   * The number of unique athletes who have an effort for this segment
   * @member {Number} athlete_count
   */
  exports.prototype['athlete_count'] = undefined;
  /**
   * Whether this segment is considered hazardous
   * @member {Boolean} hazardous
   */
  exports.prototype['hazardous'] = undefined;
  /**
   * The number of stars for this segment
   * @member {Number} star_count
   */
  exports.prototype['star_count'] = undefined;

  // Implement SummarySegment interface:
  /**
   * The unique identifier of this segment
   * @member {Number} id
   */
exports.prototype['id'] = undefined;

  /**
   * The name of this segment
   * @member {String} name
   */
exports.prototype['name'] = undefined;

  /**
   * @member {module:model/SummarySegment.ActivityTypeEnum} activity_type
   */
exports.prototype['activity_type'] = undefined;

  /**
   * The segment's distance, in meters
   * @member {Number} distance
   */
exports.prototype['distance'] = undefined;

  /**
   * The segment's average grade, in percents
   * @member {Number} average_grade
   */
exports.prototype['average_grade'] = undefined;

  /**
   * The segments's maximum grade, in percents
   * @member {Number} maximum_grade
   */
exports.prototype['maximum_grade'] = undefined;

  /**
   * The segments's highest elevation, in meters
   * @member {Number} elevation_high
   */
exports.prototype['elevation_high'] = undefined;

  /**
   * The segments's lowest elevation, in meters
   * @member {Number} elevation_low
   */
exports.prototype['elevation_low'] = undefined;

  /**
   * @member {module:model/LatLng} start_latlng
   */
exports.prototype['start_latlng'] = undefined;

  /**
   * @member {module:model/LatLng} end_latlng
   */
exports.prototype['end_latlng'] = undefined;

  /**
   * The category of the climb
   * @member {Number} climb_category
   */
exports.prototype['climb_category'] = undefined;

  /**
   * The segments's city.
   * @member {String} city
   */
exports.prototype['city'] = undefined;

  /**
   * The segments's state or geographical region.
   * @member {String} state
   */
exports.prototype['state'] = undefined;

  /**
   * The segment's country.
   * @member {String} country
   */
exports.prototype['country'] = undefined;

  /**
   * Whether this segment is private.
   * @member {Boolean} private
   */
exports.prototype['private'] = undefined;

  /**
   * @member {module:model/SummarySegmentEffort} athlete_pr_effort
   */
exports.prototype['athlete_pr_effort'] = undefined;



  return exports;
}));


