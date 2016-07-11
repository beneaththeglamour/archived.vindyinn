ReplaceESCondition = function(){
	$('.enchantstatconstraint').each(function(){
		EnchantCondition = $(this).attr('value')
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ACID_1") {$(this).html("Requires Life Flare Rank A or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ACID_2") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ACID_3") {$(this).html("Requires Life Flare Rank A or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ACID_4") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ADVENTURER_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ADVENTURER_100_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ADVENTURER_100_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ADVENTURER_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_AGILE_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_AGILE_2") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_AMBITION_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_AMBITION_100_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_AMBITION_100_2") {$(this).html("Requires Critical Hit Rank 7 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_AMBITION_100_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_AMBITION_100_4") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_AMBITION_2") {$(this).html("Requires Critical Hit Rank 7 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_AMBITION_3") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_AMBITION_4") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_AMBITION_MOONCAKES_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_AMBITION_MOONCAKES_2") {$(this).html("크리티컬 히트 7 랭크 이상일 때")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_AMBITION_MOONCAKES_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_AMBITION_MOONCAKES_4") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_AMETHYST_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_AMETHYST_2") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ANNOUNCEMENT_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ANNOUNCEMENT_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ANNOUNCEMENT_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ANNOUNCEMENT_4") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ANNOUNCEMENT_5") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ANNOUNCEMENT_6") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ANNOUNCEMENT_7") {$(this).html("When enchanting Cloth Armor")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ANNOUNCEMENT_8") {$(this).html("When enchanting Cloth Armor")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ANTIQUE_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ANTIQUE_100_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ANTIQUE_100_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ANTIQUE_2") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ARMADILLO_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ARMADILLO_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ARMADILLO_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ATK1000DAY90_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ATK1000DAY90_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ATK500DAY30_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ATK500DAY30_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ATK500DAY60_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ATK500DAY60_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ATK500DAY7_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ATK500DAY7_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ATK50DAY30_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ATK50DAY30_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ATK50DAY7_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ATK50DAY7_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_BALANCED_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_BALANCED_100_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_BALANCED_100_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_BALANCED_100_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_BALANCED_100_4") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_BALANCED_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_BALANCED_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_BALANCED_4") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_BASIC_MAGIC_1") {$(this).html("Requires Thousand Needles title.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_BASIC_MANA_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_BEAM_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_BEGINNERS_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_BEGINNERS_2") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_BEGINNERS_3") {$(this).html("Requires Magic Mastery Rank D or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_BERSERKER_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_BESTCOUPLE_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_BITTER_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_BITTER_100_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_BITTER_100_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_BITTER_100_3") {$(this).html("Requires Twin Sword Mastery Rank 7 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_BITTER_100_4") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_BITTER_100_5") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_BITTER_2") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_BITTER_3") {$(this).html("Requires Twin Sword Mastery Rank 7 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_BITTER_4") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_BITTER_5") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_BLIZZARD_4") {$(this).html("Requires Stone Skin Rank 7 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_BLOCK_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_BLOW_1") {$(this).html("Requires Mistaken For A Monster title.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_BLOW_2") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_BLOW_3") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_BRAVE_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_BRAVE_2") {$(this).html("Requires Combat Mastery Rank 6 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_CALM_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_CALM_2") {$(this).html("Requires Longsword Mastery Rank 8 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_CATS_EYE_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_CHANCE_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_CHANCE_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_CHARMING_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_CHARMING_2") {$(this).html("Requires Cloth Armor Proficiency Rank 7 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_CHARMING_3") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_CHARMING_4") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_CLEARNESS_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_CLEARNESS_2") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_CLOSE_1") {$(this).html("Requires Stone Skin Rank A or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_COAT_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_COAT_2") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_COAT_3") {$(this).html("Requires Level 70 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_CONSTANT_4") {$(this).html("Requires Battle Scythe Mastery Rank 7 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_CONSTANT_5") {$(this).html("Requires Battle Scythe Mastery Rank 7 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_CONVICT_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_CONVICT_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_CONVICT_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_COURAGE_2") {$(this).html("Requires Combat Mastery Rank 7 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_CRESENT_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_CRESENT_100_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_CRESENT_100_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_CRESENT_100_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_CRESENT_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_CRESENT_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_CURIOUS_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_CURIOUS_100_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_CURIOUS_100_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_CURIOUS_100_3") {$(this).html("Requires Level 65 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_CURIOUS_2") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_CURIOUS_3") {$(this).html("Requires Level 65 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_CURSE_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_DECEPTIVE_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_DECEPTIVE_2") {$(this).html("Requires Battle Scythe Mastery Rank 7 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_DECEPTIVE_3") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_DECEPTIVE_4") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_DECIDE_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_DECIDE_2") {$(this).html("Requires Twin Sword Mastery Rank 8 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_DECISIVE_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_DECISIVE_2") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_DECISIVE_3") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_DEF1000DAY90_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_DEF500DAY30_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_DEF500DAY60_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_DEF500DAY7_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_DEF50DAY30_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_DEF50DAY7_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_DELICATE_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_DELICATE_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_DELICATE_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_DELICATE_4") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_DIAMOND_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_DIAMOND_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_DIAMOND_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_DURATION_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_DURATION_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_DURATION_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_DURATION_4") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ECHO_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ECHO_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ECHO_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ECHO_4") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ECHO_5") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ECHO_6") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ECHO_7") {$(this).html("When enchanting Heavy Armor")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ECHO_8") {$(this).html("When enchanting Heavy Armor")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ENERGY_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ENERGY_2") {$(this).html("Requires Health Mastery Rank B or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ENLIGHTENMENT_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ENLIGHTENMENT_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ENLIGHTENMENT_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ENLIGHTENMENT_4") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ENLIGHTENMENT_5") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ENLIGHTENMENT_6") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ENLIGHTENMENT_7") {$(this).html("When enchanting Cloth Armor")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ENLIGHTENMENT_8") {$(this).html("When enchanting Cloth Armor")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_EXPEDITION_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_EXPEDITION_100_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_EXPEDITION_100_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_EXPEDITION_100_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_EXPEDITION_100_4") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_EXPEDITION_100_5") {$(this).html("When enchanting on a Heavy Armor")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_EXPEDITION_100_6") {$(this).html("When enchanting on a Heavy Armor")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_EXPEDITION_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_EXPEDITION_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_EXPEDITION_4") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_EXPEDITION_5") {$(this).html("When enchanting Heavy Armor")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_EXPEDITION_6") {$(this).html("When enchanting Heavy Armor")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_EXPLOSIVE_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_EXPLOSIVE_100_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_EXPLOSIVE_100_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_EXPLOSIVE_100_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_EXPLOSIVE_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_EXPLOSIVE_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_EXTREME_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_EXTREME_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_EXTREME_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FAIR_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FAIR_2") {$(this).html("Requires Ingkara Defeater title.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FALLENLEAF_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FALLENLEAF_100_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FALLENLEAF_100_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FALLENLEAF_100_3") {$(this).html("Requires Willpower Mastery Rank A or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FALLENLEAF_100_4") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FALLENLEAF_2") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FALLENLEAF_3") {$(this).html("Requires Willpower Mastery Rank A or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FALLENLEAF_4") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FALLFOLIAGE_4") {$(this).html("Requires Willpower Mastery Rank A or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FATAL_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FATAL_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FATAL_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FERVOR_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FERVOR_100_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FERVOR_100_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FERVOR_100_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FERVOR_100_4") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FERVOR_2") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FERVOR_3") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FERVOR_4") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FERVOR_MOONCAKES_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FERVOR_MOONCAKES_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FERVOR_MOONCAKES_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FERVOR_MOONCAKES_4") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FIGHT_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FIGHT_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FIGHT_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FINE_1") {$(this).html("Requires Inexcusably Ignorant title.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FINE_2") {$(this).html("Requires Inexcusably Ignorant title.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FINE_3") {$(this).html("Requires Inexcusably Ignorant title.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FINE_4") {$(this).html("Requires Inexcusably Ignorant title.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FINE_5") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FINE_6") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FINGER_MARKED_1") {$(this).html("Requires Life Flare Rank A or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FINGER_MARKED_2") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FINGER_MARKED_3") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FINISHED_1") {$(this).html("Requires Stop Drinking So Much! title.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FINISHED_2") {$(this).html("Requires Stop Drinking So Much! title.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FINISHED_3") {$(this).html("Requires Stop Drinking So Much! title.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FINISHED_4") {$(this).html("Requires Stop Drinking So Much! title.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FINISHED_5") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FINISHED_6") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FIRST_STEP_1") {$(this).html("Requires Attractively Foolish title.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FLASH_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FLASH_2") {$(this).html("Requires Combat Mastery Rank 6 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FLASH_3") {$(this).html("Requires Level 65 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FRESH_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FRESH_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_FRESH_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_GIANT_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_GNOLL_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_GOBLIN_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_GOLEM_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_GRAVEL_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_HARD_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_HARD_2") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_HARD_3") {$(this).html("Requires Strength Mastery Rank D or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_HEAVY_RAIN_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_HIGH_MAGIC_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_HIGH_MANA_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_HOPE_1") {$(this).html("Requires Wind Cutter title.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_HP1000DAY90_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_HP500DAY30_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_HP500DAY60_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_HP500DAY7_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_HP50DAY30_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_HP50DAY7_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ICE_STONE_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_INJUSTICE_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_INJUSTICE_100_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_INJUSTICE_100_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_INJUSTICE_100_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_INJUSTICE_100_4") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_INJUSTICE_100_5") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_INJUSTICE_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_INJUSTICE_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_INJUSTICE_4") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_INJUSTICE_5") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_INNER_TEST_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_INNER_TEST_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_INTELLIGENT_1") {$(this).html("Requires Staff Mastery Rank 8 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ITINERARY_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ITINERARY_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ITINERARY_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ITINERARY_4") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ITINERARY_5") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ITINERARY_6") {$(this).html("When enchanting Cloth Armor")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ITINERARY_7") {$(this).html("When enchanting Cloth Armor")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_IVORY_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_JADE_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_JASMINE_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_JASMINE_100_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_JASMINE_100_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_JASMINE_100_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_JASMINE_100_4") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_JASMINE_2") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_JASMINE_3") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_JASMINE_4") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_JUDGMENT_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_JUDGMENT_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_JUDGMENT_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_JUDGMENT_4") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_JUDGMENT_5") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_JUDGMENT_6") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_JUSTICE_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_JUSTICE_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_JUSTICE_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_JUSTICE_4") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_JUSTICE_5") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_KNOWLEDGE_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_KNOWLEDGE_2") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_KOBOLD_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_LEOPARD_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_LEOPARD_100_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_LEOPARD_100_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_LEOPARD_100_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_LEOPARD_100_4") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_LEOPARD_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_LEOPARD_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_LEOPARD_4") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_LIGHT_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_LIGHT_2") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_LIKELY_1") {$(this).html("Requires Light Armor Proficiency Rank A or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_LIKELY_2") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_LIKELY_3") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_LIKELY_4") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_MAGICAL_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_MAGICAL_2") {$(this).html("Requires Magic Mastery Rank C or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_MANA_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_MANA_2") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_MANA_3") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_MEDIUM_MAGIC_1") {$(this).html("Requires Magic Arrow Rank A or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_MEDIUM_MANA_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_MIND_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_MIND_100_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_MIND_100_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_MIND_100_3") {$(this).html("Requires Level 70 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_MIND_2") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_MIND_3") {$(this).html("Requires Level 70 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_MIND_MOONCAKES_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_MIND_MOONCAKES_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_MIND_MOONCAKES_3") {$(this).html("70레벨 이상일 때")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_MIST_4") {$(this).html("Requires Smash Mastery Rank 7 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_MULTIPURPOSE_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_MULTIPURPOSE_2") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_NAIVE_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_NOBLE_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_NOBLE_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_NOBLE_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ORNATE_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ORNATE_2") {$(this).html("Requires Long Hammer Mastery Rank 7 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ORNATE_3") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ORNATE_4") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PASSION_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PASSION_100_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PASSION_100_2") {$(this).html("Requires Level 69 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PASSION_2") {$(this).html("Requires Level 69 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PATIENT_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PATIENT_2") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PATIENT_3") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PATIENT_4") {$(this).html("Requires Meditation Rank A or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PERIDOT_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PERSPICUITY_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PERSPICUITY_100_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PERSPICUITY_100_2") {$(this).html("Requires Staff Mastery Rank 7 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PERSPICUITY_100_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PERSPICUITY_2") {$(this).html("Requires Staff Mastery Rank 7 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PERSPICUITY_3") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PETAL_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PETAL_100_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PETAL_100_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PETAL_100_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PETAL_100_4") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PETAL_2") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PETAL_3") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PETAL_4") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PETAL_MOONCAKES_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PETAL_MOONCAKES_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PETAL_MOONCAKES_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PETAL_MOONCAKES_4") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PIERCING_1") {$(this).html("Requires Battle Scythe Mastery Rank 8 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PIERCING_2") {$(this).html("Requires Battle Scythe Mastery Rank 8 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_POWERFUL_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_POWERFUL_2") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_POWERFUL_3") {$(this).html("Requires Strength Mastery Rank B or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_POWERFUL_4") {$(this).html("Requires Strength Mastery Rank B or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PRECIOUS_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PRECIOUS_2") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PRECIOUS_3") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PRECIOUS_4") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PRECIOUS_5") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PRECIOUS_6") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PREPARED_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PREPARED_2") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PREPARED_3") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PREVENT_1") {$(this).html("Requires Light Armor Proficiency Rank A or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PROPER_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PROPER_2") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PROPERLY_1") {$(this).html("Requires Combat Mastery Rank A or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PROPERLY_2") {$(this).html("Requires Combat Mastery Rank A or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PROTECTED_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PROTECTED_100_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PROTECTED_100_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PROTECTED_100_3") {$(this).html("Requires Light Armor Proficiency Rank C or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PROTECTED_100_4") {$(this).html("Requires Light Armor Proficiency Rank C or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PROTECTED_2") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PROTECTED_3") {$(this).html("Requires Light Armor Proficiency Rank C or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PROTECTED_4") {$(this).html("Requires Light Armor Proficiency Rank C or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PROTECTION_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PROTECTION_2") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PROTECTION_3") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PROUD_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PROUD_2") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PROUD_3") {$(this).html("Requires the Decent Vampire Piercer title.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PROUD_4") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PUNISH_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PUNISH_100_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PUNISH_100_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PUNISH_100_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PUNISH_100_4") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PUNISH_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PUNISH_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PUNISH_4") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PVP_ENCHANT_LV40_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PVP_ENCHANT_LV40_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PVP_ENCHANT_LV40_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PVP_ENCHANT_LV50_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PVP_ENCHANT_LV50_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PVP_ENCHANT_LV50_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PVP_ENCHANT_LV60_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PVP_ENCHANT_LV60_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PVP_ENCHANT_LV60_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PVP_ENCHANT_LV65_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PVP_ENCHANT_LV65_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PVP_ENCHANT_LV65_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PVP_ENCHANT_LV70_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PVP_ENCHANT_LV70_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PVP_ENCHANT_LV70_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PVP_ENCHANT_LV75_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PVP_ENCHANT_LV75_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PVP_ENCHANT_LV75_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PVP_ENCHANT_LV80_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PVP_ENCHANT_LV80_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_PVP_ENCHANT_LV80_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_QUICKNESS_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_QUICKNESS_2") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_QUICKNESS_3") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_RAINBOW_1") {$(this).html("Requires Hakam's Apprentice title.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_RAINBOW_2") {$(this).html("Requires Hakam's Successor title.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_RANDOM_TEST_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_RANDOM_TEST_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_RELAXED_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_RELAXED_2") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_RELAXED_3") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_REMEMBER_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_REMEMBER_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_REMEMBER_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_REMEMBER_4") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_REMEMBER_5") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_REMEMBER_6") {$(this).html("When enchanting Heavy Armor")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_REMEMBER_7") {$(this).html("When enchanting Heavy Armor")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_REPEATSAY_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_REPEATSAY_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_REPEATSAY_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_REPEATSAY_4") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_REPEATSAY_5") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_REPEATSAY_6") {$(this).html("When enchanting Heavy Armor")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_REPEATSAY_7") {$(this).html("When enchanting Heavy Armor")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_RESOLUTION_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_RESOLUTION_100_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_RESOLUTION_100_2") {$(this).html("Requires Twin Spear Mastery Rank 7 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_RESOLUTION_100_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_RESOLUTION_100_4") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_RESOLUTION_2") {$(this).html("Requires Twin Spear Mastery Rank 7 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_RESOLUTION_3") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_RESOLUTION_4") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_RESOLVE_2") {$(this).html("Requires Combat Mastery Rank 7 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_RICH_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_RICH_100_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_RICH_100_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_RICH_100_3") {$(this).html("Requires Longsword Mastery Rank 7 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_RICH_100_4") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_RICH_100_5") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_RICH_2") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_RICH_3") {$(this).html("Requires Longsword Mastery Rank 7 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_RICH_4") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_RICH_5") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_ROCK_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SAND_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SAPPHIRE_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SERVICEABLE_1") {$(this).html("Requires Life Drain Rank A or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SERVICEABLE_2") {$(this).html("Requires Life Drain Rank A or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SERVICEABLE_3") {$(this).html("Requires Life Drain Rank A or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SHARP_1") {$(this).html("Requires Cloth Armor Proficiency Rank D or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SHOWER_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SIGNIFICANT_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SIGNIFICANT_100_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SIGNIFICANT_100_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SIGNIFICANT_100_3") {$(this).html("Requires Level 68 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SIGNIFICANT_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SIGNIFICANT_3") {$(this).html("Requires Level 68 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SILENT_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SILENT_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SILENT_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SILENT_4") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SILENT_5") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SILENT_6") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SILENT_7") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SILENT_8") {$(this).html("When enchanting Cloth Armor")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SILENT_9") {$(this).html("When enchanting Cloth Armor")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SIMPLE_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SIMPLE_2") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SIMPLE_3") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SIMPLE_4") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SNOWBRANCH_3") {$(this).html("Requires Smash Mastery Rank 7 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SOLID_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SOLID_2") {$(this).html("Requires Combat Mastery Rank 6 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SOLID_3") {$(this).html("Requires Level 65 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SOW_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SPEED1DAY30_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SPEED1DAY7_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SPEED2DAY30_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SPEED2DAY60_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SPEED2DAY7_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SPEED3DAY90_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SPEEDY_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SPEEDY_100_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SPEEDY_100_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SPEEDY_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SPEEDY_MOONCAKES_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SPEEDY_MOONCAKES_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SPELL_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SPRING_RAIN_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SPROUT_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_STARLIGHT_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_STARLIGHT_100_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_STARLIGHT_100_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_STARLIGHT_100_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_STARLIGHT_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_STARLIGHT_3") {$(this).html("Requires Critical Hit Rank 7 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_STARLIGHT_4") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_STATUE_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_STEADY_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_STEADY_2") {$(this).html("Requires Cloth Armor Proficiency Rank A or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_STIGMA_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_STIGMA_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_STIGMA_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_STIGMA_4") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_STIGMA_5") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_STOUT_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_STOUT_100_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_STOUT_100_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_STOUT_100_3") {$(this).html("Requires Level 66 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_STOUT_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_STOUT_3") {$(this).html("Requires Level 66 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_STRENGTH_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_STRENGTH_2") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_STRENGTH_3") {$(this).html("Requires Health Mastery Rank C or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_STRENGTH_4") {$(this).html("Requires Health Mastery Rank C or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_STRONG_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_STRONG_2") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_STRONG_3") {$(this).html("Requires Willpower Mastery Rank D or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_STRONG_4") {$(this).html("Requires Willpower Mastery Rank D or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_STRONG_BODY_1") {$(this).html("Requires Shield Mastery Rank 8 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_STRONG_BODY_2") {$(this).html("Requires Large Shield Mastery Rank 8 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_STRONG_SHOT_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_STURDY_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_STURDY_2") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SUBSTANTIAL_1") {$(this).html("Requires Cloth Armor Proficiency Rank 8 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SUBSTANTIAL_2") {$(this).html("Requires Light Armor Proficiency Rank 8 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SUBSTANTIAL_3") {$(this).html("Requires Heavy Armor Proficiency Rank 8 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SUBSTANTIAL_4") {$(this).html("Requires Plate Armor Proficiency Rank 8 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_SWIFT_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_TEST_1") {$(this).html("When above Lv. 3")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_TEST_2") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_THRILLING_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_THRILLING_2") {$(this).html("Requires Shield Mastery Rank 7 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_THRILLING_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_TIME_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_TIME_100_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_TIME_100_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_TIME_100_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_TIME_100_4") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_TIME_100_5") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_TIME_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_TIME_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_TIME_4") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_TIME_5") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_TUTELARY_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_TUTELARY_100_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_TUTELARY_100_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_TUTELARY_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_TWILIGHT_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_TWILIGHT_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_TWILIGHT_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_TWINKLE_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_TWINKLE_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_TYPHOON_4") {$(this).html("Requires Stone Skin Rank 7 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_UNDEAD_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_UNDEAD_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_UNDEAD_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_UNDEAD_4") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_UNDERDONE_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_UNDERDONE_100_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_UNDERDONE_100_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_UNDERDONE_100_3") {$(this).html("Requires the Kobold Beater title.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_UNDERDONE_2") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_UNDERDONE_3") {$(this).html("Requires the Kobold Beater title.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_VALOR_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_VALOR_100_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_VALOR_100_2") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_VALOR_100_3") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_VALOR_100_4") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_VALOR_2") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_VALOR_3") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_VALOR_4") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_VALUABLE_3") {$(this).html("Requires the Yeti Horn Scratcher title.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_VAMPIRE_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_VAMPIRE_2") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_VAMPIRE_3") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_VAMPIRE_4") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_VITALITY_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_VITALITY_100_1") {$(this).html("")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_VITALITY_100_2") {$(this).html("Requires Level 67 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_VITALITY_2") {$(this).html("Requires Level 67 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_WANTLESS_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_WANTLESS_2") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_WANTLESS_3") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_WANTLESS_4") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_WEAK_1") {$(this).html("Requires The Stigma title.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_WHISPER_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_WILL_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_WILL_2") {$(this).html("Requires Willpower Mastery Rank C or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_WILL_3") {$(this).html("Requires Stone Skin Rank C or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_WILL_4") {$(this).html("Requires Willpower Mastery Rank C or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_WINDY_1") {$(this).html("Requires Twin Spear Mastery Rank 8 or above.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_WINDY_2") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_WISDOM_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_WISDOM_2") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_WISE_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_WISE_2") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_WISE_3") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_WISE_MAN_1") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_WISE_MAN_2") {$(this).html(" ")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_WRATH_4") {$(this).html("Requires the Yeti Horn Scratcher title.")}
		if (EnchantCondition == "GAMEUI_HEROES_ENCHANTCONDITION_YETI_1") {$(this).html("Requires Smash Mastery Rank A or above.")}
		EmptyCondition = $('this').html()
		if (EmptyCondition == "") {$(this).hide()}
	})
}