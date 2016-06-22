var EnemyApp = angular.module('EnemyApp', ['ngRoute','EnemyControllers']);
replacestart = $('#valueitem').attr('value');

EnemyApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/list', {
    templateUrl: 'template/enemy-list.html',
    controller: 'ListEnemyController'
  }).
  when('/enemy/:ItemID/', {
    templateUrl: 'template/enemy-detail.html',
    controller: 'DetailsEnemyController'
  }).
  otherwise({
    redirectTo: '/list'
  });
}]);