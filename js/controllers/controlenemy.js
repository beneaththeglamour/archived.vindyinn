var EnemyControllers = angular.module("EnemyControllers", []);

EnemyControllers.controller("ListEnemyController", ['$scope','$http', 
	function($scope, $http)
		{    
			$http.get('/json/MonsterInfo.json').success (function(data){
				$scope.EnemyVariable = data;
				setTimeout(function(){
						$('.tagname').each(function(){
							console.log('I swapped the underscores for you.')
							tagpopup = $(this).attr('title');
							replacetag = tagpopup.replace(/_/g, ' ');
							$(this).attr('title',replacetag)
						});
						$('.number').each(function(){
							grab = parseInt($(this).html())
							convert = grab.toLocaleString()
							$(this).html(convert)
						})
						var enemyname = "/js/enemyname.js";
							$.getScript( enemyname, function() {
								MonsterName()
								console.log('DataTable loaded.')
								$('table').DataTable({
									"order": [[ 0, "asc" ]]
								});
							})	
						var menu = "/js/menu.js";
							$.getScript( menu, function() {
								MenuList()
							})	
						}, 200);
			}); 
		}]
);

EnemyControllers.controller("DetailsEnemyController", ['$scope','$http','$routeParams',
	 function($scope, $http, $routeParams)
		{    
		
			$http.get('/json/MonsterInfo.json').success (function(data){
				$scope.EnemyVariable = data;
				$scope.whichItem = $routeParams.ItemID;
				$scope.keyToDisplay = 'ItemClass';
				setTimeout(function(){
					$('#tabs').tabs();
					hero = parseInt($('#hero').attr('value'))
					normal = $('#normal').attr('value')
					attackbonus = parseInt($('#attackbonus').attr('value'))
					defbonus = parseInt($('#defbonus').attr('value'))
					attack = parseInt($('.bossatt').html())
					def = parseInt($('.bossdef').html())
					$('#hero').click(changetohero)
					checkbo = $('#breakoff').attr('value')
					if(checkbo == 0){
						$('#breakoff').html('No')
					} else {
						$('#breakoff').html('Yes')
					}
					$('.number').each(function(){
						grab = parseInt($(this).html())
						convert = grab.toLocaleString()
						$(this).html(convert)
					})
					var enemyname = "/js/enemyname.js";
							$.getScript( enemyname, function() {
								MonsterName()
							})	
					var menu = "/js/menu.js";
							$.getScript( menu, function() {
								MenuList()
							})	
						}, 200);
			}); 
		}]
);
