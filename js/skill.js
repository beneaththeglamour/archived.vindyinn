var ItemApp = angular.module('ItemApp', ['ngRoute','ItemControllers','ngDisqus']);
replacestart = $('#valueitem').attr('value');

ItemApp.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.
  when('/list', {
    templateUrl: '/template/skill-list.html',
    controller: 'ListController'
  }).
  when('/skill/:ItemID/', {
    templateUrl: '/template/skill-detail.html',
    controller: 'DetailsController'
  }).
  otherwise({
    redirectTo: '/list'
  });
}]);

 ItemApp.config(function($disqusProvider){
	 shortname = 'vindictusinndb'
      $disqusProvider.setShortname(shortname);
   });