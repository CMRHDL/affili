(function() {
  'use strict';
  angular.module('app').controller('TabsCtrl', TabsCtrl);

  //TabsCtrl.$inject = [ '' ];
  function TabsCtrl() {
    var vm = this;

    // variables
    vm.var = '';

    // public functions
    vm.someFunctionOne = someFunctionOne;

    function someFunctionOne() {
    }

  }
})();