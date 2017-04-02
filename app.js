'use strict';

angular.module('app', ['ngRoute', 'btford.markdown'])
   .config(['$provide', '$routeProvider', '$locationProvider', function ($provide, $routeProvider, $locationProvider) {


      $locationProvider.html5Mode({ enabled: true, requireBase: true });
      $locationProvider.hashPrefix('!');

      $provide.decorator('$sniffer', ['$delegate', function ($delegate) {
         $delegate.history = false;
         return $delegate;
      }]);

      $routeProvider
         .when('/', {
            templateUrl: 'pages/about/about.html',
            controller: 'aboutController'
         })
         .when('/q-and-a', {
            templateUrl: 'pages/tutorials/q-and-a.html',
            controller: 'qaController'
         })
         .when('/collect-info', {
            templateUrl: 'pages/analysis/collect-info.html',
            controller: 'collectInfoController'
         })
         .when('/protection-social', {
            templateUrl: 'pages/prepare/social/protection.html',
            controller: 'protectionSocialController'
         })
         .when('/protection-street', {
            templateUrl: 'pages/prepare/street/protection.html',
            controller: 'protectionStreetController'
         })
         .when('/steps', {
            templateUrl: 'pages/steps/steps.html',
            controller: 'stepsController'
         })
         .otherwise({
            redirectTo: '/'
         });
   }]).run(function ($rootScope) {
   $rootScope.$on('$locationChangeSuccess', function () {
      $(document).scrollTop(0);
   });
});
