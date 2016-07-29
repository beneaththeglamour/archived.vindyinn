var EnemyApp = angular.module('EnemyApp', ['ngRoute','EnemyControllers','ngDisqus']);
replacestart = $('#valueitem').attr('value');

EnemyApp.config(['$routeProvider', function($routeProvider) {
	$locationProvider.hashPrefix('!');
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

EnemyApp.config(function($disqusProvider){
	 shortname = 'vindictusinndb'
      $disqusProvider.setShortname(shortname);
   });