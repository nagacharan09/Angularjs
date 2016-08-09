'use strict';
angular.module('angularLncApp')
  .controller('myController', function ($scope) {
    $scope.data = { time : new Date() };
    $scope.showData=true;
    // to check isolated scopes
    $scope.callHome=function(message){
      alert(message);
    };
    // data for custom directive
    $scope.textToInsert = 'Hello custom directive';
    $scope.ctrlFlavour='straberryfffff';
//custom class directive
    $scope.settings = {"Window":{"Transparent":false,"BackgroundColor":"#eeeeee"}};

    // to check two way databinding
    $scope.myForm={firstName:'John',lastName:'deir'};
    // to check ng-repeat functionality
    $scope.list = { var1 : "value1", var2 : "value2", var3 : "value3",var4 : "value4"};
    // to check filter functionality with currency number json lowercase uppercase date
    $scope.name='lowerUpperCase';
    $scope.money=1000.5244;

    $scope.updateTime = function() {
      $scope.data.time = new Date();
      $scope.showData=true;
    }

    document.getElementById('updateTimeButton')
      .addEventListener('click', function() {
        $scope.$apply(function(){

          console.log('update time clicked');
          $scope.data.time = new Date();
          $scope.showData=false;
        });

      });
  });
