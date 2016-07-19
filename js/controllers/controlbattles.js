var ItemControllers = angular.module("ItemControllers", []);

ItemControllers.controller("ListController", ['$scope','$http', 
	function($scope, $http)
		{    
				$http.get('/json/QuestInfo.json').success (function(data){
				$scope.ItemVariable = data;

				setTimeout(function(){
						
				var url = "/js/descriptionsV2.js";
							$.getScript( url, function() {
								RunningDescriptions()
							})
				var menu = "/js/menu.js";
							$.getScript( menu, function() {
								MenuList()
							})	
	
}, 200);
			}); 
		}]
);

ItemControllers.controller("DetailsController", ['$scope','$http','$routeParams',
	 function($scope, $http, $routeParams)
		{    
				$http.get('/json/QuestInfo.json').success (function(data){
				$scope.ItemVariable = data;
					
				$scope.whichItem = $routeParams.ItemID;
				$scope.keyToDisplay = 'ID';
				setTimeout(function(){
					var url = "/js/descriptionsV2.js";
							$.getScript( url, function() {
								RunningDescriptions()
							})
					var menu = "/js/menu.js";
							$.getScript( menu, function() {
								MenuList()
							})	
					$('#tabs').tabs();
					$('#battletab').tabs();
}, 200);
			}); 
		}]
);
