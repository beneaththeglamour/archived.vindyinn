var ItemControllers = angular.module("ItemControllers", []);

ItemControllers.controller("ListController", ['$scope','$http', 
	function($scope, $http)
		{    
				$http.get('/json/items.json').success (function(data){
				$scope.ItemVariable = data;
				setTimeout(function(){
						WhatIsTheURL = window.location.pathname
						if (WhatIsTheURL == '/search.html') {$('.mainiteminput').val(search).trigger('input');}
						if (WhatIsTheURL == '/weapon/bastard+sword') {$('tr').each(function(){$(this).children().last().hide()})}
						if (WhatIsTheURL == '/weapon/phantom+daggers') {$('tr').each(function(){$(this).children().last().hide()})}
						if (WhatIsTheURL == '/weapon/spellsword') {$('tr').each(function(){$(this).children().last().hide()})}
						$('.tagname').each(function(){
							console.log('I swapped the underscores for you.')
							tagpopup = $(this).attr('title');
							replacetag = tagpopup.replace(/_/g, ' ');
							replaceforlink = tagpopup.replace(/_/g, '+');
							$(this).attr('title',replacetag)
							$(this).parent().attr('href','http://db.vindictusinn.com/search.html?find='+replaceforlink)
						});
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
						} else {
							$(this).parent().hide();
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
							if (checkclasses == '72') {$(this).html('Karok, Hurk')}
							if (checkclasses == '772') {$(this).html('Evie, Arisha, Sylas')}
							if (checkclasses == '1024') {$(this).html('Delia')}
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
						checkskill = $(this).html()
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
					$('.tagname').each(function(){
						tagpopup = $(this).attr('title');
						replacetag = tagpopup.replace(/_/g, ' ');
						$(this).attr('title',replacetag)
					});
					$('.stat').each(function() {
							doihide = $(this).attr("value");
							if (doihide != "") {
								$(this).show();
							} else {$(this).hide();}
						});
					$('.desc').each(function(){
					hidedesc = $(this).html();
						if (hidedesc != "") {
						$(this).css({'display':'block'});
						}
					})
					$('.eventcheck').each(function(){
						IsThisEvent = $(this).attr('value')
						if (IsThisEvent == 'DEFAULT') {
								$(this).html('No')
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
							} else {
								$(this).html('Can use all forms of trade')
							}
						}
					)
						console.log('DataTable loaded.')
						$('table').DataTable({
							"order": [[ 2, "asc" ]]
						});
$('#cssmenu').html('<ul>'+
	'<li><a href="/" class="home">Index</a></li>'+
	'<li><a href="">Items</a>'+
		'<ul>'+
			'<li><a href="">Armor</a></li>'+
			'<li><a href="">Weapons</a>'+
				'<ul>'+
					'<li><a href="http://db.vindictusinn.com/weapon/twin+swords">Twin Swords</a></li>'+
					'<li><a href="http://db.vindictusinn.com/weapon/twin+spears">XTwin Spears</a></li>'+
					'<li><a href="http://db.vindictusinn.com/weapon/sword">XSword</a></li>'+
					'<li><a href="http://db.vindictusinn.com/weapon/long+hammer">XLong Hammer</a></li>'+
					'<li><a href="http://db.vindictusinn.com/weapon/staff">XStaff</a></li>'+
					'<li><a href="http://db.vindictusinn.com/weapon/scythe">XScythe</a></li>'+
					'<li><a href="http://db.vindictusinn.com/weapon/pillar">XPillar</a></li>'+
					'<li><a href="http://db.vindictusinn.com/weapon/cestus">XCestus</a></li>'+
					'<li><a href="http://db.vindictusinn.com/weapon/bow">XBow</a></li>'+
					'<li><a href="http://db.vindictusinn.com/weapon/cross+gun">XCross Gun</a></li>'+
					'<li><a href="http://db.vindictusinn.com/weapon/twin+chainblades">XTwin Chainblades</a></li>'+
					'<li><a href="http://db.vindictusinn.com/weapon/glaive">XGlaive</a></li>'+
					'<li><a href="http://db.vindictusinn.com/weapon/greatswords">XGreatsword</a></li>'+
					'<li><a href="http://db.vindictusinn.com/weapon/spellsword">XSpellsword</a></li>'+
					'<li><a href="http://db.vindictusinn.com/weapon/phantom+daggers">XPhantom Daggers</a></li>'+
					'<li><a href="http://db.vindictusinn.com/weapon/bastard+sword">Bastard Sword</a></li>'+
				'</ul>'+
			'</li>'+
			'<li><a href="">Outfitters</a></li>'+
			'<li><a href="">Consumables</a></li>'+
			'<li><a href="">Materials</a></li>'+
			'<li><a href="">Other</a></li>'+
		'</ul>'+
	'</li>'+
	'<li><a href="">Recipes</a>'+
		'<ul>'+
			'<li><a href="http://db.vindictusinn.com/expertise/tailoring">XTailoring</a></li>'+
			'<li><a href="http://db.vindictusinn.com/expertise/goldsmithing">Goldsmithing</a></li>'+
			'<li><a href="http://db.vindictusinn.com/expertise/weaponsmithing">Weaponsmithing</a></li>'+
			'<li><a href="http://db.vindictusinn.com/expertise/armorsmithing">XArmorsmithing</a></li>'+
			'<li><a href="">XCooking</a></li>'+
			'<li><a href="">XNPC</a>'+
				'<ul>'+
					'<li><a href="">XClodagh</a></li>'+
					'<li><a href="">XBrynn</a></li>'+
					'<li><a href="">XFerghus</a></li>'+
					'<li><a href="">XKirstie</a></li>'+
				'</ul>'+
			'</li>'+
		'</ul>'+
	'</li>'+
	'<li><a href="http://titles.vindictusinn.com">Titles</a></li>'+
	'<li><a href="/">Skills</a>'+
		'<ul>'+
			'<li><a href="">Male</a>'+
				'<ul>'+
					'<li><a href="">Lann</a></li>'+
					'<li><a href="">Karok</a></li>'+
					'<li><a href="">Kai</a></li>'+
					'<li><a href="">Hurk</a></li>'+
					'<li><a href="">Sylas</a></li>'+
				'</ul>'+
			'</li>'+
			'<li><a href="">Female</a>'+
				'<ul>'+
					'<li><a href="">Fiona</a></li>'+
					'<li><a href="">Evie</a></li>'+
					'<li><a href="">Vella</a></li>'+
					'<li><a href="">Lynn</a></li>'+
					'<li><a href="">Arisha</a></li>'+
					'<li><a href="">Delia</a></li>'+
				'</ul>'+
			'</li>'+
		'</ul>'+
	'</li>'+
	'<li><a href="/enemies">Enemies</a></li>'+
	'<li><a href="/">Maps</a></li>'+
	'<li><a href="/">Stories</a></li>'+
	'<li><a href="/">NPCs</a></li>'+
'</ul>')				}, 200);
			}); 
		}]
);

