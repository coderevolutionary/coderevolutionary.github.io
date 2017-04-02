angular.module('app')
   .controller('navController', ['$scope', '$location', function ($scope, $location) {

      $scope.isSelected = function (path) {
         return $location.url() == path;
      };
   }]);