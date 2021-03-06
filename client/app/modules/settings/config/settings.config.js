(function () {
  'use strict';
  angular
    .module('com.module.settings')
    .run(function ($rootScope, gettextCatalog) {
      $rootScope.addMenu(gettextCatalog.getString('设置'),
        'app.settings.list', 'fa-cog');

      $rootScope.getSetting = function (key) {
        var valor = '';
        angular.forEach($rootScope.settings.data, function (item) {
          if (item.key === key) {
            valor = item.value;
          }
        });
        return valor;
      };
    });

})();
