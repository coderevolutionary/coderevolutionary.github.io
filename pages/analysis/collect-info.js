angular.module('app')
   .controller('collectInfoController', ['$scope', '$http', function ($scope, $http) {

      if ($scope.model.collectInfo) return;
      var read = function () {
         $http
            .get('https://raw.githubusercontent.com/coderevolutionary/goodplan/master/Analysis%20work/information.md')
            .then(function (resp) {
               $scope.model.collectInfo = resp.data;
            });
      };

      read();
   }]);