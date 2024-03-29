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
    define(['ApiClient', 'model/DetailedClub', 'model/Fault', 'model/SummaryActivity', 'model/SummaryAthlete', 'model/SummaryClub'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/DetailedClub'), require('../model/Fault'), require('../model/SummaryActivity'), require('../model/SummaryAthlete'), require('../model/SummaryClub'));
  } else {
    // Browser globals (root is window)
    if (!root.StravaApiV3) {
      root.StravaApiV3 = {};
    }
    root.StravaApiV3.ClubsApi = factory(root.StravaApiV3.ApiClient, root.StravaApiV3.DetailedClub, root.StravaApiV3.Fault, root.StravaApiV3.SummaryActivity, root.StravaApiV3.SummaryAthlete, root.StravaApiV3.SummaryClub);
  }
}(this, function(ApiClient, DetailedClub, Fault, SummaryActivity, SummaryAthlete, SummaryClub) {
  'use strict';

  /**
   * Clubs service.
   * @module api/ClubsApi
   * @version 3.0.0
   */

  /**
   * Constructs a new ClubsApi. 
   * @alias module:api/ClubsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getClubActivitiesById operation.
     * @callback module:api/ClubsApi~getClubActivitiesByIdCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SummaryActivity>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Club Activities
     * Retrieve recent activities from members of a specific club. The authenticated athlete must belong to the requested club in order to hit this endpoint. Pagination is supported. Athlete profile visibility is respected for all activities.
     * @param {Number} id The identifier of the club.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number.
     * @param {Number} opts.perPage Number of items per page. Defaults to 30. (default to 30)
     * @param {module:api/ClubsApi~getClubActivitiesByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SummaryActivity>}
     */
    this.getClubActivitiesById = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getClubActivitiesById");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['strava_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [SummaryActivity];

      return this.apiClient.callApi(
        '/clubs/{id}/activities', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getClubAdminsById operation.
     * @callback module:api/ClubsApi~getClubAdminsByIdCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SummaryAthlete>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Club Administrators.
     * Returns a list of the administrators of a given club.
     * @param {Number} id The identifier of the club.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number.
     * @param {Number} opts.perPage Number of items per page. Defaults to 30. (default to 30)
     * @param {module:api/ClubsApi~getClubAdminsByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SummaryAthlete>}
     */
    this.getClubAdminsById = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getClubAdminsById");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['strava_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [SummaryAthlete];

      return this.apiClient.callApi(
        '/clubs/{id}/admins', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getClubById operation.
     * @callback module:api/ClubsApi~getClubByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DetailedClub} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Club
     * Returns a given club using its identifier.
     * @param {Number} id The identifier of the club.
     * @param {module:api/ClubsApi~getClubByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/DetailedClub}
     */
    this.getClubById = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getClubById");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['strava_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = DetailedClub;

      return this.apiClient.callApi(
        '/clubs/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getClubMembersById operation.
     * @callback module:api/ClubsApi~getClubMembersByIdCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SummaryAthlete>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Club Members
     * Returns a list of the athletes who are members of a given club.
     * @param {Number} id The identifier of the club.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number.
     * @param {Number} opts.perPage Number of items per page. Defaults to 30. (default to 30)
     * @param {module:api/ClubsApi~getClubMembersByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SummaryAthlete>}
     */
    this.getClubMembersById = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling getClubMembersById");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['strava_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [SummaryAthlete];

      return this.apiClient.callApi(
        '/clubs/{id}/members', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLoggedInAthleteClubs operation.
     * @callback module:api/ClubsApi~getLoggedInAthleteClubsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SummaryClub>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Athlete Clubs
     * Returns a list of the clubs whose membership includes the authenticated athlete.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.page Page number.
     * @param {Number} opts.perPage Number of items per page. Defaults to 30. (default to 30)
     * @param {module:api/ClubsApi~getLoggedInAthleteClubsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/SummaryClub>}
     */
    this.getLoggedInAthleteClubs = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'page': opts['page'],
        'per_page': opts['perPage'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['strava_oauth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [SummaryClub];

      return this.apiClient.callApi(
        '/athlete/clubs', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
