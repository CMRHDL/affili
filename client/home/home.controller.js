(function() {
  'use strict';
  angular.module('app').controller('HomeCtrl', HomeCtrl);

  //HomeCtrl.$inject = [ '' ];
  function HomeCtrl() {
    var vm = this;
    vm.login = login;

    function login() {
      if (vm.input.username === 'toni' && vm.input.password === 'd') {
        window.location = '/#/search';
      }
    }
  }
})();
