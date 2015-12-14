(function () {
  'use strict';
  angular.module('com.module.users')
    .run(function ($rootScope, gettextCatalog) {
      $rootScope.addMenu(gettextCatalog.getString('用户'), 'app.users.list', 'fa-user');
    });

})();
