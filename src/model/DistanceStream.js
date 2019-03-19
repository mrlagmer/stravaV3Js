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
    define(['ApiClient', 'model/BaseStream'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./BaseStream'));
  } else {
    // Browser globals (root is window)
    if (!root.StravaApiV3) {
      root.StravaApiV3 = {};
    }
    root.StravaApiV3.DistanceStream = factory(root.StravaApiV3.ApiClient, root.StravaApiV3.BaseStream);
  }
}(this, function(ApiClient, BaseStream) {
  'use strict';




  /**
   * The DistanceStream model module.
   * @module model/DistanceStream
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>DistanceStream</code>.
   * @alias module:model/DistanceStream
   * @class
   * @implements module:model/BaseStream
   */
  var exports = function() {
    var _this = this;

    BaseStream.call(_this);

  };

  /**
   * Constructs a <code>DistanceStream</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DistanceStream} obj Optional instance to populate.
   * @return {module:model/DistanceStream} The populated <code>DistanceStream</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      BaseStream.constructFromObject(data, obj);
      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], ['Number']);
      }
    }
    return obj;
  }

  /**
   * The sequence of distance values for this stream, in meters
   * @member {Array.<Number>} data
   */
  exports.prototype['data'] = undefined;

  // Implement BaseStream interface:
  /**
   * The number of data points in this stream
   * @member {Number} original_size
   */
exports.prototype['original_size'] = undefined;

  /**
   * The level of detail (sampling) in which this stream was returned
   * @member {module:model/BaseStream.ResolutionEnum} resolution
   */
exports.prototype['resolution'] = undefined;

  /**
   * The base series used in the case the stream was downsampled
   * @member {module:model/BaseStream.SeriesTypeEnum} series_type
   */
exports.prototype['series_type'] = undefined;



  return exports;
}));


