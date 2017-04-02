angular.module('app')
   .controller('protectionSocialController', ['$scope', '$http', function ($scope, $http) {

      if ($scope.model.pSocial) return;
      var read = function () {
         $http
            .get('https://raw.githubusercontent.com/coderevolutionary/goodplan/master/Online%20work/protection-plan.md')
            .then(function (resp) {
               $scope.model.pSocial = resp.data;
            });
      };

      read();
   }]);