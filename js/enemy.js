var EnemyApp = angular.module('EnemyApp', ['ngRoute','EnemyControllers']);
replacestart = $('#valueitem').attr('value');

EnemyApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
  when('/list', {
    templateURL: 'http://db.vindictusinn.com/template/enemy-list.html',
    controller: 'ListEnemyController'
  }).
  when('/enemy/:ItemID/', {
    template: '<h2 ng-model="EnemyVariable" id ="valueitem" value="{{EnemyVariable[whichItem].Variation}}" >{{EnemyVariable[whichItem].Variation}}</h2>'+ 	
	'<div style="background-color: rgb(158, 63, 63);font-size: 1rem;padding: 0.6rem;text-align: center;"><strong>You are currently using a live yet uncompleted version of the site.</strong><br/> The finalized version is still a work in progress. Certain functions and capabilities have been added or disabled for testing purposes.</div>'+
'<div class="border">'+
	'<div ng-model="EnemyVariable" class="itemtooltip">'+
		'<span class="rarity">{{EnemyVariable[whichItem].Variation}} (<span id="difficulty">{{EnemyVariable[whichItem].Difficulty}}</span>)</span>	'+
		'<span class="bubble">{{EnemyVariable[whichItem].Class}}</span>'+
		'<span class="bubble">Level {{EnemyVariable[whichItem].Level}} <span class="right"><span class="number">{{EnemyVariable[whichItem].Exp}}</span> <img id="expbanner" src="http://i.imgur.com/oLXctBs.png" /></span></span>			'+
		'<div id="healthlist">'+
			'<span class="box"><strong>HP by Group Size</strong></span>'+
			'<span class="box"><strong>1:</strong> <span class="number bosshp" value="{{EnemyVariable[whichItem].HP1}}">{{EnemyVariable[whichItem].HP1}}</span></span>	'+
			'<span class="box"><strong>2:</strong> <span class="number bosshp" value="{{EnemyVariable[whichItem].HP2}}">{{EnemyVariable[whichItem].HP2}}</span></span>	'+
			'<span class="box"><strong>3:</strong> <span class="number bosshp" value="{{EnemyVariable[whichItem].HP3}}">{{EnemyVariable[whichItem].HP3}}</span></span>	'+
			'<span class="box"><strong>4:</strong> <span class="number bosshp" value="{{EnemyVariable[whichItem].HP4}}">{{EnemyVariable[whichItem].HP4}}</span></span>	'+
		'</div>'+
		'<div id="enemystats">'+
			'<span class="box"><em>Attack:</em> <span class="number bossatt">{{EnemyVariable[whichItem].ATK}}</span></span>'+
			'<span class="box"><em>DEF:</em> <span class="number bossdef">{{EnemyVariable[whichItem].DEF}}</span></span>'+
			'<span class="box"><em>Critical:</em> <span class="number">{{EnemyVariable[whichItem].Critical}}</span></span>'+
			'<span class="box"><em>Critical Damage:</em> <span class="number">{{EnemyVariable[whichItem].CriticalDmgFactor}}</span>%</span>'+
			'<span class="box"><em>Critical Resistance:</em> <span class="number">{{EnemyVariable[whichItem].Res_Critical}}</span></span>'+
		'</div>'+
	'</div>'+
	'</div>'+
	'<div class="moreinfobubble">'+
		'<h2>Screenshot</h2>'+
		'<div id="screenshot"></div>'+
		'<h2>Select Mode</h2>'+
		'<div id="selectmode">'+
		'<button id="normal" value="{{EnemyVariable[whichItem].HP_Normal_Percent}}">Hard</button>'+
		'<button id="hero" value="{{EnemyVariable[whichItem].HP_Hero_Percent}}">Hero</button>'+
		'</div>'+
		'<ul>'+
			'<li><strong>Normal:</strong> <br />{{EnemyVariable[whichItem].HP_Normal_Percent}}%</li> '+
			'<li id="heropercent"><strong>Hero:</strong> <br />{{EnemyVariable[whichItem].HP_Hero_Percent}}%</li> '+
			'<li id="hasbreakoff"><strong>Has Breakoff:</strong> <br /><span id="breakoff" value="{{EnemyVariable[whichItem].WeakpointReward}}">{{EnemyVariable[whichItem].WeakpointReward}}</span></li> '+
		'</ul>'+
		'<h2>Hero Bonus</h2>'+
		'<ul>'+
			'<li><strong>Attack Bonus:</strong> <br /><span class="number" id="attackbonus" value="{{EnemyVariable[whichItem].ATK_Bonus_Hero}}">{{EnemyVariable[whichItem].ATK_Bonus_Hero}}</span></span></li> '+
			'<li><strong>DEF Bonus:</strong> <br /><span class="number" id="defbonus" value="{{EnemyVariable[whichItem].DEF_Bonus_Hero}}">{{EnemyVariable[whichItem].DEF_Bonus_Hero}}</span></span></li> '+
		'</ul>'+
	'</div>'+
	'</div>',
    controller: 'DetailsEnemyController'
  }).
  otherwise({
    redirectTo: '/list'
  });
}]);