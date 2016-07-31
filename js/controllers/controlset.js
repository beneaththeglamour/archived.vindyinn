var ItemControllers = angular.module("ItemControllers", []);

ItemControllers.controller("ListController", ['$scope','$http', 
	function($scope, $http)
		{    
				$http.get('/json/SetInfo.json').success (function(data){
				$scope.ItemVariable = data;

				setTimeout(function(){
				WhatIsTheURL = window.location.pathname
				
							/**
							console.log('DataTable loaded.')
											$('.itemtable').DataTable();
							**/
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
				$http.get('/json/SetInfo.json').success (function(data){
				$scope.ItemVariable = data;
					$http.get('/json/SetEffectInfo.json').success (function(data2){
					$scope.SetEffectInfo = data2; })
					$http.get('/json/SetItemInfo.json').success (function(data3){
					$scope.SetItemInfo = data3; })
				$scope.whichItem = $routeParams.ItemID;
				$scope.keyToDisplay = 'ID';
				setTimeout(function(){
				WhatIsTheURL = window.location.pathname
					SetID = $('#MainSetID').attr('value')
					$('.SetIDInput').val(SetID).trigger('input')
							/**
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
