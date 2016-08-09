'use strict';

/**
 * @ngdoc overview
 * @name angularLncApp
 * @description
 * # angularLncApp
 *
 * Main module of the application.
 */
angular
  .module('angularLncApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/bind', {
        templateUrl: 'views/databinding.html',
        controller: 'myController',
        controllerAs: 'myController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
