var ItemControllers = angular.module("ItemControllers", []);

ItemControllers.controller("ListController", ['$scope','$http', 
	function($scope, $http)
		{    
				$http.get('/json/StoryLineInfo.json').success (function(data){
				$scope.ItemVariable = data;

				setTimeout(function(){
				WhatIsTheURL = window.location.pathname
				
							/*
				console.log('DataTable loaded.')
				$('.itemtable').DataTable();
				*/
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
				$http.get('/json/StoryLineInfo.json').success (function(data){
				$scope.ItemVariable = data;
				$scope.whichItem = $routeParams.ItemID;
				$scope.keyToDisplay = 'ID';
				setTimeout(function(){
				WhatIsTheURL = window.location.pathname
					/**
										$('.number').each(function(){
											grab = parseInt($(this).html())
											convert = grab.toLocaleString()
											$(this).html(convert)
										})
										console.log('DataTable loaded.')
										$('.skillid').DataTable({
											"order": [[ 3, "asc" ]]
										});
									
							**/
					var menu = "/js/menu.js";
							$.getScript( menu, function() {
								MenuList()
							})	
					$('#tabs').tabs();
					
}, 200);
			}); 
		}]
);
