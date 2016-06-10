(function() {
  'use strict';

  angular.module('app').service('rest', rest);

  rest.$inject = [ '$http' ];
  function rest($http) {

    //http://stackoverflow.com/a/27117322
    var service = this; // jshint ignore:line
    var postConfig = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    service.get = function(restURL, params) {
      return $http.get(restURL, params).then(function(data) {
        return data;
      }, function(data) {
        buildError(data);
      });
    };

    service.post = function(restURL, params) {
      return $http.post(restURL, params).then(function(data) {
        return data;
      }, function(data) {
        buildError(data);
      });
    };

    function buildError(data) {
      console.log('error!');
      console.log(data);
    }
  }
})();
