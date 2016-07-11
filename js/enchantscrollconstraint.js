ItemConstraint = function(){
	$('.itemconstraint').each(function(){
		ESContraint = $(this).attr('value')
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_ACID") {$(this).html("For Twin Swords and Twin Spears")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_ADROIT") {$(this).html("For Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_ADVENTURER") {$(this).html("For Erg Core Brooches")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_ADVENTURER_100") {$(this).html("For Erg Core Brooches (Enchant success rate: 100%)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_AGILE") {$(this).html("For Boots")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_AMBITION") {$(this).html("For Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_AMBITION_100") {$(this).html("For Weapons (Enchant success rate: 100%)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_AMBITION_MOONCAKES") {$(this).html("무기에 인챈트 가능 (100%의 확률로 성공)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_AMETHYST") {$(this).html("For Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_ANNOUNCEMENT") {$(this).html("For Cloth/Light Armor - Hand & Feet")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_ANTIQUE") {$(this).html("For Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_ANTIQUE_100") {$(this).html("For Weapons (Enchant success rate: 100%)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_ARMADILLO") {$(this).html("For Heavy Armor")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_ATK1000DAY90") {$(this).html("For Inner Armors (Enchant success rate: 100%)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_ATK500DAY30") {$(this).html("이너아머에 가능 (인챈트 100% 성공)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_ATK500DAY60") {$(this).html("For Inner Armors (Enchant success rate: 100%)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_ATK500DAY7") {$(this).html("이너아머에 가능 (인챈트 100% 성공)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_ATK50DAY30") {$(this).html("For Inner Armors (Enchant success rate: 100%)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_ATK50DAY7") {$(this).html("이너아머에 가능 (인챈트 100% 성공)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_AWKWARD") {$(this).html("For Tunics")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_BALANCED") {$(this).html("For Cloth and Light Armor")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_BALANCED_100") {$(this).html("For Cloth Armor and Light Armor (Enchant success rate: 100%)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_BASIC_MAGIC") {$(this).html("For Twin Swords")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_BASIC_MANA") {$(this).html("For Tunics")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_BEAM") {$(this).html("For Longswords")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_BEGINNERS") {$(this).html("For Armor")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_BERSERKER") {$(this).html("모든 무기, 장비에 인챈트 가능")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_BESTCOUPLE") {$(this).html("For Accessories")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_BITTER") {$(this).html("For Twin Swords")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_BITTER_100") {$(this).html("For Twin Swords (Enchant success rate: 100%)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_BLIZZARD") {$(this).html("For Heavy Armor and Plate Armor")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_BLOCK") {$(this).html("For Tunics")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_BLOW") {$(this).html("For Twin Swords and Twin Spears")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_BRAVE") {$(this).html("For all Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_CALM") {$(this).html("For Longswords")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_CATS_EYE") {$(this).html("For all Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_CHANCE") {$(this).html("For Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_CHANGEABLE") {$(this).html("For all Armor and Shields")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_CHARMING") {$(this).html("For Tunics")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_CLEARNESS") {$(this).html("For Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_CLOSE") {$(this).html("For Shields")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_COAT") {$(this).html("For Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_CONSTANT") {$(this).html("For Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_CONVICT") {$(this).html("For All Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_COURAGE") {$(this).html("For Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_CRESENT") {$(this).html("Thunder Ring, Ocean Depths Monster, Crescent Moonlight Ring, and Crescent Moon Announcement, Ocean Depths Announcement")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_CRESENT_100") {$(this).html("For Thunder Rings, Ocean Depths Monsters, Crescent Moonlight Rings, and Crescent Moon Announcements, Ocean Depths Announcement (Enchant success rate: 100%)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_CRY") {$(this).html("For Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_CURIOUS") {$(this).html("For Accessories")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_CURIOUS_100") {$(this).html("For Accessories (Enchant success rate: 100%)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_CURSE") {$(this).html("For Queen's Glory Set")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_DECEPTIVE") {$(this).html("For Scythes")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_DECIDE") {$(this).html("For Twin Swords")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_DECISION") {$(this).html("For Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_DECISIVE") {$(this).html("For Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_DEF1000DAY90") {$(this).html("For Inner Armors (Enchant success rate: 100%)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_DEF500DAY30") {$(this).html("이너아머에 가능 (인챈트 100% 성공)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_DEF500DAY60") {$(this).html("For Inner Armors (Enchant success rate: 100%)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_DEF500DAY7") {$(this).html("이너아머에 가능 (인챈트 100% 성공)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_DEF50DAY30") {$(this).html("For Inner Armors (Enchant success rate: 100%)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_DEF50DAY7") {$(this).html("이너아머에 가능 (인챈트 100% 성공)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_DELICATE") {$(this).html("For Emerald Belt, Peridot Belt, Ruby Belt, Amethyst Belt")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_DIAMOND") {$(this).html("For Shields")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_DURATION") {$(this).html("Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_ECHO") {$(this).html("For Heavy/Plate Armor - Hand & Feet")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_ELEGANT") {$(this).html("For Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_ENERGY") {$(this).html("For Tunics")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_ENLIGHTENMENT") {$(this).html("For Cloth/Light Armor -  Head & Leg")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_EXPEDITION") {$(this).html("For Heavy/Plate Armor -  Head & Leg")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_EXPEDITION_100") {$(this).html("For Heavy and Plate Armor, and Head and Leg Armor (Enchant success rate: 100%)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_EXPLOSIVE") {$(this).html("For Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_EXPLOSIVE_100") {$(this).html("For Weapons (Enchant success rate: 100%)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_EXTREME") {$(this).html("For Shields")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_FAIR") {$(this).html("For all Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_FALLENLEAF") {$(this).html("For Heavy Armor and Plate Armor")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_FALLENLEAF_100") {$(this).html("For Heavy Armor and Plate Armor (Enchant success rate: 100%)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_FALLFOLIAGE") {$(this).html("For Heavy Armor and Plate Armor")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_FAMILIAR") {$(this).html("For Tunics")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_FATAL") {$(this).html("For Light Armor")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_FERVOR") {$(this).html("Cloth and Light Armor")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_FERVOR_100") {$(this).html("For Cloth Armor and Light Armor (Enchant success rate: 100%)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_FERVOR_MOONCAKES") {$(this).html("천, 경갑 방어구에 인챈트 가능 (100%의 확률로 성공)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_FIGHT") {$(this).html("Heavy and Plate Armor")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_FINE") {$(this).html("For all items except Accessories and Spell Books.")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_FINGER_MARKED") {$(this).html("For Longswords")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_FINISHED") {$(this).html("For Tunics")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_FIRST_STEP") {$(this).html("For Pants")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_FLASH") {$(this).html("For all Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_FLUTTER") {$(this).html("For Tunics")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_FRESH") {$(this).html("For Shields and Large Shields")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_FULFILL") {$(this).html("For Helms")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_GIANT") {$(this).html("For Tunics")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_GNOLL") {$(this).html("For all Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_GOBLIN") {$(this).html("For Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_GOLEM") {$(this).html("For all Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_GRAVEL") {$(this).html("For all Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_HARD") {$(this).html("For Armor")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_HARSH") {$(this).html("For all Armor and Shields")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_HEAVY_RAIN") {$(this).html("For Spell Books")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_HIGH_MAGIC") {$(this).html("For Queen's Glory Set")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_HIGH_MANA") {$(this).html("For Gloves")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_HOPE") {$(this).html("For Twin Spears")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_HP1000DAY90") {$(this).html("이너아머에 가능 (인챈트 100% 성공)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_HP500DAY30") {$(this).html("이너아머에 가능 (인챈트 100% 성공)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_HP500DAY60") {$(this).html("이너아머에 가능 (인챈트 100% 성공)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_HP500DAY7") {$(this).html("이너아머에 가능 (인챈트 100% 성공)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_HP50DAY30") {$(this).html("이너아머에 가능 (인챈트 100% 성공)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_HP50DAY7") {$(this).html("이너아머에 가능 (인챈트 100% 성공)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_ICE_STONE") {$(this).html("For Gloves")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_INJUSTICE") {$(this).html("For All Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_INJUSTICE_100") {$(this).html("For all weapons (Enchant success rate: 100%)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_INNER_TEST") {$(this).html("이너아머에 가능 (인챈트 100% 성공)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_INSIST") {$(this).html("For all Armor and Shields")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_INTELLIGENT") {$(this).html("For Staffs")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_ITINERARY") {$(this).html("For Cloth/Light Armor -  Head & Leg")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_IVORY") {$(this).html("For all Armor and Shields.")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_JADE") {$(this).html("For all Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_JASMINE") {$(this).html("For Cloth Armor and Light Armor")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_JASMINE_100") {$(this).html("For Cloth Armor and Light Armor (Enchant success rate: 100%)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_JUDGMENT") {$(this).html("For All Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_JUSTICE") {$(this).html("For All Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_KNOWLEDGE") {$(this).html("For Spell Books")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_KOBOLD") {$(this).html("For Shields")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_LEOPARD") {$(this).html("For Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_LEOPARD_100") {$(this).html("For Weapons (Enchant success rate: 100%)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_LIGHT") {$(this).html("For Boots")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_LIKELY") {$(this).html("For Staffs")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_MAGICAL") {$(this).html("For Staffs and Scythes")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_MANA") {$(this).html("For Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_MEDIUM_MAGIC") {$(this).html("For Staffs")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_MEDIUM_MANA") {$(this).html("For all Armor and Shields.")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_MIND") {$(this).html("For Accessories")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_MIND_100") {$(this).html("For Accessories (Enchant success rate: 100%)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_MIND_MOONCAKES") {$(this).html("액세서리에 인챈트 가능 (100%의 확률로 성공)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_MIST") {$(this).html("For Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_MULTIPURPOSE") {$(this).html("For Tunics")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_NAIVE") {$(this).html("For all items except Accessories and Spell Books.")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_NOBLE") {$(this).html("For Moonlight Sapphire Brooch")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_ORNATE") {$(this).html("For Hammers")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_PASSION") {$(this).html("For Accessories")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_PASSION_100") {$(this).html("For Accessories (Enchant success rate: 100%)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_PATIENT") {$(this).html("For Tunics")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_PERIDOT") {$(this).html("For Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_PERSPICUITY") {$(this).html("For Staffs")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_PERSPICUITY_100") {$(this).html("For Staves (Enchant success rate: 100%)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_PETAL") {$(this).html("For Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_PETAL_100") {$(this).html("For Weapons (Enchant success rate: 100%)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_PETAL_MOONCAKES") {$(this).html("무기에 인챈트 가능 (100%의 확률로 성공)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_PIERCING") {$(this).html("For Scythes")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_PINE") {$(this).html("For Cloth Armor and Light Armor")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_POWERFUL") {$(this).html("For Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_PRECIOUS") {$(this).html("For all items except Accessories and Spell Books.")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_PREPARED") {$(this).html("For Shields")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_PREVENT") {$(this).html("For Shields")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_PROPER") {$(this).html("For Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_PROPERLY") {$(this).html("For Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_PROTECTED") {$(this).html("For Tunics")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_PROTECTED_100") {$(this).html("For Tunics (Enchant success rate: 100%)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_PROTECTION") {$(this).html("For Tunics")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_PROUD") {$(this).html("For Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_PUNISH") {$(this).html("For Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_PUNISH_100") {$(this).html("For Weapons (Enchant success rate: 100%)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_PVP_ENCHANT_LV40") {$(this).html("For Accessories")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_PVP_ENCHANT_LV50") {$(this).html("For Accessories")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_PVP_ENCHANT_LV60") {$(this).html("For Accessories")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_PVP_ENCHANT_LV65") {$(this).html("For Accessories")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_PVP_ENCHANT_LV70") {$(this).html("For Accessories")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_PVP_ENCHANT_LV75") {$(this).html("For Accessories")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_PVP_ENCHANT_LV80") {$(this).html("For Accessories")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_QUICKNESS") {$(this).html("For Helms")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_RAINBOW") {$(this).html("For Ivory Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_RANDOM_TEST") {$(this).html("무기에 가능")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_RELAXED") {$(this).html("For Tunics")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_REMEMBER") {$(this).html("For Heavy/Plate Armor -  Head & Leg")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_REPEATSAY") {$(this).html("For Heavy/Plate Armor - Hand & Feet")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_RESOLUTION") {$(this).html("For Twin Spears")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_RESOLUTION_100") {$(this).html("For Twin Spears (Enchant success rate: 100%)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_RESOLVE") {$(this).html("For Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_RICH") {$(this).html("For Longswords")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_RICH_100") {$(this).html("For Longswords (Enchant success rate: 100%)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_ROCK") {$(this).html("For all items except Accessories and Spell Books.")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_SAND") {$(this).html("For all Armor and Shields.")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_SAPPHIRE") {$(this).html("For Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_SERVICEABLE") {$(this).html("For Scythes")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_SHARP") {$(this).html("For Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_SHARPEDGE") {$(this).html("For Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_SHOWER") {$(this).html("For Tunics")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_SIGNIFICANT") {$(this).html("For Accessories")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_SIGNIFICANT_100") {$(this).html("For Accessories (Enchant success rate: 100%)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_SILENT") {$(this).html("For Cloth/Light Armor - Hand & Feet")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_SIMPLE") {$(this).html("For all items except Accessories and Spell Books.")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_SNOWBRANCH") {$(this).html("For Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_SOLID") {$(this).html("For Tunics")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_SOW") {$(this).html("아바타 아이템 상태효과 테스트용 데이타")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_SPEED1DAY30") {$(this).html("For Inner Armors (Enchant success rate: 100%)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_SPEED1DAY7") {$(this).html("이너아머에 가능 (인챈트 100% 성공)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_SPEED2DAY30") {$(this).html("이너아머에 가능 (인챈트 100% 성공)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_SPEED2DAY60") {$(this).html("For Inner Armors (Enchant success rate: 100%)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_SPEED2DAY7") {$(this).html("이너아머에 가능 (인챈트 100% 성공)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_SPEED3DAY90") {$(this).html("For Inner Armors (Enchant success rate: 100%)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_SPEEDY") {$(this).html("For Accessories")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_SPEEDY_100") {$(this).html("For Accessories (Enchant success rate: 100%)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_SPEEDY_MOONCAKES") {$(this).html("액세서리에 인챈트 가능 (100%의 확률로 성공)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_SPELL") {$(this).html("For all Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_SPRING_RAIN") {$(this).html("For Gloves")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_SPROUT") {$(this).html("For Boots")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_STARLIGHT") {$(this).html("Able to enchant the Moonlight Sapphire Brooch")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_STARLIGHT_100") {$(this).html("For Moonlight Sapphire Brooches (Enchant success rate: 100%)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_STATUE") {$(this).html("For all items except Accessories and Spell Books.")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_STEADY") {$(this).html("For Tunics")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_STIGMA") {$(this).html("For Chest Armor")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_STOUT") {$(this).html("For Accessories")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_STOUT_100") {$(this).html("For Accessories (Enchant success rate: 100%)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_STRANGE") {$(this).html("For Tunics")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_STRENGTH") {$(this).html("For Tunics")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_STRONG") {$(this).html("For all items except Accessories and Spell Books.")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_STRONG_BODY") {$(this).html("For Shields and Large Shields")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_STRONG_SHOT") {$(this).html("For Hammers")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_STURDY") {$(this).html("For Shields")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_SUBSTANTIAL") {$(this).html("For Tunics")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_SURPRISE") {$(this).html("For Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_SWIFT") {$(this).html("For Boots")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_TEST") {$(this).html("For Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_THRILLING") {$(this).html("For Shields")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_TIME") {$(this).html("For Chest Armor")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_TIME_100") {$(this).html("For Chest Armor (Enchant success rate: 100%)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_TRESURE") {$(this).html("For Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_TUTELARY") {$(this).html("For Heavy and Plate Armor")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_TUTELARY_100") {$(this).html("For Heavy Armor and Plate Armor (Enchant success rate: 100%)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_TWILIGHT") {$(this).html("Thunder Ring, Ocean Depths Monster, Crescent Moonlight Ring, and Crescent Moon Announcement, Ocean Depths Announcement")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_TWINKLE") {$(this).html("For Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_TYPHOON") {$(this).html("For Heavy Armor and Plate Armor")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_UNDEAD") {$(this).html("Thunder Ring, Ocean Depths Monster, Crescent Moonlight Ring, and Crescent Moon Announcement, Ocean Depths Announcement")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_UNDERDONE") {$(this).html("For Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_UNDERDONE_100") {$(this).html("For Weapons (Enchant success rate: 100%)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_VALOR") {$(this).html("For Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_VALOR_100") {$(this).html("For Weapons (Enchant success rate: 100%)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_VALUABLE") {$(this).html("For Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_VAMPIRE") {$(this).html("For all items except Accessories and Spell Books.")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_VITALITY") {$(this).html("For Accessories")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_VITALITY_100") {$(this).html("For Accessories (Enchant success rate: 100%)")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_WANTLESS") {$(this).html("For all items except Accessories and Spell Books.")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_WAVE") {$(this).html("For Cloth Armor and Light Armor")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_WEAK") {$(this).html("For Hammers")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_WHISPER") {$(this).html("For Shields")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_WILL") {$(this).html("For all items except Accessories and Spell Books.")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_WILLOW") {$(this).html("For Cloth Armor and Light Armor")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_WINDY") {$(this).html("For Twin Spears")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_WISDOM") {$(this).html("For Helms")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_WISE") {$(this).html("For Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_WISE_MAN") {$(this).html("For Spell Books")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_WRATH") {$(this).html("For Weapons")}
		if (ESContraint == "GAMEUI_HEROES_ITEMCONSTRAINT_YETI") {$(this).html("For Weapons")}
	} )
}