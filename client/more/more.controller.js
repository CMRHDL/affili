(function() {
  'use strict';
  angular.module('app').controller('MoreCtrl', MoreCtrl);

  //MoreCtrl.$inject = [ '' ];
  function MoreCtrl() {
    var vm = this;

    // variables
    vm.var = '';

    // public functions
    vm.someFunctionOne = someFunctionOne;

    function someFunctionOne() {
    }

  }
})();