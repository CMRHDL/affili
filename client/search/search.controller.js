(function() {
  'use strict';
  angular.module('app').controller('SearchCtrl', SearchCtrl);

  SearchCtrl.$inject = [ 'rest' ];
  function SearchCtrl(rest) {
    var vm = this;

    vm.search = search;

    vm.advancedSearch = false;
    vm.input = {
      SortBy: null,
      PageSize: 10,
      password: null,
      search: null,
      SortOrder: null,
      username: null,
    };

    vm.SortByChoices = [
      'Brand',
      'ProductName',
      'Score',
      'PriceInformation.DisplayPrice',
      'PriceInformation.DisplayShipping',
      'ShopTitle'
    ];
    vm.SortOrderChoices = [ 'descending', 'ascending'];

    vm.input.SortOrder = vm.SortOrderChoices[0];
    vm.input.SortBy = vm.SortByChoices[0];
/**
 *  $params['PageSize'] = 20;
    $params['SortBy'] = 'Score';
    $params['SortOrder'] = 'descending';
 */
    /**
     * Functions
     */
    function search() {
      rest.post('/api/product/search', vm.input).then(function(response) {
        var json = response.data.replace(/[^\x20-\x7E]/gmi, "");
        vm.searchResult = JSON.parse(json);
        console.log(vm.searchResult);
      });
    }
  }
})();
