(function () {
  'use strict';
  angular
    .module('com.module.browser')
    .run(function ($rootScope, Event, gettextCatalog) {
      $rootScope.addMenu(gettextCatalog.getString('浏览器'), 'app.browser.models', 'fa-globe');
    });

})();
