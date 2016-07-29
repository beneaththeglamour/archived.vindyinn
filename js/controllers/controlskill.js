var ItemControllers = angular.module("ItemControllers", []);

ItemControllers.controller("ListController", ['$scope','$http', 
	function($scope, $http)
		{    
				$http.get('/json/SkillInfo.json').success (function(data){
				$scope.ItemVariable = data;

				setTimeout(function(){
				WhatIsTheURL = window.location.pathname
				$('.hidetooltip').each(function(){
							$(this).children().hide()
							$(this).prev().mouseover(function(){
								$(this).next().children().show()
								$(this).next().show()
								})
							$(this).prev().mouseout(function(){
								$(this).next().children().hide()
								$(this).next().hide()
								})
						})
						
				$('.classresvalue').each(function(){
							checkclasses = $(this).attr('value')
								if (checkclasses == '1') {$(this).html('Lann')}
								if (checkclasses == '2') {$(this).html('Fiona')}
								if (checkclasses == '33') {$(this).html('Lann, Vella')}
								if (checkclasses == '4') {$(this).html('Evie')}
								if (checkclasses == '8') {$(this).html('Karok')}
								if (checkclasses == '16') {$(this).html('Kai')}
								if (checkclasses == '32') {$(this).html('Vella')}
								if (checkclasses == '64') {$(this).html('Hurk')}
								if (checkclasses == '128') {$(this).html('Lynn')}
								if (checkclasses == '256') {$(this).html('Arisha')}
								if (checkclasses == '512') {$(this).html('Sylas')}
								if (checkclasses == '1185') {$(this).html('Lann, Vella, Lynn')}
								if (checkclasses == '516') {$(this).html('Evie, Sylas')}
								if (checkclasses == '72') {$(this).html('Karok, Hurk')}
								if (checkclasses == '772') {$(this).html('Evie, Arisha, Sylas')}
								if (checkclasses == '1024') {$(this).html('Delia')}
								if (checkclasses == '1446') {$(this).html('Fiona, Evie, Vella, Lynn, Arisha, Delia')}
								if (checkclasses == '601') {$(this).html('Lann, Karok, Kai, Hurk, Sylas')}
						})
				
				var skillnamejs = "/js/skillname.js";
							$.getScript( skillnamejs, function() {
								ReplaceSkillName()
								var skilldescjs = "/js/skilldesc.js";
										$.getScript( skilldescjs, function() {
											ReplaceSkillDesc()
												$('.skilldesc').each(function() {
													GetReadytoReplaceDesc = $(this).html();
													ReplacedDesc = GetReadytoReplaceDesc.replace(/\\n/g, "<br/>")
													$(this).html(ReplacedDesc)
												})
											console.log('DataTable loaded.')
											$('.itemtable').DataTable();
								})	
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
					$('.number').each(function(){
							grab = parseInt($(this).html())
							convert = grab.toLocaleString()
							$(this).html(convert)
						})
					$('.classresvalue').each(function(){
							checkclasses = $(this).attr('value')
								if (checkclasses == '1') {$(this).html('Lann')}
								if (checkclasses == '2') {$(this).html('Fiona')}
								if (checkclasses == '33') {$(this).html('Lann, Vella')}
								if (checkclasses == '4') {$(this).html('Evie')}
								if (checkclasses == '8') {$(this).html('Karok')}
								if (checkclasses == '16') {$(this).html('Kai')}
								if (checkclasses == '32') {$(this).html('Vella')}
								if (checkclasses == '64') {$(this).html('Hurk')}
								if (checkclasses == '128') {$(this).html('Lynn')}
								if (checkclasses == '256') {$(this).html('Arisha')}
								if (checkclasses == '512') {$(this).html('Sylas')}
								if (checkclasses == '1185') {$(this).html('Lann, Vella, Lynn')}
								if (checkclasses == '516') {$(this).html('Evie, Sylas')}
								if (checkclasses == '72') {$(this).html('Karok, Hurk')}
								if (checkclasses == '772') {$(this).html('Evie, Arisha, Sylas')}
								if (checkclasses == '1024') {$(this).html('Delia')}
								if (checkclasses == '1446') {$(this).html('Fiona, Evie, Vella, Lynn, Arisha, Delia')}
								if (checkclasses == '601') {$(this).html('Lann, Karok, Kai, Hurk, Sylas')}
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
										totalap = 0
										$('.calculateap').each(function(){
											checknegative = $(this).attr('value')
											if(checknegative == '-1') {$(this).attr('value','0')}
										} )
										$('.calculateap').each(function(){
											addap = parseInt($(this).attr('value'))
											totalap = totalap + addap
										} )
										console.log('DataTable loaded.')
										$('.skillid').DataTable();
										$('.skillid').append('<tfoot class="total"><tr><td></td><td></td><td class="centercell">Total</td><td class="centercell">' + totalap + '</td></tr><tfoot>')

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
