(function () {
  'use strict';
  angular
    .module('com.module.events')
    .run(function ($rootScope, Event, gettextCatalog) {
      $rootScope.addMenu(gettextCatalog.getString('活动'), 'app.events.list', 'fa-calendar-o');

      Event.find(function (data) {
        $rootScope.addDashboardBox('Events', 'bg-purple', 'ion-calendar', data.length, 'app.events.list');
      });

    });

})();
