var EnemyControllers = angular.module("EnemyControllers", []);

EnemyControllers.controller("ListEnemyController", ['$scope','$http', 
	function($scope, $http)
		{    
			$http.get('/json/enemy.json').success (function(data){
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
						console.log('DataTable loaded.')
						$('table').DataTable({
							"order": [[ 0, "asc" ]]
						});
						$('#cssmenu').html('<ul>'+
	'<li><a href="/" class="home">Index</a></li>'+
	'<li><a href="">Items</a>'+
		'<ul>'+
			'<li><a href="">Armor</a></li>'+
			'<li><a href="">Weapons</a>'+
				'<ul>'+
					'<li><a href="/weapon/twin+swords">Twin Swords</a></li>'+
					'<li><a href="/weapon/twin+spears">XTwin Spears</a></li>'+
					'<li><a href="/weapon/sword">XSword</a></li>'+
					'<li><a href="/weapon/long+hammer">XLong Hammer</a></li>'+
					'<li><a href="/weapon/staff">XStaff</a></li>'+
					'<li><a href="/weapon/scythe">XScythe</a></li>'+
					'<li><a href="/weapon/pillar">XPillar</a></li>'+
					'<li><a href="/weapon/cestus">XCestus</a></li>'+
					'<li><a href="/weapon/bow">XBow</a></li>'+
					'<li><a href="/weapon/cross+gun">XCross Gun</a></li>'+
					'<li><a href="/weapon/twin+chainblades">XTwin Chainblades</a></li>'+
					'<li><a href="/weapon/glaive">XGlaive</a></li>'+
					'<li><a href="/weapon/greatswords">XGreatsword</a></li>'+
					'<li><a href="/weapon/spellsword">XSpellsword</a></li>'+
					'<li><a href="/weapon/phantom+daggers">XPhantom Daggers</a></li>'+
					'<li><a href="/weapon/bastard+sword">Bastard Sword</a></li>'+
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
			'<li><a href="/tailoring">XTailoring</a></li>'+
			'<li><a href="/goldsmithing">Goldsmithing</a></li>'+
			'<li><a href="/weaponsmithing">Weaponsmithing</a></li>'+
			'<li><a href="/armorsmithing">XArmorsmithing</a></li>'+
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

EnemyControllers.controller("DetailsEnemyController", ['$scope','$http','$routeParams',
	 function($scope, $http, $routeParams)
		{    
		
			$http.get('/json/enemy.json').success (function(data){
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
					console.log('Loaded ')
					$('#cssmenu').html('<ul>'+
	'<li><a href="/" class="home">Index</a></li>'+
	'<li><a href="">Items</a>'+
		'<ul>'+
			'<li><a href="">Armor</a></li>'+
			'<li><a href="">Weapons</a>'+
				'<ul>'+
					'<li><a href="/weapon/twin+swords">Twin Swords</a></li>'+
					'<li><a href="/weapon/twin+spears">XTwin Spears</a></li>'+
					'<li><a href="/weapon/sword">XSword</a></li>'+
					'<li><a href="/weapon/long+hammer">XLong Hammer</a></li>'+
					'<li><a href="/weapon/staff">XStaff</a></li>'+
					'<li><a href="/weapon/scythe">XScythe</a></li>'+
					'<li><a href="/weapon/pillar">XPillar</a></li>'+
					'<li><a href="/weapon/cestus">XCestus</a></li>'+
					'<li><a href="/weapon/bow">XBow</a></li>'+
					'<li><a href="/weapon/cross+gun">XCross Gun</a></li>'+
					'<li><a href="/weapon/twin+chainblades">XTwin Chainblades</a></li>'+
					'<li><a href="/weapon/glaive">XGlaive</a></li>'+
					'<li><a href="/weapon/greatswords">XGreatsword</a></li>'+
					'<li><a href="/weapon/spellsword">XSpellsword</a></li>'+
					'<li><a href="/weapon/phantom+daggers">XPhantom Daggers</a></li>'+
					'<li><a href="/weapon/bastard+sword">Bastard Sword</a></li>'+
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
			'<li><a href="/tailoring">XTailoring</a></li>'+
			'<li><a href="/goldsmithing">Goldsmithing</a></li>'+
			'<li><a href="/weaponsmithing">Weaponsmithing</a></li>'+
			'<li><a href="/armorsmithing">XArmorsmithing</a></li>'+
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
