(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.formInput = undefined;
  $scope.outputMessage = undefined;
  
  $scope.checkValidity = function(value) {
    if (value) {
      $scope.sayMessage();
    }
    else 
      $scope.outputMessage = "Please enter data first"
  };


  $scope.sayMessage = function () {
    var lunchItems = countItems();
      if (lunchItems <= 3) {
        $scope.outputMessage = "Enjoy!"
      }
      else {
        $scope.outputMessage = "Too much!";
      }
  };

  function countItems() {
    var itemsCount = calculateArrayLength($scope.formInput);
    return itemsCount;
  }

  function calculateArrayLength(string) {
    var array = string.split(",").filter(item => item); //empty string not counted
    var arrayLength = array.length;
    return arrayLength;
  }



};

})();
