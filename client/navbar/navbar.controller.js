(function() {
  'use strict';
  angular.module('app').controller('NavbarCtrl', NavbarCtrl);

  NavbarCtrl.$inject = [ '$location' ];
  function NavbarCtrl($location) {
    var nav = this;

    nav.isActive = isActive;

    // http://getbootstrap.com/components/
    nav.tabs = [
            {visibleName: 'Home', name: 'home', title: 'Home', css: 'glyphicon glyphicon-pencil'},
            {visibleName: 'Search', name: 'search', title: 'Search', css: 'glyphicon glyphicon-apple'},
            {visibleName: 'Faq', name: 'faq', title: 'Faq', css: 'glyphicon glyphicon-plus'},
            {visibleName: 'Some', name: 'some', title: 'Some', css: 'glyphicon glyphicon-tag'},
            {visibleName: 'More', name: 'more', title: 'More', css: 'glyphicon glyphicon-facetime-video'},
            {visibleName: 'Tabs', name: 'tabs', title: 'Tabs', css: 'glyphicon glyphicon-thumbs-up'},

    ];

    function isActive(tab) {
      return getLocation() === tab ? 'active' : '';
    }

    function getLocation() {
      return $location.path().substring(1) || 'home';
    }
  }
})();