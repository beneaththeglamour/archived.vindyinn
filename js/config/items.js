var ItemApp = angular.module('ItemApp', ['ngRoute','ItemControllers','ngDisqus']);
replacestart = $('#valueitem').attr('value');

ItemApp.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider.
  when('/list', {
    template: '<table class="itemtable" style="table-layout:fixed"> '+
'	<col style="width:65px"> '+
'	<thead> 	'+
'		<th class="itemcol"></th> 	'+
'		<th width="20%">Name</th> 	'+
'		<th>Rarity</th> 	'+
'		<th>Type</th> 	'+
'		<th>Subtype</th> 	'+
'	</thead> '+
'	<tbody>'+
'		<tr class="itemlist" ng-repeat="item in ItemVariable | filter : ' + filter + '"> 		'+
'			<td>'+
'				<img class="tableicon" src="http://i.imgur.com/Cv2JSPy.png" value="{{item.Icon}}" style="background-image:url(/images/icons/{{item.Icon}}.png)"/>'+
'			</td> 		'+
'			<td class="name">'+
'				<a href="http://db.vindictusinn.com/db#!/item/{{ItemVariable.indexOf(item)}}" class="rare{{item.Rarity}} linkname" value="{{item.Name}}">{{item.Name}}</a>'+
'				<div class="hidetooltip">'+
'					<div class="border" id="{{item.Name}}"> 	'+
'						<div class="itemtooltip" value="{{item.ItemClass|lowercase}}">  				 		'+
'							<div class="icon"> 			'+
'								<img class="itemicon" src="http://i.imgur.com/Cv2JSPy.png" value="{{item.Icon}}" style="background-image:url(/images/icons/{{item.Icon}}.png)"/> 			'+
'								<span class="rare{{item.Rarity}} rarity">{{item.Name}}</span> 			'+
'								<span class="bubble"> 				'+
'									<span class="itemtype"><span class="TradeCategorySub" value="{{item.TradeCategorySub}}"></span>, <span class="TradeCategory" value="{{item.TradeCategory}}"></span></span> 				'+
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
'							<div class="containres"> 				 			'+
'								<span class="restriction classres">Only for <span class="classresvalue">{{item.ClassRestriction}}</span></span>		 			'+
'								<span class="restriction requlvl">For levels <span class="checkreqlvl">{{item.RequiredLevel}}</span> and above</span> 			'+
'								<span class="restriction skilllvlres">Rank <span class="checkskillreq" value="{{item.RequiredSkill}}"></span> <span class="skillrank" value="{{item.RequiredSkillRank}}">{{item.RequiredSkillRank}}</span> or above</span> 			 		'+
'							</div> 			 		'+
'							<span class="uses">{{item.Uses}}</span> 			 		'+
'							<span class="desc" value="{{item.ItemClass|uppercase}}">{{item.Desc}}</span> 			 		'+
'							<span class="trade" value="{{item.TradeRestirction}}"></span> '+
'						</div> 	'+
'					</div> '+
'				</div>'+
'			</td> 		'+
'			<td class="rare{{item.Rarity}} centercell itemrarity" value="{{item.Rarity}}"></td> 		'+
'			<td class="type centercell"><span class="TradeCategory" value="{{item.TradeCategory}}"></span></td> 		'+
'			<td class="subtype centercell"><span class="TradeCategorySub" value="{{item.TradeCategorySub}}"></span></td> 		'+
'		</tr> '+
'	</tbody> '+
'</table>',
    controller: 'ListController'
  }).
  when('/item/:ItemID/', {
    templateUrl: '/template/item-detail.html',
    controller: 'DetailsController'
  }).

  $locationProvider.html5Mode(true);
}]);

ItemApp.config(function($disqusProvider){
	 shortname = 'vindictusinndb'
      $disqusProvider.setShortname(shortname);
   });