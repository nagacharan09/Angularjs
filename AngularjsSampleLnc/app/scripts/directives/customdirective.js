'use strict';
angular.module('angularLncApp').directive('diva', function() {
  var directive = {};

  directive.restrict = 'E'; /* restrict this directive to elements */

  directive.template = "My first directive: {{textToInsert}}";
  return directive;
});
// custom COMMENT directive
angular.module('angularLncApp').directive('myDirectiveName', function(){
  return {
    restrict: 'M',
    link: function(scope, elem, attr) {
      alert(attr.myDirectiveName); //alerts "this is all an argument"
    }
  };
});
// custom CLASS directive
angular.module('angularLncApp').directive('customstyle', function () {
  return {
    restrict: 'AC',
    link: function (scope, element, attrs) {
      scope.$watch(attrs.myTransparent, function (value) {
        element.css('background-color', (value ? 'transparent' : attrs.myBgcolor));
      });
    }
  }
});
