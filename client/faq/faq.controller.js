(function() {
  'use strict';
  angular.module('app').controller('FaqCtrl', FaqCtrl);

  //FaqCtrl.$inject = [ '' ];
  function FaqCtrl() {
    var vm = this;

    // variables
    vm.var = '';

    // public functions
    vm.someFunctionOne = someFunctionOne;

    function someFunctionOne() {
    }

  }
})();