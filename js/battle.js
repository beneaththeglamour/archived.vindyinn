var ItemApp = angular.module('ItemApp', ['ngRoute','ItemControllers']);
replacestart = $('#valueitem').attr('value');

ItemApp.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.
  when('/list', {
    templateUrl: '/template/battle-list.html',
    controller: 'ListController'
  }).
  when('/battle/:ItemID/', {
    templateUrl: '/template/battle-detail.html',
    controller: 'DetailsController'
  }).
  otherwise({
    redirectTo: '/list'
  });
}]);