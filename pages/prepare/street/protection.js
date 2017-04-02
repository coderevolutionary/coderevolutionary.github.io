angular.module('app')
   .controller('protectionStreetController', ['$scope', '$http', function ($scope, $http) {

      if ($scope.model.pStreet) return;
      var read = function () {
         $http
            .get('https://raw.githubusercontent.com/coderevolutionary/goodplan/master/Prepare%20work/street-protection.md')
            .then(function (resp) {
               $scope.model.pStreet = resp.data;
            });
      };

      read();
   }]);