ItemControllers.controller("DetailsController", ['$scope','$http','$routeParams',
	 function($scope, $http, $routeParams)
		{    
				$http.get('/json/items.json').success (function(data){
				$scope.ItemVariable = data;
				$scope.whichItem = $routeParams.ItemID;
				$scope.keyToDisplay = 'ItemClass';
				setTimeout(function(){
					
					$('#tabs').tabs();
					weight = parseInt($('#weight').attr('value'));
					updateweight = weight.toFixed(0);
					$('#changeweight').html(updateweight);
					replacestart = $('#valueitem').attr('value');
					$('title').html(replacestart + ' \\&bull; Vindictus Item Database');
					finalreplace = replacestart.replace(/ /g,"_");
					$('.iteminput').val(finalreplace).trigger('input');
					$('.mainiteminput').val(replacestart).trigger('input');
					console.log('DataTable loaded.');
					$('table').DataTable({
							"order": [[ 2, "asc" ]]
					});
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
					if (checkclasses == '72') {$(this).html('Karok, Hurk')}
					if (checkclasses == '772') {$(this).html('Evie, Arisha, Sylas')}
					if (checkclasses == '1024') {$(this).html('Delia')}
					})
					checklvl = $('#checkreqlvl').html();
					if (checklvl > '1') {
						$('#requlvl').show();
					}
					checkskill = $('#checkskillreq').html();
					if (checkskill != "") {
						$('#skilllvlres').show();
					}
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
					$('.stat').each(function() {
							doihide = $(this).attr("value");
							if (doihide != "") {
								$(this).show();
							}
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
					$('.trade').each(
						function(){
							checktrade = $(this).attr('value')
							if (checktrade == 'DEFAULT') {
								$(this).html('This item cannot be traded.')
								$(this).css({
									'color':'#c25631',
									'background-image':'url(http://i.imgur.com/6zZAs1q.png)'
								})
							} else {
								$(this).html('Can use all forms of trade')
							}
						}
					)
					$('.NPCCraft').each(function(){
						IsThereANPC = $(this).html()
						if (IsThereANPC == '') {
							$(this).parent().hide()
						}
					})
					$('.fee').each(function(){
						IsThereGold = $(this).html()
						if (IsThereGold == 'NaN') {
							$(this).hide()
							$(this).parent().next().html('Cannot be crafted by an NPC.')
						}
					})
					$('.manufacture').each(function(){
						IsThereManuID = $(this).html()
						if (IsThereManuID == '') {
							$(this).next().html('Cannot be crafted by an Expertise.')
						}
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
							if (checkclasses == '64') {$(this).html('Hurk')}
							if (checkclasses == '128') {$(this).html('Lynn')}
							if (checkclasses == '256') {$(this).html('Arisha')}
							if (checkclasses == '512') {$(this).html('Sylas')}
							if (checkclasses == '1185') {$(this).html('Lann, Vella, Lynn')}
							if (checkclasses == '516') {$(this).html('Evie, Sylas')}
							if (checkclasses == '72') {$(this).html('Karok, Hurk')}
							if (checkclasses == '772') {$(this).html('Evie, Arisha, Sylas')}
							if (checkclasses == '1024') {$(this).html('Delia')}
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
						checkskill = $(this).html()
							if (checkskill != "") {
							$(this).parent().show();
						} else {
							$(this).parent().hide();
						}
					})
					$('.stat').each(function() {
							doihide = $(this).attr("value");
							if (doihide != "") {
								$(this).show();
							} else {$(this).hide();}
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
					$('.trade').each(
						function(){
							checktrade = $(this).attr('value')
							if (checktrade == 'DEFAULT') {
								$(this).html('This item cannot be traded.')
								$(this).css({
									'color':'#c25631',
									'background-image':'url(http://i.imgur.com/6zZAs1q.png)'
								})
							} else {
								$(this).html('Can use all forms of trade')
							}
						}
					)
					console.log('Loaded ' + replacestart)
$('#cssmenu').html('<ul>'+
	'<li><a href="/" class="home">Index</a></li>'+
	'<li><a href="">Items</a>'+
		'<ul>'+
			'<li><a href="">Armor</a></li>'+
			'<li><a href="">Weapons</a>'+
				'<ul>'+
					'<li><a href="http://db.vindictusinn.com/weapon/twin+swords">Twin Swords</a></li>'+
					'<li><a href="http://db.vindictusinn.com/weapon/twin+spears">XTwin Spears</a></li>'+
					'<li><a href="http://db.vindictusinn.com/weapon/sword">XSword</a></li>'+
					'<li><a href="http://db.vindictusinn.com/weapon/long+hammer">XLong Hammer</a></li>'+
					'<li><a href="http://db.vindictusinn.com/weapon/staff">XStaff</a></li>'+
					'<li><a href="http://db.vindictusinn.com/weapon/scythe">XScythe</a></li>'+
					'<li><a href="http://db.vindictusinn.com/weapon/pillar">XPillar</a></li>'+
					'<li><a href="http://db.vindictusinn.com/weapon/cestus">XCestus</a></li>'+
					'<li><a href="http://db.vindictusinn.com/weapon/bow">XBow</a></li>'+
					'<li><a href="http://db.vindictusinn.com/weapon/cross+gun">XCross Gun</a></li>'+
					'<li><a href="http://db.vindictusinn.com/weapon/twin+chainblades">XTwin Chainblades</a></li>'+
					'<li><a href="http://db.vindictusinn.com/weapon/glaive">XGlaive</a></li>'+
					'<li><a href="http://db.vindictusinn.com/weapon/greatswords">XGreatsword</a></li>'+
					'<li><a href="http://db.vindictusinn.com/weapon/spellsword">XSpellsword</a></li>'+
					'<li><a href="http://db.vindictusinn.com/weapon/phantom+daggers">XPhantom Daggers</a></li>'+
					'<li><a href="http://db.vindictusinn.com/weapon/bastard+sword">Bastard Sword</a></li>'+
				'</ul>'+
			'</li>'+
			'<li><a href="">Outfitters</a></li>'+
			'<li><a href="">Consumables</a></li>'+
			'<li><a href="">Materials</a></li>'+
			'<li><a href="">Other</a></li>'+
		'</ul>'+
	'</li>'+
	'<li><a href="">Recipes</a>'+
		'<ul>'+
			'<li><a href="http://db.vindictusinn.com/expertise/tailoring">XTailoring</a></li>'+
			'<li><a href="http://db.vindictusinn.com/expertise/goldsmithing">Goldsmithing</a></li>'+
			'<li><a href="http://db.vindictusinn.com/expertise/weaponsmithing">Weaponsmithing</a></li>'+
			'<li><a href="http://db.vindictusinn.com/expertise/armorsmithing">XArmorsmithing</a></li>'+
			'<li><a href="">XCooking</a></li>'+
			'<li><a href="">XNPC</a>'+
				'<ul>'+
					'<li><a href="">XClodagh</a></li>'+
					'<li><a href="">XBrynn</a></li>'+
					'<li><a href="">XFerghus</a></li>'+
					'<li><a href="">XKirstie</a></li>'+
				'</ul>'+
			'</li>'+
		'</ul>'+
	'</li>'+
	'<li><a href="http://titles.vindictusinn.com">Titles</a></li>'+
	'<li><a href="/">Skills</a>'+
		'<ul>'+
			'<li><a href="">Male</a>'+
				'<ul>'+
					'<li><a href="">Lann</a></li>'+
					'<li><a href="">Karok</a></li>'+
					'<li><a href="">Kai</a></li>'+
					'<li><a href="">Hurk</a></li>'+
					'<li><a href="">Sylas</a></li>'+
				'</ul>'+
			'</li>'+
			'<li><a href="">Female</a>'+
				'<ul>'+
					'<li><a href="">Fiona</a></li>'+
					'<li><a href="">Evie</a></li>'+
					'<li><a href="">Vella</a></li>'+
					'<li><a href="">Lynn</a></li>'+
					'<li><a href="">Arisha</a></li>'+
					'<li><a href="">Delia</a></li>'+
				'</ul>'+
			'</li>'+
		'</ul>'+
	'</li>'+
	'<li><a href="/enemies">Enemies</a></li>'+
	'<li><a href="/">Maps</a></li>'+
	'<li><a href="/">Stories</a></li>'+
	'<li><a href="/">NPCs</a></li>'+
'</ul>')				}, 200);
			}); 
		}]
);

