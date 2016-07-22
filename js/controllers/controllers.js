var ItemControllers = angular.module("ItemControllers", []);

ItemControllers.controller("ListController", ['$scope','$http', 
	function($scope, $http)
		{    
				$http.get('/json/ItemClassInfoV2.json').success (function(data){
				$scope.ItemVariable = data;

				setTimeout(function(){
						WhatIsTheURL = window.location.pathname
						if (WhatIsTheURL == '/search.html') {$('.mainiteminput').val(search).trigger('input');}
						
						RemoveSearch = function(){$('#searchmenu').children().children().first().attr('value','')}
						$('#searchmenu').click(RemoveSearch)						
						
						$('.weight').each(function(){
								weight = parseInt($(this).attr('value'));
								updateweight = weight.toFixed(0);
								$(this).children().html(updateweight);
						})
						$('.number').each(function(){
							grab = parseInt($(this).html())
							if (grab > 0) {
								convert = grab.toLocaleString()
								$(this).html(convert)
							} else {$(this).html('')}
						})
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
						checkclasses = $(this).html()
							if (checkclasses != '2047') {
							$(this).parent().show();
							if (checkclasses == '1') {$(this).html('Lann')}
							if (checkclasses == '2') {$(this).html('Fiona')}
							if (checkclasses == '33') {$(this).html('Lann, Vella')}
							if (checkclasses == '4') {$(this).html('Evie')}
							if (checkclasses == '8') {$(this).html('Karok')}
							if (checkclasses == '16') {$(this).html('Kai')}
							if (checkclasses == '64') {$(this).html('Hurk')}
							if (checkclasses == '128') {$(this).html('Lynn')}
							if (checkclasses == '256') {$(this).html('Arisha')}
							if (checkclasses == '512') {$(this).html('Sylas')}
							if (checkclasses == '1185') {$(this).html('Lann, Vella, Lynn')}
							if (checkclasses == '516') {$(this).html('Evie, Sylas')}
							if (checkclasses == '260') {$(this).html('Evie, Arisha')}
							if (checkclasses == '72') {$(this).html('Karok, Hurk')}
							if (checkclasses == '772') {$(this).html('Evie, Arisha, Sylas')}
							if (checkclasses == '1024') {$(this).html('Delia')}
							if (checkclasses == '1446') {$(this).html('Fiona, Evie, Vella, Lynn, Arisha, Delia')}
							if (checkclasses == '601') {$(this).html('Lann, Karok, Kai, Hurk, Sylas')}
							if (checkclasses == '1975') {$(this).html('Lann, Fiona, Evie, Kai, Vella, Lynn, Arisha, Sylas, Delia')}
							if (checkclasses == '1983') {$(this).html('Lann, Fiona, Evie, Karok, Kai, Vella, Lynn, Arisha, Sylas, Delia')}
							if (checkclasses == '529') {$(this).html('Lann, Kai, Sylas')}
							if (checkclasses == '1518') {$(this).html('Fiona, Evie, Karok, Vella, Hurk, Lynn, Arisha, Delia')}
						} else {
							$(this).parent().hide();
						}
					})
					$('.checkreqlvl').each(function(){
						checklvl = $(this).html()
							if (checklvl > '1') {
							$(this).parent().show();
						} else {
							$(this).parent().hide();
						}
					})
					$('.checkskillreq').each(function(){
						checkskill = $(this).attr('value')
							if (checkskill != "") {
							$(this).parent().show();
						} else {
							$(this).parent().hide();
						}
					})
					$('.trade').each(
						function(){
							checktrade = $(this).attr('value')
							if (checktrade == 'DEFAULT') {
								$(this).html('This item cannot be traded.')
								$(this).css({
									'color':'#c25631',
									'background-image':'url(http://i.imgur.com/6zZAs1q.png)'
								})
							}
							if (checktrade == 'STORY') {
								$(this).html('Story items cannot be traded.')
								$(this).css({
									'color':'#c25631',
									'background-image':'url(http://i.imgur.com/6zZAs1q.png)'
								})
							}
							if (checktrade == 'PRACTICE') {
								$(this).html('Practice items cannot be traded.')
								$(this).css({
									'color':'#c25631',
									'background-image':'url(http://i.imgur.com/6zZAs1q.png)'
								})
							}
							if (checktrade == 'EVENT') {
								$(this).html('Event items cannot be traded.')
								$(this).css({
									'color':'#c25631',
									'background-image':'url(http://i.imgur.com/6zZAs1q.png)'
								})
							} 
							if (checktrade == 'CASH') {
								$(this).html('Cash items cannot be traded.')
								$(this).css({
									'color':'#c25631',
									'background-image':'url(http://i.imgur.com/6zZAs1q.png)'
								})
							} 
							if (checktrade == 'ACCOUNTONLY') {
								$(this).html('You can mail items between characters on the same ID.')
								$(this).css({
									'color':'#c25631',
									'background-image':'url(http://i.imgur.com/6zZAs1q.png)'
								})
							} 
							if (checktrade == '') {
								$(this).html('Can use all forms of trade')
							} 
						}
					)
					$('.skillrank').each(function(){
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
					$('.itemrarity').each(function(){
						ItemRarity = $(this).attr('value')
						if (ItemRarity == 0) {$(this).prepend('Regular')}
						if (ItemRarity == 1) {$(this).prepend('Regular')}
						if (ItemRarity == 2) {$(this).prepend('Beginner')}
						if (ItemRarity == 3) {$(this).prepend('Fine')}
						if (ItemRarity == 4) {$(this).prepend('Superior')}
						if (ItemRarity == 5) {$(this).prepend('Rare')}
					} )
					$('.checkskillreq').each(function(){
						SkillReplace = $(this).attr('value')
						if (SkillReplace == 'skill_lethita_dualsword_mastery') {$(this).html('Twin Sword Mastery')}
						if (SkillReplace == 'skill_lethita_dualspear_mastery') {$(this).html('Twin Spear Mastery')}
						if (SkillReplace == 'skill_fiona_longhammer_mastery') {$(this).html('Long Hammer Mastery')}
						if (SkillReplace == 'skill_fiona_longsword_mastery') {$(this).html('Longsword Mastery')}
						if (SkillReplace == 'skill_fiona_largeshield_mastery') {$(this).html('Large Shield Mastery')}
						if (SkillReplace == 'skill_fiona_shield_mastery') {$(this).html('Shield Mastery')}
						if (SkillReplace == 'skill_evy_staff_mastery') {$(this).html('Staff Mastery')}
						if (SkillReplace == 'skill_evy_scythe_mastery') {$(this).html('Battle Scythe Mastery')}
						if (SkillReplace == 'skill_kalok_battlepillar_mastery') {$(this).html('Pillar Mastery')}
						if (SkillReplace == 'skill_kalok_blaster_mastery') {$(this).html('Cestus Mastery')}
						if (SkillReplace == 'skill_kay_bow_mastery') {$(this).html('Bow Mastery')}
						if (SkillReplace == 'skill_kay_crossgun_mastery') {$(this).html('Cross Gun Mastery')}
						if (SkillReplace == 'skill_vella_dualblade_mastery') {$(this).html('Twin Chainblade Mastery')}
						if (SkillReplace == 'skill_hurk_greatsword_mastery') {$(this).html('Greatsword Mastery')}
						if (SkillReplace == 'skill_lynn_battleglaive_mastery') {$(this).html('Glaive Mastery')}
						if (SkillReplace == 'skill_arisha_longblade_mastery') {$(this).html('Spellsword Mastery')}
						if (SkillReplace == 'skill_hagie_phantomdagger_mastery') {$(this).html('Phantom Dagger Mastery')}
						if (SkillReplace == 'skill_delia_bastard_mastery') {$(this).html('Bastard Sword Mastery')}
					} )
					$('.TradeCategory').each(function(){
						TradeCategorySub = $(this).attr('value')
						if (TradeCategorySub == 'ACCESSORY') {$(this).html('Accessory')}
						if (TradeCategorySub == 'AVATAR') {$(this).html('Outfit')}
						if (TradeCategorySub == 'CLOTH') {$(this).html('Cloth Armor')}
						if (TradeCategorySub == 'COMBINE_PART') {$(this).html('Composite Material')}
						if (TradeCategorySub == 'EQUIPMENT') {$(this).html('Equipment')}
						if (TradeCategorySub == 'ETC') {$(this).html('Etc.')}
						if (TradeCategorySub == 'EVENT') {$(this).html('Event')}
						if (TradeCategorySub == 'GOODS') {$(this).html('Consumable')}
						if (TradeCategorySub == 'HEAVYARMOR') {$(this).html('Heavy Armor')}
						if (TradeCategorySub == 'LIGHTARMOR') {$(this).html('Light Armor')}
						if (TradeCategorySub == 'MATERIAL') {$(this).html('Material')}
						if (TradeCategorySub == 'PLATEARMOR') {$(this).html('Plate Armor')}
						if (TradeCategorySub == 'QUEST') {$(this).html('Battle')}
						if (TradeCategorySub == 'REAR') {$(this).html('Rear')}
						if (TradeCategorySub == 'TAIL') {$(this).html('Tail')}
						if (TradeCategorySub == 'TIRCOIN') {$(this).html('Tir Coin')}
						if (TradeCategorySub == 'WEAPON') {$(this).html('Weapon')}
					} )
					$('.TradeCategorySub').each(function(){
						TradeCategorySub = $(this).attr('value')
						if (TradeCategorySub == 'ACCESSORY_ETC') {$(this).html('Other')}
						if (TradeCategorySub == 'ARTIFACT') {$(this).html('Artifact')}
						if (TradeCategorySub == 'AVATAR_BOOTS') {$(this).html('Feet Armor')}
						if (TradeCategorySub == 'AVATAR_GLOVES') {$(this).html('Hand Armor')}
						if (TradeCategorySub == 'AVATAR_HELM') {$(this).html('Head Armor')}
						if (TradeCategorySub == 'AVATAR_PANTS') {$(this).html('Leg Armor')}
						if (TradeCategorySub == 'AVATAR_TUNIC') {$(this).html('Chest Armor')}
						if (TradeCategorySub == 'BASTARDSWORD') {$(this).html('Bastard Sword')}
						if (TradeCategorySub == 'BATTLEGLAIVE') {$(this).html('Battle Glaive')}
						if (TradeCategorySub == 'BELT') {$(this).html('Belt')}
						if (TradeCategorySub == 'BLASTER') {$(this).html('Cestus')}
						if (TradeCategorySub == 'BOW') {$(this).html('Bow')}
						if (TradeCategorySub == 'CASTLET') {$(this).html('Focus')}
						if (TradeCategorySub == 'CLOTH_BOOTS') {$(this).html('Boots')}
						if (TradeCategorySub == 'CLOTH_GLOVES') {$(this).html('Gloves')}
						if (TradeCategorySub == 'CLOTH_HELM') {$(this).html('Helm')}
						if (TradeCategorySub == 'CLOTH_PANTS') {$(this).html('Pants')}
						if (TradeCategorySub == 'CLOTH_TUNIC') {$(this).html('Tunic')}
						if (TradeCategorySub == 'COMBINE_PART_ARMOR') {$(this).html('Armor')}
						if (TradeCategorySub == 'COMBINE_PART_WEAPON') {$(this).html('Weapon')}
						if (TradeCategorySub == 'COOKING') {$(this).html('Cooking')}
						if (TradeCategorySub == 'CROSSGUN') {$(this).html('Cross Gun')}
						if (TradeCategorySub == 'CUSTOMIZE') {$(this).html('Customization')}
						if (TradeCategorySub == 'DUALBLADE') {$(this).html('Twin Chainblades')}
						if (TradeCategorySub == 'DUALSPEAR') {$(this).html('Twin Spears')}
						if (TradeCategorySub == 'DUALSWORD') {$(this).html('Twin Swords')}
						if (TradeCategorySub == 'DYE_AVATAR') {$(this).html('Avatar Dye Ampoule')}
						if (TradeCategorySub == 'DYE_EQUIP') {$(this).html('Clodagh&apos;s Dye Ampoule')}
						if (TradeCategorySub == 'ETC_ETC') {$(this).html('Other')}
						if (TradeCategorySub == 'EVENT_ETC') {$(this).html('Event')}
						if (TradeCategorySub == 'FEATHER') {$(this).html('Feather')}
						if (TradeCategorySub == 'GEMSTONE') {$(this).html('Bracelet Gem')}
						if (TradeCategorySub == 'GOODS_ETC') {$(this).html('Etc.')}
						if (TradeCategorySub == 'GREATSWORD') {$(this).html('Greatsword')}
						if (TradeCategorySub == 'HAMMER') {$(this).html('Long Hammer')}
						if (TradeCategorySub == 'HEAVYARMOR_BOOTS') {$(this).html('Boots')}
						if (TradeCategorySub == 'HEAVYARMOR_GLOVES') {$(this).html('Gloves')}
						if (TradeCategorySub == 'HEAVYARMOR_HELM') {$(this).html('Helm')}
						if (TradeCategorySub == 'HEAVYARMOR_PANTS') {$(this).html('Pants')}
						if (TradeCategorySub == 'HEAVYARMOR_TUNIC') {$(this).html('Tunic')}
						if (TradeCategorySub == 'JEWELLERY') {$(this).html('Jewelry')}
						if (TradeCategorySub == 'KEYITEM') {$(this).html('Story')}
						if (TradeCategorySub == 'LARGESHIELD') {$(this).html('Giant Shield')}
						if (TradeCategorySub == 'LIGHTARMOR_BOOTS') {$(this).html('Boots')}
						if (TradeCategorySub == 'LIGHTARMOR_GLOVES') {$(this).html('Gloves')}
						if (TradeCategorySub == 'LIGHTARMOR_HELM') {$(this).html('Helm')}
						if (TradeCategorySub == 'LIGHTARMOR_PANTS') {$(this).html('Pants')}
						if (TradeCategorySub == 'LIGHTARMOR_TUNIC') {$(this).html('Tunic')}
						if (TradeCategorySub == 'LONGBLADE') {$(this).html('Spellsword')}
						if (TradeCategorySub == 'LONGSWORD') {$(this).html('Longsword')}
						if (TradeCategorySub == 'MANA_ERG') {$(this).html('Erg Crystal')}
						if (TradeCategorySub == 'MATERIAL_CLOTH') {$(this).html('Cloth')}
						if (TradeCategorySub == 'MATERIAL_ENCHANT') {$(this).html('Enchant')}
						if (TradeCategorySub == 'MATERIAL_ENHANCE') {$(this).html('Enhance')}
						if (TradeCategorySub == 'MATERIAL_ETC') {$(this).html('Etc.')}
						if (TradeCategorySub == 'MATERIAL_LEATHER') {$(this).html('Leather')}
						if (TradeCategorySub == 'MATERIAL_ORE') {$(this).html('Ore')}
						if (TradeCategorySub == 'MATERIAL_SKILLENHANCE') {$(this).html('Skill Awakening Material')}
						if (TradeCategorySub == 'MATERIAL_SPECIAL') {$(this).html('Special Material')}
						if (TradeCategorySub == 'MATERIAL_SPIRITINJECTION') {$(this).html('Power Infusion')}
						if (TradeCategorySub == 'MATERIAL_SUB') {$(this).html('Secondary Material')}
						if (TradeCategorySub == 'NECKLACE') {$(this).html('Necklace')}
						if (TradeCategorySub == 'PHANTOMDAGGER') {$(this).html('Phantom Dagger')}
						if (TradeCategorySub == 'PILLAR') {$(this).html('Pillar')}
						if (TradeCategorySub == 'PLATEARMOR_BOOTS') {$(this).html('Boots')}
						if (TradeCategorySub == 'PLATEARMOR_GLOVES') {$(this).html('Gloves')}
						if (TradeCategorySub == 'PLATEARMOR_HELM') {$(this).html('Helm')}
						if (TradeCategorySub == 'PLATEARMOR_PANTS') {$(this).html('Pants')}
						if (TradeCategorySub == 'PLATEARMOR_TUNIC') {$(this).html('Tunic')}
						if (TradeCategorySub == 'POTION') {$(this).html('Potion')}
						if (TradeCategorySub == 'REAR') {$(this).html('Rear')}
						if (TradeCategorySub == 'REAR_WING') {$(this).html('Wings')}
						if (TradeCategorySub == 'RING') {$(this).html('Ring')}
						if (TradeCategorySub == 'SCYTHE') {$(this).html('Battle Scythe')}
						if (TradeCategorySub == 'SHAREENABLE') {$(this).html('Cash Consumable')}
						if (TradeCategorySub == 'SHAREENABLE_TRADE') {$(this).html('Cash Consumable')}
						if (TradeCategorySub == 'SHIELD') {$(this).html('Shield')}
						if (TradeCategorySub == 'SPECIAL_POTION') {$(this).html('Special Potion')}
						if (TradeCategorySub == 'SPELLBOOK') {$(this).html('Spell Book')}
						if (TradeCategorySub == 'STAFF') {$(this).html('Staff')}
						if (TradeCategorySub == 'SUBWEAPON') {$(this).html('Secondary Weapon')}
						if (TradeCategorySub == 'TAIL') {$(this).html('Tail')}
						if (TradeCategorySub == 'TIRCOIN_ETC') {$(this).html('Tir Coin')}
						if (TradeCategorySub == 'TROPHY') {$(this).html('Loot')}
					})
					$('.stat').each(function() {
							doihide = $(this).attr("value");
							if (doihide != 0) {
								$(this).show();
							} else {$(this).hide();}
						});
					$('.tagname').each(function(){
						tagpopup = $(this).attr('title');
						replacetag = tagpopup.replace(/_/g, ' ');
						$(this).attr('title',replacetag)
					});
					$('.weight').each(function() {
							doihide = $(this).attr("value");
							if (doihide != "") {
								$(this).show();
							} else {$(this).hide();}
						});
					$('.eventcheck').each(function(){
						IsThisEvent = $(this).attr('value')
						if (IsThisEvent == 'DEFAULT') {
								$(this).html('No')
						}
					})
					$('.desc').each(
						function(){
							ValueofDesc = $(this).attr('value')
							TransformedDescClass = ValueofDesc.replace(/ /g,'_')
							$(this).addClass('ItemDesc_'+TransformedDescClass)
						}
					)
				var url = "/js/descriptionsV2.js";
							$.getScript( url, function() {
								RunningDescriptions()
							})
				var menu = "/js/menu.js";
							$.getScript( menu, function() {
								MenuList()
							})	
	
}, 200);
			}); 
		}]
);

