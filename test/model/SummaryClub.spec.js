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
    instance = new StravaApiV3.SummaryClub();
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

  describe('SummaryClub', function() {
    it('should create an instance of SummaryClub', function() {
      // uncomment below and update the code to test SummaryClub
      //var instance = new StravaApiV3.SummaryClub();
      //expect(instance).to.be.a(StravaApiV3.SummaryClub);
    });

    it('should have the property profileMedium (base name: "profile_medium")', function() {
      // uncomment below and update the code to test the property profileMedium
      //var instance = new StravaApiV3.SummaryClub();
      //expect(instance).to.be();
    });

    it('should have the property coverPhoto (base name: "cover_photo")', function() {
      // uncomment below and update the code to test the property coverPhoto
      //var instance = new StravaApiV3.SummaryClub();
      //expect(instance).to.be();
    });

    it('should have the property coverPhotoSmall (base name: "cover_photo_small")', function() {
      // uncomment below and update the code to test the property coverPhotoSmall
      //var instance = new StravaApiV3.SummaryClub();
      //expect(instance).to.be();
    });

    it('should have the property sportType (base name: "sport_type")', function() {
      // uncomment below and update the code to test the property sportType
      //var instance = new StravaApiV3.SummaryClub();
      //expect(instance).to.be();
    });

    it('should have the property city (base name: "city")', function() {
      // uncomment below and update the code to test the property city
      //var instance = new StravaApiV3.SummaryClub();
      //expect(instance).to.be();
    });

    it('should have the property state (base name: "state")', function() {
      // uncomment below and update the code to test the property state
      //var instance = new StravaApiV3.SummaryClub();
      //expect(instance).to.be();
    });

    it('should have the property country (base name: "country")', function() {
      // uncomment below and update the code to test the property country
      //var instance = new StravaApiV3.SummaryClub();
      //expect(instance).to.be();
    });

    it('should have the property _private (base name: "private")', function() {
      // uncomment below and update the code to test the property _private
      //var instance = new StravaApiV3.SummaryClub();
      //expect(instance).to.be();
    });

    it('should have the property memberCount (base name: "member_count")', function() {
      // uncomment below and update the code to test the property memberCount
      //var instance = new StravaApiV3.SummaryClub();
      //expect(instance).to.be();
    });

    it('should have the property featured (base name: "featured")', function() {
      // uncomment below and update the code to test the property featured
      //var instance = new StravaApiV3.SummaryClub();
      //expect(instance).to.be();
    });

    it('should have the property verified (base name: "verified")', function() {
      // uncomment below and update the code to test the property verified
      //var instance = new StravaApiV3.SummaryClub();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instance = new StravaApiV3.SummaryClub();
      //expect(instance).to.be();
    });

  });

}));
