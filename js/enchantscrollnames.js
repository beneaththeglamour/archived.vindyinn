 ReplaceEnchantScrollName = function(){
	 $('.itemname').each(function(){
		EnchantScrollName = $(this).attr('value')
		UpperEnchantName = EnchantScrollName.toUpperCase()
		if (UpperEnchantName == "ACID") {$(this).prepend("Swift")}
		if (UpperEnchantName == "ADROIT") {$(this).prepend("Even")}
		if (UpperEnchantName == "ADVENTURER") {$(this).prepend("Explorer's")}
		if (UpperEnchantName == "ADVENTURER_100") {$(this).prepend("Explorer's")}
		if (UpperEnchantName == "AGILE") {$(this).prepend("Lightning")}
		if (UpperEnchantName == "ANTIQUE") {$(this).prepend("Impending")}
		if (UpperEnchantName == "ANTIQUE_100") {$(this).prepend("Impending")}
		if (UpperEnchantName == "ATK1000DAY90") {$(this).prepend("Very Heartless")}
		if (UpperEnchantName == "ATK500DAY30") {$(this).prepend("꽤 냉혹한")}
		if (UpperEnchantName == "ATK500DAY60") {$(this).prepend("Quite Heartless")}
		if (UpperEnchantName == "ATK500DAY7") {$(this).prepend("꽤 냉혹한")}
		if (UpperEnchantName == "ATK50DAY30") {$(this).prepend("Heartless")}
		if (UpperEnchantName == "ATK50DAY7") {$(this).prepend("냉혹한")}
		if (UpperEnchantName == "AWKWARD") {$(this).prepend("Blunt")}
		if (UpperEnchantName == "BALANCED") {$(this).prepend("Well-balanced")}
		if (UpperEnchantName == "BALANCED_100") {$(this).prepend("Well-balanced")}
		if (UpperEnchantName == "BEGINNERS") {$(this).prepend("Disciple's")}
		if (UpperEnchantName == "BERSERKER") {$(this).prepend("분노의")}
		if (UpperEnchantName == "BITTER") {$(this).prepend("Relentless")}
		if (UpperEnchantName == "BITTER_100") {$(this).prepend("Relentless")}
		if (UpperEnchantName == "BLOW") {$(this).prepend("Fatal")}
		if (UpperEnchantName == "BRAVE") {$(this).prepend("Brave")}
		if (UpperEnchantName == "CALM") {$(this).prepend("Focused")}
		if (UpperEnchantName == "CHANGEABLE") {$(this).prepend("Cautious")}
		if (UpperEnchantName == "CHARMING") {$(this).prepend("Vibrant")}
		if (UpperEnchantName == "CLEARNESS") {$(this).prepend("Nimble")}
		if (UpperEnchantName == "CLOSE") {$(this).prepend("Invincible")}
		if (UpperEnchantName == "CONSTANT") {$(this).prepend("Aggressive")}
		if (UpperEnchantName == "CRESENT") {$(this).prepend("Crescent Moonlight's")}
		if (UpperEnchantName == "CRESENT_100") {$(this).prepend("Crescent Moonlight's")}
		if (UpperEnchantName == "CURIOUS") {$(this).prepend("Warlord's")}
		if (UpperEnchantName == "CURIOUS_100") {$(this).prepend("Warlord's")}
		if (UpperEnchantName == "DECEPTIVE") {$(this).prepend("Intense")}
		if (UpperEnchantName == "DECIDE") {$(this).prepend("Determined")}
		if (UpperEnchantName == "DECISIVE") {$(this).prepend("Decisive")}
		if (UpperEnchantName == "DEF1000DAY90") {$(this).prepend("Very Benevolent")}
		if (UpperEnchantName == "DEF500DAY30") {$(this).prepend("꽤 자비로운")}
		if (UpperEnchantName == "DEF500DAY60") {$(this).prepend("Quite Benevolent")}
		if (UpperEnchantName == "DEF500DAY7") {$(this).prepend("꽤 자비로운")}
		if (UpperEnchantName == "DEF50DAY30") {$(this).prepend("Benevolent")}
		if (UpperEnchantName == "DEF50DAY7") {$(this).prepend("자비로운")}
		if (UpperEnchantName == "DELICATE") {$(this).prepend("Subdued")}
		if (UpperEnchantName == "DURATION") {$(this).prepend("Consistent")}
		if (UpperEnchantName == "ELEGANT") {$(this).prepend("Elegant")}
		if (UpperEnchantName == "ENERGY") {$(this).prepend("Vigorous")}
		if (UpperEnchantName == "ENLIGHTENMENT") {$(this).prepend("Enlightened")}
		if (UpperEnchantName == "EXPLOSIVE") {$(this).prepend("Explosive")}
		if (UpperEnchantName == "EXPLOSIVE_100") {$(this).prepend("Explosive")}
		if (UpperEnchantName == "EXTREME") {$(this).prepend("Extreme")}
		if (UpperEnchantName == "FAIR") {$(this).prepend("Fair")}
		if (UpperEnchantName == "FAMILIAR") {$(this).prepend("Adamant")}
		if (UpperEnchantName == "FINE") {$(this).prepend("Quality")}
		if (UpperEnchantName == "FINGER_MARKED") {$(this).prepend("Tactician's")}
		if (UpperEnchantName == "FINISHED") {$(this).prepend("Balanced")}
		if (UpperEnchantName == "FLASH") {$(this).prepend("Fleet")}
		if (UpperEnchantName == "FLUTTER") {$(this).prepend("Eternal")}
		if (UpperEnchantName == "FRESH") {$(this).prepend("Fresh")}
		if (UpperEnchantName == "HARD") {$(this).prepend("Bold")}
		if (UpperEnchantName == "HARSH") {$(this).prepend("Stinging")}
		if (UpperEnchantName == "HP1000DAY90") {$(this).prepend("매우 관대한")}
		if (UpperEnchantName == "HP500DAY30") {$(this).prepend("꽤 관대한")}
		if (UpperEnchantName == "HP500DAY60") {$(this).prepend("꽤 관대한")}
		if (UpperEnchantName == "HP500DAY7") {$(this).prepend("꽤 관대한")}
		if (UpperEnchantName == "HP50DAY30") {$(this).prepend("관대한")}
		if (UpperEnchantName == "HP50DAY7") {$(this).prepend("관대한")}
		if (UpperEnchantName == "INJUSTICE") {$(this).prepend("Immoral")}
		if (UpperEnchantName == "INJUSTICE_100") {$(this).prepend("Immoral")}
		if (UpperEnchantName == "INNER_TEST") {$(this).prepend("젠틀맨")}
		if (UpperEnchantName == "INSIST") {$(this).prepend("Stalwart")}
		if (UpperEnchantName == "INTELLIGENT") {$(this).prepend("Sorcerer's")}
		if (UpperEnchantName == "JUSTICE") {$(this).prepend("Righteous")}
		if (UpperEnchantName == "KNOWLEDGE") {$(this).prepend("Apprentice's")}
		if (UpperEnchantName == "LEOPARD") {$(this).prepend("Leopard's")}
		if (UpperEnchantName == "LEOPARD_100") {$(this).prepend("Leopard's")}
		if (UpperEnchantName == "LIGHT") {$(this).prepend("Graceful")}
		if (UpperEnchantName == "LIKELY") {$(this).prepend("Surging")}
		if (UpperEnchantName == "MAGICAL") {$(this).prepend("Magical")}
		if (UpperEnchantName == "MANA") {$(this).prepend("Empowered")}
		if (UpperEnchantName == "MULTIPURPOSE") {$(this).prepend("Endless")}
		if (UpperEnchantName == "NAIVE") {$(this).prepend("Trusty")}
		if (UpperEnchantName == "ORNATE") {$(this).prepend("Ornate")}
		if (UpperEnchantName == "PATIENT") {$(this).prepend("Tenacious")}
		if (UpperEnchantName == "PERSPICUITY") {$(this).prepend("Hateful")}
		if (UpperEnchantName == "PERSPICUITY_100") {$(this).prepend("Hateful")}
		if (UpperEnchantName == "PIERCING") {$(this).prepend("Forceful")}
		if (UpperEnchantName == "POWERFUL") {$(this).prepend("Powerful")}
		if (UpperEnchantName == "PRECIOUS") {$(this).prepend("Rounded")}
		if (UpperEnchantName == "PREPARED") {$(this).prepend("Heavy")}
		if (UpperEnchantName == "PREVENT") {$(this).prepend("Sturdy")}
		if (UpperEnchantName == "PROPER") {$(this).prepend("Clear")}
		if (UpperEnchantName == "PROPERLY") {$(this).prepend("Honed")}
		if (UpperEnchantName == "PROTECTED") {$(this).prepend("Hardy")}
		if (UpperEnchantName == "PROTECTED_100") {$(this).prepend("Hardy")}
		if (UpperEnchantName == "PROUD") {$(this).prepend("Prideful")}
		if (UpperEnchantName == "QUICKNESS") {$(this).prepend("Quick")}
		if (UpperEnchantName == "RANDOM_TEST") {$(this).prepend("테스트")}
		if (UpperEnchantName == "RELAXED") {$(this).prepend("Fitted")}
		if (UpperEnchantName == "REMEMBER") {$(this).prepend("Memorable")}
		if (UpperEnchantName == "REPEATSAY") {$(this).prepend("Reinforced")}
		if (UpperEnchantName == "RESOLUTION") {$(this).prepend("Adjusted")}
		if (UpperEnchantName == "RESOLUTION_100") {$(this).prepend("Resolute")}
		if (UpperEnchantName == "RICH") {$(this).prepend("Enhanced")}
		if (UpperEnchantName == "RICH_100") {$(this).prepend("Enhanced")}
		if (UpperEnchantName == "SERVICEABLE") {$(this).prepend("Sharp")}
		if (UpperEnchantName == "SHARP") {$(this).prepend("Tempered")}
		if (UpperEnchantName == "SHARPEDGE") {$(this).prepend("Keen")}
		if (UpperEnchantName == "SIGNIFICANT") {$(this).prepend("Significant")}
		if (UpperEnchantName == "SIGNIFICANT_100") {$(this).prepend("Significant")}
		if (UpperEnchantName == "SILENT") {$(this).prepend("Silent")}
		if (UpperEnchantName == "SIMPLE") {$(this).prepend("Fair")}
		if (UpperEnchantName == "SOLID") {$(this).prepend("Solid")}
		if (UpperEnchantName == "SOW") {$(this).prepend("SOW")}
		if (UpperEnchantName == "SPEED1DAY30") {$(this).prepend("Hasty")}
		if (UpperEnchantName == "SPEED1DAY7") {$(this).prepend("성급한")}
		if (UpperEnchantName == "SPEED2DAY30") {$(this).prepend("꽤 성급한")}
		if (UpperEnchantName == "SPEED2DAY60") {$(this).prepend("Quite Hasty")}
		if (UpperEnchantName == "SPEED2DAY7") {$(this).prepend("꽤 성급한")}
		if (UpperEnchantName == "SPEED3DAY90") {$(this).prepend("Very Hasty")}
		if (UpperEnchantName == "SPEEDY") {$(this).prepend("Fast")}
		if (UpperEnchantName == "SPEEDY_100") {$(this).prepend("Fast")}
		if (UpperEnchantName == "SPEEDY_MOONCAKES") {$(this).prepend("신속한")}
		if (UpperEnchantName == "STARLIGHT") {$(this).prepend("Starlight")}
		if (UpperEnchantName == "STARLIGHT_100") {$(this).prepend("Starlight")}
		if (UpperEnchantName == "STEADY") {$(this).prepend("Enduring")}
		if (UpperEnchantName == "STOUT") {$(this).prepend("Strong")}
		if (UpperEnchantName == "STOUT_100") {$(this).prepend("Strong")}
		if (UpperEnchantName == "STRANGE") {$(this).prepend("Odd")}
		if (UpperEnchantName == "STRENGTH") {$(this).prepend("Burly")}
		if (UpperEnchantName == "STRONG") {$(this).prepend("Driven")}
		if (UpperEnchantName == "STRONG_BODY") {$(this).prepend("Resilient")}
		if (UpperEnchantName == "STRONG_SHOT") {$(this).prepend("Fierce")}
		if (UpperEnchantName == "STURDY") {$(this).prepend("Protective")}
		if (UpperEnchantName == "SUBSTANTIAL") {$(this).prepend("Unyielding")}
		if (UpperEnchantName == "SURPRISE") {$(this).prepend("Wild")}
		if (UpperEnchantName == "SWIFT") {$(this).prepend("Agile")}
		if (UpperEnchantName == "TEST") {$(this).prepend("Training")}
		if (UpperEnchantName == "THRILLING") {$(this).prepend("Tricky")}
		if (UpperEnchantName == "TIME") {$(this).prepend("Temporal")}
		if (UpperEnchantName == "TIME_100") {$(this).prepend("Time's")}
		if (UpperEnchantName == "TUTELARY") {$(this).prepend("Tutelary")}
		if (UpperEnchantName == "TUTELARY_100") {$(this).prepend("Tutelary")}
		if (UpperEnchantName == "TWILIGHT") {$(this).prepend("Twilight")}
		if (UpperEnchantName == "TWINKLE") {$(this).prepend("Twinkling")}
		if (UpperEnchantName == "UNDEAD") {$(this).prepend("The Dead")}
		if (UpperEnchantName == "UNDERDONE") {$(this).prepend("Gallant")}
		if (UpperEnchantName == "UNDERDONE_100") {$(this).prepend("Gallant")}
		if (UpperEnchantName == "VALUABLE") {$(this).prepend("Staggering")}
		if (UpperEnchantName == "WANTLESS") {$(this).prepend("Fine")}
		if (UpperEnchantName == "WILL") {$(this).prepend("Daring")}
		if (UpperEnchantName == "WINDY") {$(this).prepend("Fateful")}
		if (UpperEnchantName == "WISDOM") {$(this).prepend("Scholar's")}
		if (UpperEnchantName == "WISE") {$(this).prepend("Mage's")}
		if (UpperEnchantName == "WISE_MAN") {$(this).prepend("Sage's")}
		if (UpperEnchantName == "WRATH") {$(this).prepend("Wrathful")}
		if (UpperEnchantName == "AMBITION") {$(this).prepend("Maelstrom")}
		if (UpperEnchantName == "AMBITION_100") {$(this).prepend("Maelstrom")}
		if (UpperEnchantName == "AMBITION_MOONCAKES") {$(this).prepend("야망")}
		if (UpperEnchantName == "AMETHYST") {$(this).prepend("Command")}
		if (UpperEnchantName == "ANNOUNCEMENT") {$(this).prepend("Declarative")}
		if (UpperEnchantName == "ARMADILLO") {$(this).prepend("Armadillo")}
		if (UpperEnchantName == "BASIC_MAGIC") {$(this).prepend("Speed")}
		if (UpperEnchantName == "BASIC_MANA") {$(this).prepend("Vitality")}
		if (UpperEnchantName == "BEAM") {$(this).prepend("Pain")}
		if (UpperEnchantName == "BESTCOUPLE") {$(this).prepend("베스트 커플")}
		if (UpperEnchantName == "BLIZZARD") {$(this).prepend("Bulwark")}
		if (UpperEnchantName == "BLOCK") {$(this).prepend("Energy")}
		if (UpperEnchantName == "CATS_EYE") {$(this).prepend("Witchcraft")}
		if (UpperEnchantName == "CHANCE") {$(this).prepend("Chance")}
		if (UpperEnchantName == "COAT") {$(this).prepend("Dominance")}
		if (UpperEnchantName == "CONVICT") {$(this).prepend("Spirited")}
		if (UpperEnchantName == "COURAGE") {$(this).prepend("Frenzy")}
		if (UpperEnchantName == "CRY") {$(this).prepend("Madness")}
		if (UpperEnchantName == "CURSE") {$(this).prepend("Rage")}
		if (UpperEnchantName == "DECISION") {$(this).prepend("Strike")}
		if (UpperEnchantName == "DIAMOND") {$(this).prepend("Diamond")}
		if (UpperEnchantName == "ECHO") {$(this).prepend("Echoing")}
		if (UpperEnchantName == "EXPEDITION") {$(this).prepend("Expeditionary")}
		if (UpperEnchantName == "EXPEDITION_100") {$(this).prepend("Expedition")}
		if (UpperEnchantName == "FALLENLEAF") {$(this).prepend("Sentinel")}
		if (UpperEnchantName == "FALLENLEAF_100") {$(this).prepend("Sentinel")}
		if (UpperEnchantName == "FALLFOLIAGE") {$(this).prepend("Defender")}
		if (UpperEnchantName == "FATAL") {$(this).prepend("Deadly")}
		if (UpperEnchantName == "FERVOR") {$(this).prepend("Enthusiastic")}
		if (UpperEnchantName == "FERVOR_100") {$(this).prepend("Vivacious")}
		if (UpperEnchantName == "FERVOR_MOONCAKES") {$(this).prepend("열의")}
		if (UpperEnchantName == "FIGHT") {$(this).prepend("Resistant")}
		if (UpperEnchantName == "FIRST_STEP") {$(this).prepend("Agony")}
		if (UpperEnchantName == "FULFILL") {$(this).prepend("Slayer")}
		if (UpperEnchantName == "GIANT") {$(this).prepend("Stone")}
		if (UpperEnchantName == "GNOLL") {$(this).prepend("Gnoll")}
		if (UpperEnchantName == "GOBLIN") {$(this).prepend("Goblin")}
		if (UpperEnchantName == "GOLEM") {$(this).prepend("Golem")}
		if (UpperEnchantName == "GRAVEL") {$(this).prepend("Toughness")}
		if (UpperEnchantName == "HEAVY_RAIN") {$(this).prepend("Chaos")}
		if (UpperEnchantName == "HIGH_MAGIC") {$(this).prepend("Brilliance")}
		if (UpperEnchantName == "HIGH_MANA") {$(this).prepend("Fury")}
		if (UpperEnchantName == "HOPE") {$(this).prepend("Destiny")}
		if (UpperEnchantName == "ICE_STONE") {$(this).prepend("Spellcraft")}
		if (UpperEnchantName == "ITINERARY") {$(this).prepend("Journeying")}
		if (UpperEnchantName == "IVORY") {$(this).prepend("Resolve")}
		if (UpperEnchantName == "JADE") {$(this).prepend("Conjuring")}
		if (UpperEnchantName == "JASMINE") {$(this).prepend("Force")}
		if (UpperEnchantName == "JASMINE_100") {$(this).prepend("Force")}
		if (UpperEnchantName == "JUDGMENT") {$(this).prepend("Judgment")}
		if (UpperEnchantName == "KOBOLD") {$(this).prepend("Kobold")}
		if (UpperEnchantName == "MEDIUM_MAGIC") {$(this).prepend("Resurgence")}
		if (UpperEnchantName == "MEDIUM_MANA") {$(this).prepend("Rejuvenation")}
		if (UpperEnchantName == "MIND") {$(this).prepend("Berserker")}
		if (UpperEnchantName == "MIND_100") {$(this).prepend("Berserker")}
		if (UpperEnchantName == "MIND_MOONCAKES") {$(this).prepend("마음")}
		if (UpperEnchantName == "MIST") {$(this).prepend("Tempest")}
		if (UpperEnchantName == "NOBLE") {$(this).prepend("Incorruptible")}
		if (UpperEnchantName == "PASSION") {$(this).prepend("Passion")}
		if (UpperEnchantName == "PASSION_100") {$(this).prepend("Passion")}
		if (UpperEnchantName == "PERIDOT") {$(this).prepend("Wizardry")}
		if (UpperEnchantName == "PETAL") {$(this).prepend("Bloodlust")}
		if (UpperEnchantName == "PETAL_100") {$(this).prepend("Bloodlust")}
		if (UpperEnchantName == "PETAL_MOONCAKES") {$(this).prepend("꽃잎")}
		if (UpperEnchantName == "PINE") {$(this).prepend("Accord")}
		if (UpperEnchantName == "PROTECTION") {$(this).prepend("Master")}
		if (UpperEnchantName == "PUNISH") {$(this).prepend("Divine Punishment")}
		if (UpperEnchantName == "PUNISH_100") {$(this).prepend("Divine Punishment")}
		if (UpperEnchantName == "PVP_ENCHANT_LV40") {$(this).prepend("Soldier")}
		if (UpperEnchantName == "PVP_ENCHANT_LV50") {$(this).prepend("Knight")}
		if (UpperEnchantName == "PVP_ENCHANT_LV60") {$(this).prepend("Bishop")}
		if (UpperEnchantName == "PVP_ENCHANT_LV65") {$(this).prepend("Rook")}
		if (UpperEnchantName == "PVP_ENCHANT_LV70") {$(this).prepend("Queen")}
		if (UpperEnchantName == "PVP_ENCHANT_LV75") {$(this).prepend("King")}
		if (UpperEnchantName == "PVP_ENCHANT_LV80") {$(this).prepend("Emperor")}
		if (UpperEnchantName == "RAINBOW") {$(this).prepend("Oblivion")}
		if (UpperEnchantName == "RESOLVE") {$(this).prepend("Skill")}
		if (UpperEnchantName == "ROCK") {$(this).prepend("Safety")}
		if (UpperEnchantName == "SAND") {$(this).prepend("Resistance")}
		if (UpperEnchantName == "SAPPHIRE") {$(this).prepend("Arcana")}
		if (UpperEnchantName == "SHOWER") {$(this).prepend("Restoration")}
		if (UpperEnchantName == "SNOWBRANCH") {$(this).prepend("Might")}
		if (UpperEnchantName == "SPELL") {$(this).prepend("Suffering")}
		if (UpperEnchantName == "SPRING_RAIN") {$(this).prepend("Vigilance")}
		if (UpperEnchantName == "SPROUT") {$(this).prepend("Zeal")}
		if (UpperEnchantName == "STARLIGHT") {$(this).prepend("Annihilation")}
		if (UpperEnchantName == "STATUE") {$(this).prepend("Illusion")}
		if (UpperEnchantName == "STIGMA") {$(this).prepend("Stigma")}
		if (UpperEnchantName == "TEST") {$(this).prepend("Test")}
		if (UpperEnchantName == "TRESURE") {$(this).prepend("Ruin")}
		if (UpperEnchantName == "TYPHOON") {$(this).prepend("Palisade")}
		if (UpperEnchantName == "VALOR") {$(this).prepend("Valor")}
		if (UpperEnchantName == "VALOR_100") {$(this).prepend("Valor")}
		if (UpperEnchantName == "VAMPIRE") {$(this).prepend("Vampire")}
		if (UpperEnchantName == "VITALITY") {$(this).prepend("Healthy")}
		if (UpperEnchantName == "VITALITY_100") {$(this).prepend("Healthy")}
		if (UpperEnchantName == "WAVE") {$(this).prepend("Savvy")}
		if (UpperEnchantName == "WEAK") {$(this).prepend("Striking")}
		if (UpperEnchantName == "WHISPER") {$(this).prepend("Misery")}
		if (UpperEnchantName == "WILLOW") {$(this).prepend("Refuge")}
		if (UpperEnchantName == "YETI") {$(this).prepend("Yeti")}
	 })
}