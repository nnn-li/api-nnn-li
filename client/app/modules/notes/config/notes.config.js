(function () {
  'use strict';
  angular
    .module('com.module.notes')
    .run(function ($rootScope, Note, gettextCatalog) {
      $rootScope.addMenu(gettextCatalog.getString('笔记'), 'app.notes.list', 'fa-file-o');

      Note.find(function (data) {
        $rootScope.addDashboardBox(gettextCatalog.getString('Notes'), 'bg-green', 'ion-clipboard', data.length, 'app.notes.list');
      });

    });

})();
