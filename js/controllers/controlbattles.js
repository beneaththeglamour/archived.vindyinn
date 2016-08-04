var ItemControllers = angular.module("ItemControllers", []);

ItemControllers.controller("ListController", ['$scope','$http', 
	function($scope, $http)
		{    
				$http.get('/json/QuestInfo.json').success (function(data){
				$scope.ItemVariable = data;

				setTimeout(function(){
				WhatIsTheURL = window.location.pathname
						if (WhatIsTheURL == '/search.html') {$('.mainiteminput').val(search).trigger('input');}	
				$('.raid').each(function(){
						Raid = $(this).attr('value');
						if (Raid == 'nightmare') {
							$(this).html('<img src="/images/misc/raid.png">')
						}
					} )
				var menu = "/js/battlename.js";
							$.getScript( menu, function() {
								BattleTitle()
								
								var menu = "/js/battlelocation.js";
							$.getScript( menu, function() {
								BattleLocation()
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
				$http.get('/json/QuestInfo.json').success (function(data){
				$scope.ItemVariable = data;
					$http.get('/json/QuestGoalInfo.json').success (function(data2){
					$scope.QuestGoalInfo = data2;
					})
					$http.get('/json/DropLocation.json').success (function(data3){
					$scope.DropLocation = data3;
					})
				$scope.whichItem = $routeParams.ItemID;
				$scope.keyToDisplay = 'ID';
				setTimeout(function(){
				WhatIsTheURL = window.location.pathname
						if (WhatIsTheURL == '/search.html') {$('.mainiteminput').val(search).trigger('input');}

					console.log('DataTable loaded.')
						if (WhatIsTheURL.indexOf('expertise') == 1) {
							$('.nametable').DataTable({
								"order": [[ 2, "asc" ]]
							});
						} else {
							$('.nametable').DataTable({
								"order": [[ 1, "asc" ]]
							});
						}
					var menu = "/js/battledesc.js";
							$.getScript( menu, function() {
								BattleQuote()
								$('.battlequote').each(function(){
									hidedesc = $(this).html();
										if (hidedesc != "") {
										$(this).css({'display':'block'});
										GetReadytoReplaceDesc = $(this).html();
										ReplacedDesc = GetReadytoReplaceDesc.replace(/\\n/g, "<br/>")
										$(this).html(ReplacedDesc)
										}
								})
							})	
					var menu = "/js/battlelocation.js";
							$.getScript( menu, function() {
								BattleLocation()
							})	
					var menu = "/js/battlename.js";
							$.getScript( menu, function() {
								BattleTitle()
							})	
					var menu = "/js/battlegoal.js";
							$.getScript( menu, function() {
								MainMission()
							})	
					var menu = "/js/menu.js";
							$.getScript( menu, function() {
								MenuList()
							})	
					$('#tabs').tabs();
					$('.raid').each(function(){
						Raid = $(this).attr('value');
						if (Raid == 'nightmare') {
							$(this).html('<img src="/images/misc/raid.png">')
						}
					} )
					
					$('#battletabs').tabs();
					$('.battlebanner').each(function(){
						QuestID = $(this).attr('value')
						$('.mission').val(QuestID).trigger('input')
					} )
					$('.number').each(function(){
							grab = parseInt($(this).html())
							if (grab > 0) {
								convert = grab.toLocaleString()
								$(this).html(convert)
							} else {$(this).html('')}
						})
					console.log('DataTable loaded.')
					$('.knowndrops').DataTable();
					DISQUS.reset({
					  reload: true,
					  config: function () {  
						this.page.identifier = $('#valueitem').attr('value');  
						this.page.url = window.location.href;
					  }
					});
}, 200);
			}); 
		}]
);
