angular.module('app')
   .controller('qaController', ['$scope', '$http', function ($scope, $http) {

      if ($scope.model.qa) return;

      var read = function () {
         $http
            .get('https://raw.githubusercontent.com/coderevolutionary/goodplan/master/Tutorials/q-and-a.md')
            .then(function (resp) {
               $scope.model.qa = resp.data;
            });
      };

      read();
   }]);