ItemControllers.controller("DetailsController", ['$scope','$http','$routeParams','$filter',
	 function($scope, $http, $routeParams, $filter)
		{    
				$http.get('/json/ItemClassInfoV2.json').success (function(data){
				$scope.ItemVariable = data;
					$http.get('/json/RecipeMaterialInfo.json').success (function(data3){
					$scope.RecipeMaterialInfo = data3;
					})
					$http.get('/json/ManufactureMaterialInfo.json').success (function(data2){
					$scope.ManufactureMaterialInfo = data2;
					})
					$http.get('/json/ManufactureRecipeInfo.json').success (function(data4){
					$scope.ManufactureRecipeInfo = data4;
					})
				$scope.whichItem = $routeParams.ItemID;
				$scope.keyToDisplay = 'ItemClass';
				setTimeout(function(){

						
					WhatIsTheURL = window.location.pathname
					RemoveSearch = function(){$('#searchmenu').children().children().first().attr('value','')}
					$('#searchmenu').click(RemoveSearch)
					weight = parseInt($('#weight').attr('value'));
					updateweight = weight.toFixed(0);
					$('#changeweight').html(updateweight);
					replacestart = $('#valueitem').attr('value');
					ItemClass = $('#valueitem').attr('value');
					$('title').html(replacestart + ' &bull; VinDB');
					finalreplace = replacestart.replace(/ /g,"_");
					$('.iteminput').val(finalreplace).trigger('input');
					$('.mainiteminput').val(ItemClass).trigger('input');
					ThisIsStupod = $('#mainitem').attr('value')
					$scope.mainitemclass = function (mat) { 	return mat.ItemClass === ThisIsStupod	};
								
				$('#mainitem').each(function(){
								/*ItemClassValue = $(this).attr('value')
							$('.mainitemclass').val(ItemClassValue).trigger('input')
					*/
							$('.UsedInValue').each(function(){
							UsedIn = $(this).attr('value')
							UsedIn = UsedIn.replace('RECIPE_','')
								} ) 
							$scope.usedin = function (item) { 
								return item.ItemClass === UsedIn	};
					})
					LoadMats = function(){
						$('.RecipeID').each(function(){
							NPCMatID = $(this).attr('value')
							$('.NPC'+NPCMatID).val(NPCMatID).trigger('input');
						})
					}
					$('.itemdetail').each(function(){
							RecipeID = $(this).attr('value')
							$('.Recipe'+RecipeID).val('recipe_'+RecipeID).trigger('input');
							$('.ExpertRecipe'+RecipeID).val(RecipeID).trigger('input');
							$('.ExpertType'+RecipeID).val(RecipeID).trigger('input');
							$('.ExpertTypeTailor'+RecipeID).val('sewing_'+RecipeID).trigger('input');
							$('.ReqProf'+RecipeID).val(RecipeID).trigger('input');
							LoadMats()
						})
					$('.ExpertID').each(function(){
							ExpertMatID = $(this).attr('value')
							$('.Expert'+ExpertMatID).val(ExpertMatID).trigger('input');
							$('.ExpertTailor'+ExpertMatID).val('sewing_'+ExpertMatID).trigger('input');
						})
					
					/* CONVERT EXPIRY TIME */
					ConvertSeconds = $('.converttime').attr('value')
					if (ConvertSeconds == '') {
						$('.converttime').parent().remove()
					} else {
						function sformat(s) {
								  var fm = [
										Math.floor(s / 60 / 60 / 24), // DAYS
										Math.floor(s / 60 / 60) % 24, // HOURS
										Math.floor(s / 60) % 60, // MINUTES
										s % 60 // SECONDS
								  ];
								  return $.map(fm, function(v, i) { return ((v < 10) ? '0' : '') + v; }).join(':');
							}
						   ConvertSeconds = $('.converttime').attr('value')
						   ConTime = sformat( ConvertSeconds );  
						   ConTime = ConTime.replace(':',' day(s) ')
						   ConTime = ConTime.replace(':',' hr(s) ')
						   ConTime = ConTime.replace(':',' min(s) ')
						   ConTime = ConTime.replace('00 min(s) 00','')
							$('.converttime').html(ConTime)
					}
					
					$('#classresvalue').each(
					function(){
					checkclasses = $('#classresvalue').html();
					if (checkclasses != '2047') {
						$('#classres').show();
					} 
					if (checkclasses == '1') {$(this).html('Lann')}
							if (checkclasses == '2') {$(this).html('Fiona')}
							if (checkclasses == '33') {$(this).html('Lann, Vella')}
							if (checkclasses == '4') {$(this).html('Evie')}
							if (checkclasses == '8') {$(this).html('Karok')}
							if (checkclasses == '16') {$(this).html('Kai')}
							if (checkclasses == '64') {$(this).html('Hurk')}
							if (checkclasses == '128') {$(this).html('Lynn')}
							if (checkclasses == '256') {$(this).html('Arisha')}
							if (checkclasses == '512') {$(this).html('Sylas')}
							if (checkclasses == '1185') {$(this).html('Lann, Vella, Lynn')}
							if (checkclasses == '516') {$(this).html('Evie, Sylas')}
							if (checkclasses == '260') {$(this).html('Evie, Arisha')}
							if (checkclasses == '72') {$(this).html('Karok, Hurk')}
							if (checkclasses == '772') {$(this).html('Evie, Arisha, Sylas')}
							if (checkclasses == '1024') {$(this).html('Delia')}
							if (checkclasses == '1446') {$(this).html('Fiona, Evie, Vella, Lynn, Arisha, Delia')}
							if (checkclasses == '601') {$(this).html('Lann, Karok, Kai, Hurk, Sylas')}
							if (checkclasses == '1975') {$(this).html('Lann, Fiona, Evie, Kai, Vella, Lynn, Arisha, Sylas, Delia')}
							if (checkclasses == '1983') {$(this).html('Lann, Fiona, Evie, Karok, Kai, Vella, Lynn, Arisha, Sylas, Delia')}
							if (checkclasses == '529') {$(this).html('Lann, Kai, Sylas')}
							if (checkclasses == '1518') {$(this).html('Fiona, Evie, Karok, Vella, Hurk, Lynn, Arisha, Delia')}
					})
					checklvl = $('#checkreqlvl').html();
					if (checklvl > '1') {
						$('#requlvl').show();
					}
					checkmaxdura = $('#checkmaxdura').html();
					if (checkmaxdura != "") {
						$('#maxdura').show();
					}
					checkarmorhp = $('#checkarmorhp').html();
					if (checkarmorhp != "") {
						$('#armorhp').show();
					}
					$('.tagname').each(function(){
							console.log('I swapped the underscores for you.')
							tagpopup = $(this).attr('title');
							replacetag = tagpopup.replace(/_/g, ' ');
							replaceforlink = tagpopup.replace(/_/g, '+');
							$(this).attr('title',replacetag)
							$(this).parent().attr('href','http://db.vindictusinn.com/search.html?find='+replaceforlink)
						});
					$('.desc').each(function(){
					hidedesc = $(this).html();
						if (hidedesc != "") {
						$(this).css({'display':'block'});
						GetReadytoReplaceDesc = $(this).html();
						ReplacedDesc = GetReadytoReplaceDesc.replace(/\\n/g, "<br/>")
						$(this).html(ReplacedDesc)
						}
					})
					$('.number').each(function(){
							grab = parseInt($(this).html())
							convert = grab.toLocaleString()
							$(this).html(convert)
						})
					$('.NPCCraft').each(function(){
						IsThereANPC = $(this).html()
						if (IsThereANPC == '') {
							$(this).parent().hide()
						}
					})
					$('.fee').each(function(){
						IsThereGold = $(this).html()
					})
					$('.manufacture').each(function(){
						IsThereManuID = $(this).html()
						
					})
					$('.weight').each(function(){
								weight = parseInt($(this).attr('value'));
								updateweight = weight.toFixed(0);
								$(this).children().html(updateweight);
						})
						
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
						checkclasses = $(this).html()
							if (checkclasses != '2047') {
							$(this).parent().show();
						} else {
							$(this).parent().hide();
						}
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
					$('.checkreqlvl').each(function(){
						checklvl = $(this).html()
							if (checklvl > '1') {
							$(this).parent().show();
						} else {
							$(this).parent().hide();
						}
					})
					$('.checkskillreq').each(function(){
						checkskill = $(this).attr('value')
							if (checkskill != "") {
							$(this).parent().show();
						} else {
							$(this).parent().hide();
						}
					})
					$('.skillrank').each(function(){
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
					$('.itemrarity').each(function(){
						ItemRarity = $(this).attr('value')
						if (ItemRarity == 0) {$(this).prepend('Regular')}
						if (ItemRarity == 1) {$(this).prepend('Regular')}
						if (ItemRarity == 2) {$(this).prepend('Beginner')}
						if (ItemRarity == 3) {$(this).prepend('Fine')}
						if (ItemRarity == 4) {$(this).prepend('Superior')}
						if (ItemRarity == 5) {$(this).prepend('Rare')}
					} )
					$('.ExpertType').each(function(){
						ExpertType = $(this).attr('value')
						if (ExpertType == 'armor') {$(this).html('Armorsmithing')}
						if (ExpertType == 'cooking') {$(this).html('Cooking')}
						if (ExpertType == 'metal_weapon') {$(this).html('Weaponsmithing')}
						if (ExpertType == 'sewing') {$(this).html('Tailoring')}
						if (ExpertType == 'workmanship') {$(this).html('Goldsmithing')}
					} )
					$('.checkskillreq').each(function(){
						SkillReplace = $(this).attr('value')
						if (SkillReplace == 'skill_lethita_dualsword_mastery') {$(this).html('Twin Sword Mastery')}
						if (SkillReplace == 'skill_lethita_dualspear_mastery') {$(this).html('Twin Spear Mastery')}
						if (SkillReplace == 'skill_fiona_longhammer_mastery') {$(this).html('Long Hammer Mastery')}
						if (SkillReplace == 'skill_fiona_longsword_mastery') {$(this).html('Longsword Mastery')}
						if (SkillReplace == 'skill_fiona_largeshield_mastery') {$(this).html('Large Shield Mastery')}
						if (SkillReplace == 'skill_fiona_shield_mastery') {$(this).html('Shield Mastery')}
						if (SkillReplace == 'skill_evy_staff_mastery') {$(this).html('Staff Mastery')}
						if (SkillReplace == 'skill_evy_scythe_mastery') {$(this).html('Battle Scythe Mastery')}
						if (SkillReplace == 'skill_kalok_battlepillar_mastery') {$(this).html('Pillar Mastery')}
						if (SkillReplace == 'skill_kalok_blaster_mastery') {$(this).html('Cestus Mastery')}
						if (SkillReplace == 'skill_kay_bow_mastery') {$(this).html('Bow Mastery')}
						if (SkillReplace == 'skill_kay_crossgun_mastery') {$(this).html('Cross Gun Mastery')}
						if (SkillReplace == 'skill_vella_dualblade_mastery') {$(this).html('Twin Chainblade Mastery')}
						if (SkillReplace == 'skill_hurk_greatsword_mastery') {$(this).html('Greatsword Mastery')}
						if (SkillReplace == 'skill_lynn_battleglaive_mastery') {$(this).html('Glaive Mastery')}
						if (SkillReplace == 'skill_arisha_longblade_mastery') {$(this).html('Spellsword Mastery')}
						if (SkillReplace == 'skill_hagie_phantomdagger_mastery') {$(this).html('Phantom Dagger Mastery')}
						if (SkillReplace == 'skill_delia_bastard_mastery') {$(this).html('Bastard Sword Mastery')}
					} )
					$('.TradeCategory').each(function(){
						TradeCategorySub = $(this).attr('value')
						if (TradeCategorySub == 'ACCESSORY') {$(this).html('Accessory')}
						if (TradeCategorySub == 'AVATAR') {$(this).html('Outfit')}
						if (TradeCategorySub == 'CLOTH') {$(this).html('Cloth Armor')}
						if (TradeCategorySub == 'COMBINE_PART') {$(this).html('Composite Material')}
						if (TradeCategorySub == 'EQUIPMENT') {$(this).html('Equipment')}
						if (TradeCategorySub == 'ETC') {$(this).html('Etc.')}
						if (TradeCategorySub == 'EVENT') {$(this).html('Event')}
						if (TradeCategorySub == 'GOODS') {$(this).html('Consumable')}
						if (TradeCategorySub == 'HEAVYARMOR') {$(this).html('Heavy Armor')}
						if (TradeCategorySub == 'LIGHTARMOR') {$(this).html('Light Armor')}
						if (TradeCategorySub == 'MATERIAL') {$(this).html('Material')}
						if (TradeCategorySub == 'PLATEARMOR') {$(this).html('Plate Armor')}
						if (TradeCategorySub == 'QUEST') {$(this).html('Battle')}
						if (TradeCategorySub == 'REAR') {$(this).html('Rear')}
						if (TradeCategorySub == 'TAIL') {$(this).html('Tail')}
						if (TradeCategorySub == 'TIRCOIN') {$(this).html('Tir Coin')}
						if (TradeCategorySub == 'WEAPON') {$(this).html('Weapon')}
					} )
					$('.TradeCategorySub').each(function(){
						TradeCategorySub = $(this).attr('value')
						if (TradeCategorySub == 'ACCESSORY_ETC') {$(this).html('Other')}
						if (TradeCategorySub == 'ARTIFACT') {$(this).html('Artifact')}
						if (TradeCategorySub == 'AVATAR_BOOTS') {$(this).html('Feet Armor')}
						if (TradeCategorySub == 'AVATAR_GLOVES') {$(this).html('Hand Armor')}
						if (TradeCategorySub == 'AVATAR_HELM') {$(this).html('Head Armor')}
						if (TradeCategorySub == 'AVATAR_PANTS') {$(this).html('Leg Armor')}
						if (TradeCategorySub == 'AVATAR_TUNIC') {$(this).html('Chest Armor')}
						if (TradeCategorySub == 'BASTARDSWORD') {$(this).html('Bastard Sword')}
						if (TradeCategorySub == 'BATTLEGLAIVE') {$(this).html('Battle Glaive')}
						if (TradeCategorySub == 'BELT') {$(this).html('Belt')}
						if (TradeCategorySub == 'BLASTER') {$(this).html('Cestus')}
						if (TradeCategorySub == 'BOW') {$(this).html('Bow')}
						if (TradeCategorySub == 'CASTLET') {$(this).html('Focus')}
						if (TradeCategorySub == 'CLOTH_BOOTS') {$(this).html('Boots')}
						if (TradeCategorySub == 'CLOTH_GLOVES') {$(this).html('Gloves')}
						if (TradeCategorySub == 'CLOTH_HELM') {$(this).html('Helm')}
						if (TradeCategorySub == 'CLOTH_PANTS') {$(this).html('Pants')}
						if (TradeCategorySub == 'CLOTH_TUNIC') {$(this).html('Tunic')}
						if (TradeCategorySub == 'COMBINE_PART_ARMOR') {$(this).html('Armor')}
						if (TradeCategorySub == 'COMBINE_PART_WEAPON') {$(this).html('Weapon')}
						if (TradeCategorySub == 'COOKING') {$(this).html('Cooking')}
						if (TradeCategorySub == 'CROSSGUN') {$(this).html('Cross Gun')}
						if (TradeCategorySub == 'CUSTOMIZE') {$(this).html('Customization')}
						if (TradeCategorySub == 'DUALBLADE') {$(this).html('Twin Chainblades')}
						if (TradeCategorySub == 'DUALSPEAR') {$(this).html('Twin Spears')}
						if (TradeCategorySub == 'DUALSWORD') {$(this).html('Twin Swords')}
						if (TradeCategorySub == 'DYE_AVATAR') {$(this).html('Avatar Dye Ampoule')}
						if (TradeCategorySub == 'DYE_EQUIP') {$(this).html('Clodagh&apos;s Dye Ampoule')}
						if (TradeCategorySub == 'ETC_ETC') {$(this).html('Other')}
						if (TradeCategorySub == 'EVENT_ETC') {$(this).html('Event')}
						if (TradeCategorySub == 'FEATHER') {$(this).html('Feather')}
						if (TradeCategorySub == 'GEMSTONE') {$(this).html('Bracelet Gem')}
						if (TradeCategorySub == 'GOODS_ETC') {$(this).html('Etc.')}
						if (TradeCategorySub == 'GREATSWORD') {$(this).html('Greatsword')}
						if (TradeCategorySub == 'HAMMER') {$(this).html('Long Hammer')}
						if (TradeCategorySub == 'HEAVYARMOR_BOOTS') {$(this).html('Boots')}
						if (TradeCategorySub == 'HEAVYARMOR_GLOVES') {$(this).html('Gloves')}
						if (TradeCategorySub == 'HEAVYARMOR_HELM') {$(this).html('Helm')}
						if (TradeCategorySub == 'HEAVYARMOR_PANTS') {$(this).html('Pants')}
						if (TradeCategorySub == 'HEAVYARMOR_TUNIC') {$(this).html('Tunic')}
						if (TradeCategorySub == 'JEWELLERY') {$(this).html('Jewelry')}
						if (TradeCategorySub == 'KEYITEM') {$(this).html('Story')}
						if (TradeCategorySub == 'LARGESHIELD') {$(this).html('Giant Shield')}
						if (TradeCategorySub == 'LIGHTARMOR_BOOTS') {$(this).html('Boots')}
						if (TradeCategorySub == 'LIGHTARMOR_GLOVES') {$(this).html('Gloves')}
						if (TradeCategorySub == 'LIGHTARMOR_HELM') {$(this).html('Helm')}
						if (TradeCategorySub == 'LIGHTARMOR_PANTS') {$(this).html('Pants')}
						if (TradeCategorySub == 'LIGHTARMOR_TUNIC') {$(this).html('Tunic')}
						if (TradeCategorySub == 'LONGBLADE') {$(this).html('Spellsword')}
						if (TradeCategorySub == 'LONGSWORD') {$(this).html('Longsword')}
						if (TradeCategorySub == 'MANA_ERG') {$(this).html('Erg Crystal')}
						if (TradeCategorySub == 'MATERIAL_CLOTH') {$(this).html('Cloth')}
						if (TradeCategorySub == 'MATERIAL_ENCHANT') {$(this).html('Enchant')}
						if (TradeCategorySub == 'MATERIAL_ENHANCE') {$(this).html('Enhance')}
						if (TradeCategorySub == 'MATERIAL_ETC') {$(this).html('Etc.')}
						if (TradeCategorySub == 'MATERIAL_LEATHER') {$(this).html('Leather')}
						if (TradeCategorySub == 'MATERIAL_ORE') {$(this).html('Ore')}
						if (TradeCategorySub == 'MATERIAL_SKILLENHANCE') {$(this).html('Skill Awakening Material')}
						if (TradeCategorySub == 'MATERIAL_SPECIAL') {$(this).html('Special Material')}
						if (TradeCategorySub == 'MATERIAL_SPIRITINJECTION') {$(this).html('Power Infusion')}
						if (TradeCategorySub == 'MATERIAL_SUB') {$(this).html('Secondary Material')}
						if (TradeCategorySub == 'NECKLACE') {$(this).html('Necklace')}
						if (TradeCategorySub == 'PHANTOMDAGGER') {$(this).html('Phantom Dagger')}
						if (TradeCategorySub == 'PILLAR') {$(this).html('Pillar')}
						if (TradeCategorySub == 'PLATEARMOR_BOOTS') {$(this).html('Boots')}
						if (TradeCategorySub == 'PLATEARMOR_GLOVES') {$(this).html('Gloves')}
						if (TradeCategorySub == 'PLATEARMOR_HELM') {$(this).html('Helm')}
						if (TradeCategorySub == 'PLATEARMOR_PANTS') {$(this).html('Pants')}
						if (TradeCategorySub == 'PLATEARMOR_TUNIC') {$(this).html('Tunic')}
						if (TradeCategorySub == 'POTION') {$(this).html('Potion')}
						if (TradeCategorySub == 'REAR') {$(this).html('Rear')}
						if (TradeCategorySub == 'REAR_WING') {$(this).html('Wings')}
						if (TradeCategorySub == 'RING') {$(this).html('Ring')}
						if (TradeCategorySub == 'SCYTHE') {$(this).html('Battle Scythe')}
						if (TradeCategorySub == 'SHAREENABLE') {$(this).html('Cash Consumable')}
						if (TradeCategorySub == 'SHAREENABLE_TRADE') {$(this).html('Cash Consumable')}
						if (TradeCategorySub == 'SHIELD') {$(this).html('Shield')}
						if (TradeCategorySub == 'SPECIAL_POTION') {$(this).html('Special Potion')}
						if (TradeCategorySub == 'SPELLBOOK') {$(this).html('Spell Book')}
						if (TradeCategorySub == 'STAFF') {$(this).html('Staff')}
						if (TradeCategorySub == 'SUBWEAPON') {$(this).html('Secondary Weapon')}
						if (TradeCategorySub == 'TAIL') {$(this).html('Tail')}
						if (TradeCategorySub == 'TIRCOIN_ETC') {$(this).html('Tir Coin')}
						if (TradeCategorySub == 'TROPHY') {$(this).html('Loot')}
					})
					$('.stat').each(function() {
							doihide = $(this).attr("value");
							if (doihide != 0) {
								$(this).show();
							} else {$(this).hide();}
						});
					$('.weight').each(function() {
							doihide = $(this).attr("value");
							if (doihide != "") {
								$(this).show();
							} else {$(this).hide();}
						});
					$('.trade').each(
						function(){
							checktrade = $(this).attr('value')
							if (checktrade == 'DEFAULT') {
								$(this).html('This item cannot be traded.')
								$(this).css({
									'color':'#c25631',
									'background-image':'url(http://i.imgur.com/6zZAs1q.png)'
								})
							}
							if (checktrade == 'STORY') {
								$(this).html('Story items cannot be traded.')
								$(this).css({
									'color':'#c25631',
									'background-image':'url(http://i.imgur.com/6zZAs1q.png)'
								})
							}
							if (checktrade == 'PRACTICE') {
								$(this).html('Practice items cannot be traded.')
								$(this).css({
									'color':'#c25631',
									'background-image':'url(http://i.imgur.com/6zZAs1q.png)'
								})
							}
							if (checktrade == 'EVENT') {
								$(this).html('Event items cannot be traded.')
								$(this).css({
									'color':'#c25631',
									'background-image':'url(http://i.imgur.com/6zZAs1q.png)'
								})
							} 
							if (checktrade == 'CASH') {
								$(this).html('Cash items cannot be traded.')
								$(this).css({
									'color':'#c25631',
									'background-image':'url(http://i.imgur.com/6zZAs1q.png)'
								})
							} 
							if (checktrade == 'ACCOUNTONLY') {
								$(this).html('You can mail items between characters on the same ID.')
								$(this).css({
									'color':'#c25631',
									'background-image':'url(http://i.imgur.com/6zZAs1q.png)'
								})
							} 
							if (checktrade == '') {
								$(this).html('Can use all forms of trade')
							} 
						}
					)
					$('.itemicon').each(
						function(){
							ValueofIcon = $(this).attr('value')
							if ( ValueofIcon.indexOf('imgur') > -1 ) {
								$(this).css('background-image','url('+ ValueofIcon +')');
							}
						}
					)
					$('.tableicon').each(
						function(){
							ValueofTableIcon = $(this).attr('value')
							if ( ValueofTableIcon.indexOf('imgur') > -1 ) {
								$(this).css('background-image','url('+ ValueofTableIcon +')');
							}
						}
					)
					$('.desc').each(
						function(){
							ValueofDesc = $(this).attr('value')
							TransformedDescClass = ValueofDesc.replace(/ /g,'_')
							$(this).addClass('ItemDesc_'+TransformedDescClass)
						}
					)
					var url = "/js/descriptionsV2.js";
							$.getScript( url, function() {
								RunningDescriptions()
							})
					var menu = "/js/menu.js";
							$.getScript( menu, function() {
								MenuList()
							})		
					$.getScript( "/js/modelviewer.js", function() {
								SetUpViewer()
							})		
					$('#tabs').tabs();
}, 200);
			}); 
		}]
);
