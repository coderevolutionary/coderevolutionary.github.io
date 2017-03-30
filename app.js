'use strict';

angular.module('app', ['ngRoute', 'btford.markdown'])
   .config(['$routeProvider', function ($routeProvider) {

      $routeProvider
         .when('/', {
            templateUrl: 'pages/about/about.html'
         })
         .otherwise({
            redirectTo: '/'
         });
      $locationProvider.html5Mode(true);
   }]).run(function ($rootScope) {
   $rootScope.$on('$locationChangeSuccess', function () {
      $(document).scrollTop(0);
   });
});
