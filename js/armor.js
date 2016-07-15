var ItemApp = angular.module('ItemApp', ['ngRoute','ItemControllers']);
replacestart = $('#valueitem').attr('value');

ItemApp.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.
  when('/list', {
    template: '<div style="background-color: rgb(158, 63, 63);font-size: 1rem;padding: 0.6rem;text-align: center;"><strong>You are currently using a live yet uncompleted version of the site.</strong><br/> The finalized version is still a work in progress. Certain functions and capabilities have been added or disabled for testing purposes.</div>'+
	'<table class="itemtable" style="table-layout:fixed">'+
	'<col style="width:67px">'+
	'<col style="width:250px">'+
	'<thead> 	<th class="itemcol"></th> 	<th>Name</th> <th>Trade</th>	<th>Level</th> 	<th>DEF</th><th>STR</th><th>AGI</th><th>INT</th><th>WIL</th><th>RES</th> </thead> <tbody> 	<tr class="itemlist" ng-repeat="item in ItemVariable | filter : ' + filter + '"> 		<td><img class="tableicon" src="http://i.imgur.com/Cv2JSPy.png" value="{{item.Icon}}" style="background-image:url(/images/icons/{{item.Icon}}.png)"/></td></td> 		<td class="name" width="20%"><a href="http://db.vindictusinn.com/db#!/item/{{ItemVariable.indexOf(item)}}" class="rare{{item.Rarity}} linkname" value="{{item.Name}}">{{item.Name}}</a>'+
	'<div class="hidetooltip"><div class="border" id="{{item.Name}}">'+ 	
	'						<div class="itemtooltip" value="{{item.ItemClass|lowercase}}">  				 		'+
'							<div class="icon"> 			'+
'								<img class="itemicon" src="http://i.imgur.com/Cv2JSPy.png" value="{{item.Icon}}" style="background-image:url(/images/icons/{{item.Icon}}.png)"/> 			'+
'								<span class="rare{{item.Rarity}} rarity">{{item.Name}}</span> 			'+
'								<span class="bubble"> 				'+
'									<span class="itemtype">{{item.TradeCategorySub}}, {{item.TradeCategory}}</span> 				'+
'									<span id="sell">Sell Price</span> 				'+
'									<span class="right">'+
'										<img src="http://i.imgur.com/Hq3oGZI.png" id="goldsack">'+
'										<span class="number sellingfor">{{item.SellPrice}}</span>'+
'									</span> 			'+
'								</span> 					 			'+
'								<span class="bubble itemrarity rare{{item.Rarity}}" value="{{item.Rarity}}"> 				'+
'								<span class="right weight" value="{{item.Weight}}">'+
'									<span id="changeweight">{{item.Weight}}</span> stones</span> 			'+
'								</span> 				 		'+
'							</div>'+
'								<span class="stat" id="att" value="{{item.ATK}}">ATT +<span class="number">{{item.ATK}}</span></span> 			 	'+
'								<span class="stat" id="pvpatt" value="{{item.PVP_ATK}}">PVP ATT +<span class="number">{{item.PVP_ATK}}</span></span> 			 		'+
'								<span class="stat" id="matt" value="{{item.MATK}}">MATT +<span class="number">{{item.MATK}}</span></span> 			 		'+
'								<span class="stat" id="pvpmatt" value="{{item.PVP_MATK}}">PVP MATT +<span class="number">{{item.PVP_MATK}}</span></span> 			 		'+
'								<span class="stat" id="balance" value="{{item.Balance}}">Balance +<span class="number">{{item.Balance}}</span></span> 			 		'+
'								<span class="stat" id="crit" value="{{item.Critical}}">Critical +<span class="number">{{item.Critical}}</span></span> 			 		'+
'								<span class="stat" id="atkspd" value="{{item.ATK_Speed}}">Attack Speed +<span class="number">{{item.ATK_Speed}}</span></span> 			 		'+
'								<span class="stat" id="def" value="{{item.DEF}}">DEF +<span class="number">{{item.DEF}}</span></span> 			 		'+
'								<span class="stat" id="pvpdef" value="{{item.PVP_DEF}}">PVP DEF +<span class="number">{{item.PVP_DEF}}</span></span> 			 		'+
'								<span class="stat" id="str" value="{{item.STR}}">STR +<span class="number">{{item.STR}}</span></span> 		'+
'								<span class="stat" id="dex" value="{{item.DEX}}">AGI +<span class="number">{{item.DEX}}</span></span> 		'+
'								<span class="stat" id="int" value="{{item.INT}}">INT +<span class="number">{{item.INT}}</span></span> 			 		'+
'								<span class="stat" id="wil" value="{{item.WILL}}">WIL +<span class="number">{{item.WILL}}</span></span> 			 		'+
'								<span class="stat" id="luck" value="{{item.LUCK}}">Luck +<span class="number">23{{item.LUCK}}</span></span> 			 		'+
'								<span class="stat" id="hp" value="{{item.HP}}">HP +{{item.HP}}</span> 			 		'+
'								<span class="stat" id="stam" value="{{item.STAMINA}}">Stamina +{{item.STAMINA}}</span> 			 		'+
'								<span class="stat" id="critres" value="{{item.Res_Critical}}">Critical Resistance +<span class="number">{{item.Res_Critical}}</span></span> 			 		'+
'								<span class="stat" id="movspd" value="{{item.TOWN_SPEED}}">Movement Speed +{{item.TOWN_SPEED}}</span> 			 		'+	
	'<div class="containres"> 				 			<span class="restriction classres">Only for <span class="classresvalue">{{item.ClassRestriction}}</span></span>		 			<span class="restriction requlvl">For levels <span class="checkreqlvl">{{item.RequiredLevel}}</span> and above</span> 			<span class="restriction skilllvlres">Rank <span class="checkskillreq">{{item.RequiredSkill}}</span> <span class="skillrank" value="{{item.RequiredSkillRank}}">{{item.RequiredSkillRank}}</span> or above</span> 			 		</div> 			 		<span class="uses">{{item.Uses}}</span> 			 		<span class="desc" value="{{item.ItemClass|uppercase}}">{{item.Desc}}</span> 			 		<span class="trade" value="{{item.TradeRestirction}}"></span> </div> 	</div> </div>' +
	'</td> 		 	<td class="centercell"><span value="{{item.TradeRestirction}}" class="eventcheck"></span></td>	<td class="centercell">{{item.RequiredLevel}}</td> 	<td class="subtype centercell">{{item.DEF}}</td><td class="subtype centercell">{{item.STR}}</td><td class="subtype centercell">{{item.DEX}}</td><td class="subtype centercell">{{item.INT}}</td><td class="subtype centercell">{{item.WILL}}</td><td class="subtype centercell">{{item.Res_Critical}}</td>' +
	'</tr> </tbody> </table> ',
    controller: 'ListController'
  }).
  when('/item/:ItemID/', {
    template: '',
    controller: 'DetailsController'
  }).
  otherwise({
    redirectTo: '/list'
  });
}]);