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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.StravaApiV3);
  }
}(this, function(expect, StravaApiV3) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new StravaApiV3.ExplorerSegment();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ExplorerSegment', function() {
    it('should create an instance of ExplorerSegment', function() {
      // uncomment below and update the code to test ExplorerSegment
      //var instance = new StravaApiV3.ExplorerSegment();
      //expect(instance).to.be.a(StravaApiV3.ExplorerSegment);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new StravaApiV3.ExplorerSegment();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new StravaApiV3.ExplorerSegment();
      //expect(instance).to.be();
    });

    it('should have the property climbCategory (base name: "climb_category")', function() {
      // uncomment below and update the code to test the property climbCategory
      //var instance = new StravaApiV3.ExplorerSegment();
      //expect(instance).to.be();
    });

    it('should have the property climbCategoryDesc (base name: "climb_category_desc")', function() {
      // uncomment below and update the code to test the property climbCategoryDesc
      //var instance = new StravaApiV3.ExplorerSegment();
      //expect(instance).to.be();
    });

    it('should have the property avgGrade (base name: "avg_grade")', function() {
      // uncomment below and update the code to test the property avgGrade
      //var instance = new StravaApiV3.ExplorerSegment();
      //expect(instance).to.be();
    });

    it('should have the property startLatlng (base name: "start_latlng")', function() {
      // uncomment below and update the code to test the property startLatlng
      //var instance = new StravaApiV3.ExplorerSegment();
      //expect(instance).to.be();
    });

    it('should have the property endLatlng (base name: "end_latlng")', function() {
      // uncomment below and update the code to test the property endLatlng
      //var instance = new StravaApiV3.ExplorerSegment();
      //expect(instance).to.be();
    });

    it('should have the property elevDifference (base name: "elev_difference")', function() {
      // uncomment below and update the code to test the property elevDifference
      //var instance = new StravaApiV3.ExplorerSegment();
      //expect(instance).to.be();
    });

    it('should have the property distance (base name: "distance")', function() {
      // uncomment below and update the code to test the property distance
      //var instance = new StravaApiV3.ExplorerSegment();
      //expect(instance).to.be();
    });

    it('should have the property points (base name: "points")', function() {
      // uncomment below and update the code to test the property points
      //var instance = new StravaApiV3.ExplorerSegment();
      //expect(instance).to.be();
    });

  });

}));