var ItemControllers = angular.module("ItemControllers", []);

ItemControllers.controller("ListController", ['$scope','$http', 
	function($scope, $http)
		{    
				$http.get('/json/SkillInfo.json').success (function(data){
				$scope.ItemVariable = data;

				setTimeout(function(){
				WhatIsTheURL = window.location.pathname

				
				var menu = "/js/skillname.js";
							$.getScript( menu, function() {
								ReplaceSkillName()
							})	
				var menu = "/js/menu.js";
							$.getScript( menu, function() {
								MenuList()
							})	
							
				console.log('DataTable loaded.')
				$('.itemtable').DataTable();
	
}, 200);
			}); 
		}]
);

ItemControllers.controller("DetailsController", ['$scope','$http','$routeParams',
	 function($scope, $http, $routeParams)
		{    
				$http.get('/json/SkillInfo.json').success (function(data){
				$scope.ItemVariable = data;
					$http.get('/json/SkillRankInfo.json').success (function(data2){
					$scope.SkillRankInfo = data2; })
				$scope.whichItem = $routeParams.ItemID;
				$scope.keyToDisplay = 'ID';
				setTimeout(function(){
				WhatIsTheURL = window.location.pathname
					SkillID = $('.skillid').attr('value')
					$('.rankinput').val(SkillID).trigger('input')
					var menu = "/js/skillname.js";
							$.getScript( menu, function() {
								ReplaceSkillName()
							})	
					var menu = "/js/skilldesc.js";
							$.getScript( menu, function() {
								ReplaceSkillDesc()
								$('.skilldesc').each(function() {
									GetReadytoReplaceDesc = $(this).html();
									ReplacedDesc = GetReadytoReplaceDesc.replace(/\\n/g, "<br/>")
									$(this).html(ReplacedDesc)
								})
							})	
					var menu = "/js/skillrankdesc.js";
							$.getScript( menu, function() {
								ReplaceSkillRank()
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
