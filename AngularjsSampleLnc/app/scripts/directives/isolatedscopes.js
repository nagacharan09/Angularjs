'use strict';
angular.module('angularLncApp').directive('myDirective', function() {
  var directive = {};

  directive.restrict = 'A'; /* restrict this directive to elements */
  directive.scope = {
    interPolatedProp:'@interpolated',
    twowayDataBindingProp:'=twowayDataBinding',
    onewayObject:'&onewayObject'
  };

  return directive;
});
angular.module('angularLncApp').directive('phone', function() {
  return {

    scope:{
      dial:'&'
    },
    template:'<input type="text" ng-model="value" />'+'<div class="button" ng-click=dial({message:value}) >Call Home!</div>'

  };
});
angular.module('angularLncApp').directive('drink', function() {
  return {

    scope:{
      flavour:'@'
    },
    template:'<div>{{flavour}}</div>'

  };
});
angular.module('angularLncApp').directive('drinktwo', function() {
  return {

    scope:{
      flavour:'='
    },
    template:'<input type="text" ng-model="flavour" />'

  };
});
