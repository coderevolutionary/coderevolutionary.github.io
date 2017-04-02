angular.module('app')
   .controller('aboutController', ['$scope', '$http', function ($scope, $http) {

      if ($scope.model.about) return;
      var read = function () {
         $http
            .get('https://raw.githubusercontent.com/coderevolutionary/goodplan/master/README.md')
            .then(function (resp) {
               $scope.model.about = resp.data;
            });
      };

      read();
   }]);