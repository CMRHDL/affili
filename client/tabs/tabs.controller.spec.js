'use strict';

describe('Controller: TabsCtrl', function () {

  beforeEach(module('app'));

  var TabsCtrl, scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TabsCtrl = $controller('TabsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    //expect(scope.awesomeThings.length).toBe(3);
  });
});