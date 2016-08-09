'use strict';
angular.module('angularLncApp').directive('compilink', function() {
  var directive = {};

  directive.restrict = 'E'; /* restrict this directive to elements */
  directive.compile = function(element , attributes){
    element.css("border", "1px solid #cccccc");
    var linkfunction = function($scope,element,attributes){
      element.html("This is the new content: " + $scope.data.time);
      element.css("background-color", "#ffff00");
    }
    return linkfunction;
  }

  return directive;
});
