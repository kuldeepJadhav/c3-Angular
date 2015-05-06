'use strict';

// Declare app level module which depends on views, and components
var analyticsApp =  angular.module('analyticsApp', [
  'ngRoute',
  'ui.bootstrap'

]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/landingpage', {
    templateUrl: 'views/landingPage.html'
  })
  .when('/barchartdetailspage', {
    templateUrl: 'views/barChartDetailsPage.html'
  })
  .when('/linechartdetailspage', {
    templateUrl: 'views/lineChartDetailsPage.html'
  })
  .otherwise({redirectTo: '/landingpage'});
}]);
