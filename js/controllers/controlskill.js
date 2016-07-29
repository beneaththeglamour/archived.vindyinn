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
				$('.skillid').DataTable();
	
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
					
					$('.enum').each(function(){
						WhatIsTheSkillRank = $(this).attr('value')
						if (WhatIsTheSkillRank == '1') {$(this).html('F')}
						if (WhatIsTheSkillRank == '2') {$(this).html('E')}
						if (WhatIsTheSkillRank == '3') {$(this).html('D')}
						if (WhatIsTheSkillRank == '4') {$(this).html('C')}
						if (WhatIsTheSkillRank == '5') {$(this).html('B')}
						if (WhatIsTheSkillRank == '6') {$(this).html('A')}
						if (WhatIsTheSkillRank == '7') {$(this).html('9')}
						if (WhatIsTheSkillRank == '8') {$(this).html('8')}
						if (WhatIsTheSkillRank == '9') {$(this).html('7')}
						if (WhatIsTheSkillRank == '10') {$(this).html('6')}
						if (WhatIsTheSkillRank == '11') {$(this).html('5')}
						if (WhatIsTheSkillRank == '12') {$(this).html('4')}
						if (WhatIsTheSkillRank == '13') {$(this).html('3')}
						if (WhatIsTheSkillRank == '14') {$(this).html('2')}
						if (WhatIsTheSkillRank == '15') {$(this).html('1')}
					})
					
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
								var menu = "/js/skillrankdesc.js";
									$.getScript( menu, function() {
										ReplaceSkillRank()
											$('.skillrank').each(function() {
												GetReadytoReplaceDesc = $(this).html();
												ReplacedDesc = GetReadytoReplaceDesc.replace(/\\n/g, "<br/>")
												$(this).html(ReplacedDesc)
											})
										console.log('DataTable loaded.')
										$('.skillid').DataTable();
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
