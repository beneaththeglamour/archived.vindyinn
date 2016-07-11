var ItemApp = angular.module('ItemApp', ['ngRoute','ItemControllers']);
replacestart = $('#valueitem').attr('value');

ItemApp.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.
  when('/list', {
    templateUrl: '/template/enchantscroll-list.html',
    controller: 'ListController'
  }).
  when('/item/:ItemID/', {
    templateUrl: '/template/enchantscroll-detail.html',
    controller: 'DetailsController'
  }).
  otherwise({
    redirectTo: '/list'
  });
}]);