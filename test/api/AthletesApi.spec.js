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
    instance = new StravaApiV3.AthletesApi();
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

  describe('AthletesApi', function() {
    describe('getLoggedInAthlete', function() {
      it('should call getLoggedInAthlete successfully', function(done) {
        //uncomment below and update the code to test getLoggedInAthlete
        //instance.getLoggedInAthlete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getLoggedInAthleteZones', function() {
      it('should call getLoggedInAthleteZones successfully', function(done) {
        //uncomment below and update the code to test getLoggedInAthleteZones
        //instance.getLoggedInAthleteZones(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getStats', function() {
      it('should call getStats successfully', function(done) {
        //uncomment below and update the code to test getStats
        //instance.getStats(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateLoggedInAthlete', function() {
      it('should call updateLoggedInAthlete successfully', function(done) {
        //uncomment below and update the code to test updateLoggedInAthlete
        //instance.updateLoggedInAthlete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
