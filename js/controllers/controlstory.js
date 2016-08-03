var ItemControllers = angular.module("ItemControllers", []);

ItemControllers.controller("ListController", ['$scope','$http', 
	function($scope, $http)
		{    
				$http.get('/json/StoryLineInfo.json').success (function(data){
				$scope.ItemVariable = data;

				setTimeout(function(){
				WhatIsTheURL = window.location.pathname				
				$('.number').each(function(){
					grab = parseInt($(this).html())
					convert = grab.toLocaleString()
					$(this).html(convert)
				})
				var menu = "/js/storyname.js";
							$.getScript( menu, function() {
								StoryName()
								$('.storyname').each(function(){
									NoStoryName = $(this).html()
									if (NoStoryName == '') {$(this).html('TBA')}
									if (NoStoryName == ' ') {$(this).html('TBA')}
								})
								
								console.log('DataTable loaded.')
								$('.itemtable').DataTable();
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
				$http.get('/json/StoryLineInfo.json').success (function(data){
				$scope.ItemVariable = data;
					$http.get('/json/StoryGoalInfo.json').success (function(data2){
					$scope.StoryGoalInfo = data2;})
				$scope.whichItem = $routeParams.ItemID;
				$scope.keyToDisplay = 'ID';
				setTimeout(function(){
				WhatIsTheURL = window.location.pathname

				$('.number').each(function(){
					grab = parseInt($(this).html())
					convert = grab.toLocaleString()
					$(this).html(convert)
				})
				StoryID = $('.settitle').attr('value')
				$('.storyidinput').val(StoryID).trigger('input')
				 $('.Result').each(function(){
						$(this).remove()
				 })
					var menu = "/js/storyname.js";
							$.getScript( menu, function() {
								StoryName()
							})	
					var menu = "/js/storygoals.js";
							$.getScript( menu, function() {
								AddingStoryGoals()
								var menu = "/js/storyreplacename.js";
								$.getScript( menu, function() {
									ReplaceTask()
								})
								var menu = "/js/storyreplacebattles.js";
								$.getScript( menu, function() {
									ReplaceBattles()
								})
								var menu = "/js/storyreplaceitems.js";
								$.getScript( menu, function() {
									ReplaceItems()
								})
							})	
				
				

					var menu = "/js/menu.js";
							$.getScript( menu, function() {
								MenuList()
							})	
					$('#tabs').tabs();
					
}, 200);
			}); 
		}]
);
