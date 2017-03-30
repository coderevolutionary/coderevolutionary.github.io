'use strict';

angular.module('app', ['components', 'ngRoute', 'btford.markdown'])
   .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

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
