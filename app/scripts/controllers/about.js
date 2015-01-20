'use strict';

/**
 * @ngdoc function
 * @name dtAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dtAngularApp
 */
angular.module('dtAngularApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
