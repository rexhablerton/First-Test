 app.controller('appController',['$scope', '$translate', function ($scope, $translate) {
    $scope.changeLanguage = function(key){
      $translate.use(key);
    };
  }]);