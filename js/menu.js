MenuList = function() {
	$('#searchmenu').html('<form action="/search.html" method="get">'+
		'<input type="text" name="find" value="Search items">'+
		'<input type="submit" value="?">'+
		'</form>'+
	'<div id="version">Version 1.31</div>')
	$('#cssmenu').html('<ul>'+
	'<li><a href="/" class="home">Index</a></li>'+
	'<li><a>Equipment</a>'+
		'<ul>'+
			'<li><a href="/set">Equipment Sets</a></li>'+
			'<li><a>Armor</a>'+
				'<ul>'+
					'<li><a href="/armor/heavy-armor">Heavy Armor</a>'+
						'<ul>'+
							'<li><a href="/armor/heavy/helm">Helm</a>'+
							'<li><a href="/armor/heavy/tunic">Tunic</a>'+
							'<li><a href="/armor/heavy/pants">Pants</a>'+
							'<li><a href="/armor/heavy/boots">Boots</a>'+
							'<li><a href="/armor/heavy/gloves">Gloves</a>'+
						'</ul>'+
					'</li>'+
					'<li><a href="/armor/plate-armor">Plate Armor</a>'+
						'<ul>'+
							'<li><a href="/armor/plate/helm">Helm</a>'+
							'<li><a href="/armor/plate/tunic">Tunic</a>'+
							'<li><a href="/armor/plate/pants">Pants</a>'+
							'<li><a href="/armor/plate/boots">Boots</a>'+
							'<li><a href="/armor/plate/gloves">Gloves</a>'+
						'</ul>'+
					'</li>'+
					'<li><a href="/armor/light-armor">Light Armor</a>'+
						'<ul>'+
							'<li><a href="/armor/light/helm">Helm</a>'+
							'<li><a href="/armor/light/tunic">Tunic</a>'+
							'<li><a href="/armor/light/pants">Pants</a>'+
							'<li><a href="/armor/light/boots">Boots</a>'+
							'<li><a href="/armor/light/gloves">Gloves</a>'+
						'</ul>'+
					'</li>'+
					'<li><a href="/armor/cloth-armor">Cloth Armor</a>'+
						'<ul>'+
								'<li><a href="/armor/cloth/helm">Helm</a>'+
								'<li><a href="/armor/cloth/tunic">Tunic</a>'+
								'<li><a href="/armor/cloth/pants">Pants</a>'+
								'<li><a href="/armor/cloth/boots">Boots</a>'+
								'<li><a href="/armor/cloth/gloves">Gloves</a>'+
						'</ul>'+
					'</li>'+
				'</ul>'+
			'</li>'+
			'<li><a>Weapons</a>'+
				'<ul>'+
					'<li><a href="/weapon/twin-swords">Twin Swords</a></li>'+
					'<li><a href="/weapon/twin-spears">Twin Spears</a></li>'+
					'<li><a href="/weapon/sword">Sword</a></li>'+
					'<li><a href="/weapon/long-hammer">Long Hammer</a></li>'+
					'<li><a href="/weapon/shield">Shield</a></li>'+
					'<li><a href="/weapon/giant-shield">Giant Shield</a></li>'+
					'<li><a href="/weapon/staff">Staff</a></li>'+
					'<li><a href="/weapon/scythe">Scythe</a></li>'+
					'<li><a href="/weapon/pillar">Pillar</a></li>'+
					'<li><a href="/weapon/cestus">Cestus</a></li>'+
					'<li><a href="/weapon/bow">Bow</a></li>'+
					'<li><a href="/weapon/cross-gun">Cross Gun</a></li>'+
					'<li><a href="/weapon/twin-chainblades">Twin Chainblades</a></li>'+
					'<li><a href="/weapon/glaive">Glaive</a></li>'+
					'<li><a href="/weapon/greatswords">Greatsword</a></li>'+
					'<li><a href="/weapon/spellsword">Spellsword</a></li>'+
					'<li><a href="/weapon/focus">Focus</a></li>'+
					'<li><a href="/weapon/phantom-daggers">Phantom Daggers</a></li>'+
					'<li><a href="/weapon/bastard+sword">Bastard Sword</a></li>'+
				'</ul>'+
			'</li>'+
			'<li><a>Outfitters</a>'+
				'<ul>'+
					'<li><a href="/outfitters/helm">Helm</a>'+
					'<li><a href="/outfitters/tunic">Tunic</a>'+
					'<li><a href="/outfitters/pants">Pants</a>'+
					'<li><a href="/outfitters/boots">Boots</a>'+
					'<li><a href="/outfitters/gloves">Gloves</a>'+
				'</ul>'+
			'</li>'+
			'<li><a>Accessories</a>'+
				'<ul>'+
					'<li><a href="/accessories/artifact">Artifact</a></li>'+
					'<li><a href="/accessories/belt">Belt</a></li>'+
					'<li><a href="/accessories/bracelet">Bracelet</a></li>'+
					'<li><a href="/accessories/earrings">Earrings</a></li>'+
					'<li><a href="/accessories/jewellery">Jewellery</a></li>'+
					'<li><a href="/accessories/necklace">Necklace</a></li>'+
					'<li><a href="/accessories/other">Other</a></li>'+
					'<li><a href="/accessories/ring">Ring</a></li>'+
					'<li><a href="/accessories/spell-book">Spell Book</a></li>'+
					'<li><a href="/accessories/tail">Tail</a></li>'+
					'<li><a>Rear</a>'+
						'<ul>'+
							'<li><a href="/accessories/rear/rear">Rear</a></li>'+
							'<li><a href="/accessories/rear/wings">Wings</a></li>'+
						'</ul>'+
					'</li>'+
				'</ul>'+
			'</li>'+
			'<li><a>Customization</a>'+
				'<ul>'+
					'<li><a href="/customization/appearance">Appearance</a></li>'+
					'<li><a href="/customization/beard">Beard</a></li>'+
					'<li><a href="/customization/eyebrows">Eyebrows</a></li>'+
					'<li><a href="/customization/face-tattoo">Face Tattoo</a></li>'+
					'<li><a href="/customization/hair-style">Hair Style</a></li>'+
					'<li><a href="/customization/inner-armor">Inner Armor</a></li>'+
					'<li><a href="/customization/make-up">Make Up</a></li>'+
					'<li><a href="/customization/scar">Scar</a></li>'+
					'<li><a href="/customization/tattoo">Tattoo</a></li>'+
				'</ul>'+
			'</li>'+
		'</ul>'+
	'<li><a>Items</a>'+
		'<ul>'+
			'<li><a>Event</a>'+
				'<ul>'+
					'<li><a href="/event/adventurer-kit">Adventurer Kit</a></li>'+
					'<li><a href="/event/consumable">Consumable</a></li>'+
					'<li><a href="/event/normal-item">Normal Item</a></li>'+
					'<li><a href="/event/nx-item">NX Item</a></li>'+
					'<li><a href="/event/rare-item">Rare Item</a></li>'+
					'<li><a href="/event/set">Set</a></li>'+
					'<li><a href="/event/title-scroll">Title Scroll</a></li>'+
					'<li><a href="/event/weapon">Weapon</a></li>'+
				'</ul>'+
			'</li>'+
			'<li><a>Consumables</a>'+
				'<ul>'+
					'<li><a href="/consumable/avatar-dye-ampoule">Avatar Dye Ampoule</a></li>'+
					'<li><a href="/consumable/cash-consumable">Cash Consumable</a></li>'+
					'<li><a href="/consumable/clodaghs-dye-ampoule">Clodagh&apos;s Dye Ampoule</a></li>'+
					'<li><a href="/consumable/cooking">Cooking</a></li>'+
					'<li><a>Etc.</a>'+
						'<ul>'+
							'<li><a href="/consumable/etc/adventurer-kit">Adventurer Kit</a></li>'+
							'<li><a href="/consumable/etc/avatar-package">Avatar Package</a></li>'+
							'<li><a href="/consumable/etc/bullet">Bullet</a></li>'+
							'<li><a href="/consumable/etc/capsule">Capsule</a></li>'+
							'<li><a href="/consumable/etc/emblem">Emblem</a></li>'+
							'<li><a href="/consumable/etc/gachapon-outfit">Gachapon Outfit</a></li>'+
							'<li><a href="/consumable/etc/gachapon-weapon">Gachapon Weapon</a></li>'+
							'<li><a href="/consumable/etc/gem">Gem</a></li>'+
							'<li><a href="/consumable/etc/hair-style">Hair Style</a></li>'+
							'<li><a href="/consumable/etc/inner-armor">Inner Armor</a></li>'+
							'<li><a href="/consumable/etc/NX-item">NX item</a></li>'+
							'<li><a href="/consumable/etc/other">Other</a></li>'+
							'<li><a href="/consumable/etc/potion">Potion</a></li>'+
							'<li><a href="/consumable/etc/regular-item">Regular Item</a></li>'+
							'<li><a href="/consumable/etc/set">Set</a></li>'+
							'<li><a href="/consumable/etc/title-scroll">Scroll</a></li>'+
							
						'</ul>'+
					'</li>'+
					'<li><a href="/consumable/feather">Feather</a></li>'+
					'<li><a href="/consumable/potion">Potion</a></li>'+
					'<li><a href="/consumable/secondary-weapon">Secondary Weapon</a></li>'+
					'<li><a href="/consumable/special-potion">Special Potion</a></li>'+
				'</ul>'+
			'</li>'+
			'<li><a>Materials</a>'+
				'<ul>'+
					'<li><a href="/materials/bracelet-gem">Bracelet Gem</a></li>'+
					'<li><a href="/materials/cash-consumable">Cash Consumable</a></li>'+
					'<li><a href="/materials/enchant">Enchant</a></li>'+
					'<li><a href="/materials/enhance">Enhance</a></li>'+
					'<li><a href="/materials/erg-crystal">Erg Crystal</a></li>'+
					'<li><a href="/materials/etc">Etc.</a></li>'+
					'<li><a href="/materials/leather">Leather</a></li>'+
					'<li><a href="/materials/ore">Ore</a></li>'+
					'<li><a href="/materials/power-infusion">Power Infusion</a></li>'+
					'<li><a href="/materials/remnant">Remnant</a></li>'+
					'<li><a href="/materials/secondary-materials">Secondary Materials</a></li>'+
					'<li><a href="/materials/skill-awakening-material">Skill Awakening Material</a></li>'+
				'</ul>'+
			'</li>'+
			'<li><a>Composite Material</a>'+
				'<ul>'+
					'<li><a href="/composite-material/armor-composite-material">Armor</a></li>'+
					'<li><a href="/composite-material/weapon-composite-material">Weapon</a></li>'+
				'</ul>'+
			'</li>'+
			'<li><a>Battle</a>'+
				'<ul>'+
					'<li><a href="/battle/loot">Loot</a></li>'+
					'<li><a href="/battle/story">Story</a></li>'+
				'</ul>'+
			'</li>'+
			'<li><a>Etc</a>'+
				'<ul>'+
					'<li><a href="/etc/cash-consumable">Cash Consumable</a></li>'+
					'<li><a href="/etc/etc">Etc.</a></li>'+
					'<li><a href="/etc/other">Other</a></li>'+
				'</ul>'+
			'</li>'+
		'</ul>'+
	'</li>'+
	'<li><a href="/enchant-scroll">Enchants</a></li>'+
	'<li><a href="http://titles.vindictusinn.com">Titles</a></li>'+
	'<li><a href="/skill">Skills</a>'+
	'</li>'+
	'<li><a href="/enemies">Enemies</a></li>'+
	'<li><a href="/battles">Battles</a></li>'+
	'<li><a href="/story">Stories</a></li>'+
	'<li><a>Tools</a>'+
				'<ul>'+
					'<li><a href="http://vindictusinn.com/emotes">Emote Gallery</a></li>'+
					'<li><a href="http://vindictusinn.com/minmaxstats">Min/Max Level 90 Stats</a></li>'+
					'<li><a href="http://vindictusinn.com/dyepreviewer">Dye Previewer</a></li>'+
					'<li><a href="http://vindictusinn.com/aprestore">AP Restoration Tool</a></li>'+
					'<li><a href="http://vindictusinn.com/titlecolors">List of Title Colors</a></li>'+
					'<li><a href="http://vindictusinn.com/transbuild">Trans Build Editor</a></li>'+
				'</ul>'+
	'</li>'+
	'<li><a href="/new">What&apos;s New</a></li>'+
'</ul>')			

$.fn.menumaker = function(options) {
      
      var cssmenu = $(this), settings = $.extend({
        title: "Menu",
        format: "dropdown",
        sticky: false
      }, options);

      return this.each(function() {
        cssmenu.prepend('<div id="menu-button">' + settings.title + '</div>');
        $(this).find("#menu-button").on('click', function(){
          $(this).toggleClass('menu-opened');
          var mainmenu = $(this).next('ul');
          if (mainmenu.hasClass('open')) { 
            mainmenu.hide().removeClass('open');
          }
          else {
            mainmenu.show().addClass('open');
            if (settings.format === "dropdown") {
              mainmenu.find('ul').show();
            }
          }
        });

        cssmenu.find('li ul').parent().addClass('has-sub');

        multiTg = function() {
          cssmenu.find(".has-sub").prepend('<span class="submenu-button"></span>');
          cssmenu.find('.submenu-button').on('click', function() {
            $(this).toggleClass('submenu-opened');
            if ($(this).siblings('ul').hasClass('open')) {
              $(this).siblings('ul').removeClass('open').hide();
            }
            else {
              $(this).siblings('ul').addClass('open').show();
            }
          });
        };

        if (settings.format === 'multitoggle') multiTg();
        else cssmenu.addClass('dropdown');

        if (settings.sticky === true) cssmenu.css('position', 'fixed');

        resizeFix = function() {
          if ($( window ).width() > 768) {
            cssmenu.find('ul').show();
          }

          if ($(window).width() <= 768) {
            cssmenu.find('ul').hide().removeClass('open');
          }
        };
        resizeFix();
        return $(window).on('resize', resizeFix);

      });
  };
  
  $("#cssmenu").menumaker({
    title: "Navigation",
    format: "multitoggle"
	});

console.log('CSSMenu Up')

}

 