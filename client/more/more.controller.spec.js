'use strict';

describe('Controller: MoreCtrl', function () {

  beforeEach(module('app'));

  var MoreCtrl, scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MoreCtrl = $controller('MoreCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    //expect(scope.awesomeThings.length).toBe(3);
  });
});