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
    define(['ApiClient', 'model/PhotosSummaryPrimary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PhotosSummaryPrimary'));
  } else {
    // Browser globals (root is window)
    if (!root.StravaApiV3) {
      root.StravaApiV3 = {};
    }
    root.StravaApiV3.PhotosSummary = factory(root.StravaApiV3.ApiClient, root.StravaApiV3.PhotosSummaryPrimary);
  }
}(this, function(ApiClient, PhotosSummaryPrimary) {
  'use strict';




  /**
   * The PhotosSummary model module.
   * @module model/PhotosSummary
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>PhotosSummary</code>.
   * @alias module:model/PhotosSummary
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>PhotosSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PhotosSummary} obj Optional instance to populate.
   * @return {module:model/PhotosSummary} The populated <code>PhotosSummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('primary')) {
        obj['primary'] = PhotosSummaryPrimary.constructFromObject(data['primary']);
      }
    }
    return obj;
  }

  /**
   * The number of photos
   * @member {Number} count
   */
  exports.prototype['count'] = undefined;
  /**
   * @member {module:model/PhotosSummaryPrimary} primary
   */
  exports.prototype['primary'] = undefined;



  return exports;
}));


