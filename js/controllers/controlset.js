var ItemControllers = angular.module("ItemControllers", []);

ItemControllers.controller("ListController", ['$scope','$http', 
	function($scope, $http)
		{    
				$http.get('/json/SetInfo.json').success (function(data){
				$scope.ItemVariable = data;

				setTimeout(function(){
				WhatIsTheURL = window.location.pathname
				
							
				var changeset = "/js/setname.js";
							$.getScript( changeset, function() {
								ChangeSetName()
								console.log('DataTable loaded.')
								$('.itemtable').DataTable();
								$('.scopecontain').show()
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
				$http.get('/json/SetInfo.json').success (function(data){
				$scope.ItemVariable = data;
					$http.get('/json/SetEffectInfo.json').success (function(data2){
					$scope.SetEffectInfo = data2; })
					$http.get('/json/SetItemInfo.json').success (function(data3){
					$scope.SetItemInfo = data3; })
					$http.get('/json/ItemClassInfoV4.json').success (function(data4){
					$scope.ItemClassInfo = data4; })
					$http.get('/json/RecipeMaterialInfo.json').success (function(data5){
					$scope.RecipeMaterialInfo = data5; })
				$scope.whichItem = $routeParams.ItemID;
				$scope.keyToDisplay = 'ID';
				setTimeout(function(){
				WhatIsTheURL = window.location.pathname
				
				LoadMats = function(){
						$('.RecipeID').each(function(){
							NPCMatID = $(this).attr('value')
							$('.NPC'+NPCMatID).val(NPCMatID).trigger('input')
						})
					}
				
					Frame2 = function(){
						$('.setitemclass').each(function(){
							SetItemClass = $(this).attr('value')
							$('.'+SetItemClass).val(SetItemClass).trigger('input')
						} )
						setTimeout(function(){
							$('.itemdetail').each(function(){
								RecipeID = $(this).attr('value')
								$('.Recipe'+RecipeID).val('recipe_'+RecipeID).trigger('input');
								setTimeout(function(){ LoadMats()},500)
							})
						},500)
					}
					Frame1 = function(){
						SetID = $('#MainSetID').attr('value')
						$('.SetIDInput').val(SetID).trigger('input')
						setTimeout(function(){Frame2()
						},500)
					}
					Frame1()
					
			
					$('.itemdetail').each(function(){
							RecipeID = $(this).attr('value')
							$('.Recipe'+RecipeID).val('recipe_'+RecipeID).trigger('input');
							LoadMats()
						})

					console.log('DataTable loaded.')
					$('#tabs').tabs();
					DISQUS.reset({
					  reload: true,
					  config: function () {  
						this.page.identifier = $('.setname').attr('value');  
						this.page.url = window.location.href;
					  }
					});
					var changeset = "/js/setname.js";
							$.getScript( changeset, function() {
								ChangeSetName()
							
							})	
					var menu = "/js/menu.js";
							$.getScript( menu, function() {
								MenuList()
							})	
					$('.scopecontain').show()
					
}, 200);
			}); 
		}]
);
