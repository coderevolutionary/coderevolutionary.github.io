angular.module('app')
   .controller('stepsController', ['$scope', '$http', function ($scope, $http) {

      if ($scope.model.steps) return;

      var read = function () {
         $http
            .get('https://raw.githubusercontent.com/coderevolutionary/goodplan/master/Tutorials/steps.md')
            .then(function (resp) {
               $scope.model.steps = resp.data;
            });
      };

      read();
   }]);