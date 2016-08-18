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
				 $('.storycategory').each(function(){
					 StoryType = $(this).attr('value')
					 if (StoryType == "CONTENTS") {$(this).html("Content Story")}
					if (StoryType == "EQUIP") {$(this).html("Equipment Story")}
					if (StoryType == "ERROR") {$(this).html("Uncategorized")}
					if (StoryType == "EVENT") {$(this).html("Event Story")}
					if (StoryType == "MAIN") {$(this).html("Main Story")}
					if (StoryType == "MAINSTREAM") {$(this).html("Main Stream: Season 1")}
					if (StoryType == "MAINSTREAM_INTRO") {$(this).html("Main Stream: Prologue")}
					if (StoryType == "MAINSTREAM_S2") {$(this).html("Main Stream: Season 2")}
					if (StoryType == "MAINSTREAM_S3") {$(this).html("Main Stream: Season 3")}
					if (StoryType == "REPEAT") {$(this).html("Repeat Story")}
					if (StoryType == "SKILL") {$(this).html("Skill Story")}
					if (StoryType == "SUB") {$(this).html("Sub Story: Season 1")}
					if (StoryType == "SUB_S2") {$(this).html("Sub Story: Season 2")}
					if (StoryType == "SUB_S3") {$(this).html("Sub Story: Season 3")}
					if (StoryType == "WATCHING") {$(this).html("Story of Interest")}
				 } )
				var menu = "/js/storyname.js";
							$.getScript( menu, function() {
								StoryName()
								$('.storyname').each(function(){
									NoStoryName = $(this).html()
									if (NoStoryName == '') {$(this).html('TBA')}
									if (NoStoryName == ' ') {$(this).html('TBA')}
								})
								
								console.log('DataTable loaded.')
								$('.itemtable').DataTable({
									"order": []
								});
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
				$http.get('/json/StoryLineInfo.json').success (function(data){
				$scope.ItemVariable = data;
					$http.get('/json/StoryGoalInfo.json').success (function(data2){
					$scope.StoryGoalInfo = data2;})
					$http.get('/json/TitleInfo.json').success (function(data3){
					$scope.TitleInfo = data3;})
					$http.get('/json/SkillInfo.json').success (function(data4){
					$scope.SkillInfo = data4;})
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
				 TitleNumber = $('.titlenumber').attr('value')
				 $('.titleidinput').val(parseInt(TitleNumber)).trigger('input')
				 SkillNumber = $('.skillclass').attr('value')
				 $('.skillidinput').val(SkillNumber).trigger('input')
				 
				 $('.storycategory').each(function(){
					 StoryType = $(this).attr('value')
					 if (StoryType == "CONTENTS") {$(this).html("Content Story")}
					if (StoryType == "EQUIP") {$(this).html("Equipment Story")}
					if (StoryType == "ERROR") {$(this).html("Uncategorized")}
					if (StoryType == "EVENT") {$(this).html("Event Story")}
					if (StoryType == "MAIN") {$(this).html("Main Story")}
					if (StoryType == "MAINSTREAM") {$(this).html("Main Stream: Season 1")}
					if (StoryType == "MAINSTREAM_INTRO") {$(this).html("Main Stream: Prologue")}
					if (StoryType == "MAINSTREAM_S2") {$(this).html("Main Stream: Season 2")}
					if (StoryType == "MAINSTREAM_S3") {$(this).html("Main Stream: Season 3")}
					if (StoryType == "REPEAT") {$(this).html("Repeat Story")}
					if (StoryType == "SKILL") {$(this).html("Skill Story")}
					if (StoryType == "SUB") {$(this).html("Sub Story: Season 1")}
					if (StoryType == "SUB_S2") {$(this).html("Sub Story: Season 2")}
					if (StoryType == "SUB_S3") {$(this).html("Sub Story: Season 3")}
					if (StoryType == "WATCHING") {$(this).html("Story of Interest")}
				 } )
				  $('.storystage').each(function(){
					 StoryStage = $(this).attr('value')
					 if (StoryStage == "COLHEN") {$(this).html("Colhen")}
					if (StoryStage == "DS") {$(this).html("Unknown Area")}
					if (StoryStage == "MORVAN") {$(this).html("Malina")}
					if (StoryStage == "ROCHEST") {$(this).html("Rocheste")}
					if (StoryStage == "STAGE1") {$(this).html("Perilous Ruins")}
					if (StoryStage == "STAGE1_1") {$(this).html("Ruins of Sanctity")}
					if (StoryStage == "STAGE10") {$(this).html("Heide")}
					if (StoryStage == "STAGE2") {$(this).html("Hoarfrost Hollow")}
					if (StoryStage == "STAGE2_1") {$(this).html("Hoarfrost Depths")}
					if (StoryStage == "STAGE20") {$(this).html("Crescent Moon Island")}
					if (StoryStage == "STAGE21") {$(this).html("Ship Graveyard")}
					if (StoryStage == "STAGE22") {$(this).html("Twilight Desert")}
					if (StoryStage == "STAGE23") {$(this).html("Misty Summit")}
					if (StoryStage == "STAGE24") {$(this).html("Annwyn")}
					if (StoryStage == "STAGE3") {$(this).html("Ainle, Hilder Forest Ruins")}
					if (StoryStage == "STAGE30") {$(this).html("Ben Chenner Entrance")}
					if (StoryStage == "STAGE32") {$(this).html("Ben Chenner Slopes")}
					if (StoryStage == "STAGE33") {$(this).html("Ben Chenner Summit")}
					if (StoryStage == "STAGE4_0") {$(this).html("Prairie, Entrance")}
					if (StoryStage == "STAGE5") {$(this).html("Hoarfrost Depths")}
					if (StoryStage == "STAGE6") {$(this).html("Fomorian Base")}
					if (StoryStage == "STAGE7") {$(this).html("Sewers")}
					if (StoryStage == "STAGE8_1") {$(this).html("Ortel Castle")}
					if (StoryStage == "STAGE8_2") {$(this).html("The Catacombs")}
					if (StoryStage == "STAGE9") {$(this).html("Albey Ruins")}
					if (StoryStage == "TOWN") {$(this).html("Town")}
				  } )
				  
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
									$('.storygoal').show()
								})
							})	
				
					var menu = "/js/titlename.js";
								$.getScript( menu, function() {
									ChangeTitles()
								})
				var menu = "/js/skillname.js";
								$.getScript( menu, function() {
									ReplaceSkillName()
								})
				

					var menu = "/js/menu.js";
							$.getScript( menu, function() {
								MenuList()
							})	
					$(".mainstoryframe").mCustomScrollbar({
						axis:"y",
						theme:"dark",
						setHeight: 367,
						keyboard:{ enable: true },
						scrollButtons:{ enable: true }
					});
					$('#tabs').tabs();
					DISQUS.reset({
					  reload: true,
					  config: function () {  
						this.page.identifier = $('.storyname').attr('value');  
						this.page.url = window.location.href;
					  }
					});
					$('.scopecontain').show()
					
}, 200);
			}); 
		}]
);
