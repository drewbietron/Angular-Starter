'use strict';

/**
 * @ngdoc function
 * @name dtAngularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dtAngularApp
 */
angular.module('dtAngularApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
