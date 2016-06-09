(function() {
  'use strict';
  angular.module('app').controller('SomeCtrl', SomeCtrl);

  //SomeCtrl.$inject = [ '' ];
  function SomeCtrl() {
    var vm = this;

    // variables
    vm.var = '';

    // public functions
    vm.someFunctionOne = someFunctionOne;

    function someFunctionOne() {
    }

  }
})();