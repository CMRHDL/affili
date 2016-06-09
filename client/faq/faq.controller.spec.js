'use strict';

describe('Controller: FaqCtrl', function () {

  beforeEach(module('app'));

  var FaqCtrl, scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FaqCtrl = $controller('FaqCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    //expect(scope.awesomeThings.length).toBe(3);
  });
});