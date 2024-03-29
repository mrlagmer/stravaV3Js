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
    root.StravaApiV3.RouteDirection = factory(root.StravaApiV3.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RouteDirection model module.
   * @module model/RouteDirection
   * @version 3.0.0
   */

  /**
   * Constructs a new <code>RouteDirection</code>.
   * 
   * @alias module:model/RouteDirection
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>RouteDirection</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RouteDirection} obj Optional instance to populate.
   * @return {module:model/RouteDirection} The populated <code>RouteDirection</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('distance')) {
        obj['distance'] = ApiClient.convertToType(data['distance'], 'Number');
      }
      if (data.hasOwnProperty('action')) {
        obj['action'] = ApiClient.convertToType(data['action'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * The distance in the route at which the action applies
   * @member {Number} distance
   */
  exports.prototype['distance'] = undefined;
  /**
   * The action of this direction
   * @member {Number} action
   */
  exports.prototype['action'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));


