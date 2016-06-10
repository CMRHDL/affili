(function() {

  config.$inject = [ '$routeProvider' ];
  function config($routeProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'home/home.html',
      controller: 'HomeCtrl',
      controllerAs: 'vm',
    })
    .when('/home', {
      templateUrl: 'home/home.html',
      controller: 'HomeCtrl',
      controllerAs: 'vm',
    }).when('/search', {
        templateUrl: 'search/search.html',
        controller: 'SearchCtrl',
        controllerAs: 'vm',
    }).when('/faq', {
        templateUrl: 'faq/faq.html',
        controller: 'FaqCtrl',
        controllerAs: 'vm',
    }).when('/some', {
        templateUrl: 'some/some.html',
        controller: 'SomeCtrl',
        controllerAs: 'vm',
    }).when('/more', {
        templateUrl: 'more/more.html',
        controller: 'MoreCtrl',
        controllerAs: 'vm',
    }).when('/tabs', {
        templateUrl: 'tabs/tabs.html',
        controller: 'TabsCtrl',
        controllerAs: 'vm',
    }).otherwise({
      redirectTo:'/'
    });
  }

  angular.module('app',['ngRoute', 'ui.bootstrap',]);
  angular.module('app').config(config);

}());
