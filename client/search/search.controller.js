(function() {
  'use strict';
  angular.module('app').controller('SearchCtrl', SearchCtrl);

  SearchCtrl.$inject = [ 'rest' ];
  function SearchCtrl(rest) {
    var vm = this;

    rest.get('/api/product').then(function(response) {
      var json = response.data.replace(/[^\x20-\x7E]/gmi, "");
      // var json = response.data.replace(/(\r\n|\n|\r)/gmi, '');
      console.log(JSON.parse(json));
    });
  }
})();
