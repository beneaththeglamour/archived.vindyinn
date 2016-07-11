ReplaceESStats = function() {
	$('.enchantstat').each(function(){
		EnchantStat = $(this).attr('value')
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ACID_1") {$(this).html("Critical rate +2%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ACID_2") {$(this).html("AGI +5")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ACID_3") {$(this).html("ATT -20")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ACID_4") {$(this).html("HP -5")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ADROIT_1") {$(this).html("Balance +3")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ADROIT_2") {$(this).html("ATT -60")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ADVENTURER_1") {$(this).html("Balance +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ADVENTURER_100_1") {$(this).html("Balance +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ADVENTURER_100_2") {$(this).html("DEF +200")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ADVENTURER_2") {$(this).html("DEF +200")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_AGILE_1") {$(this).html("AGI +13")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_AGILE_2") {$(this).html("STR -2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_AMBITION_1") {$(this).html("Balance -2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_AMBITION_100_1") {$(this).html("Balance -2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_AMBITION_100_2") {$(this).html("Attack Speed +1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_AMBITION_100_3") {$(this).html("ATT +752")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_AMBITION_100_4") {$(this).html("Critical Rate +2%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_AMBITION_2") {$(this).html("Attack Speed +1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_AMBITION_3") {$(this).html("ATT +752")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_AMBITION_4") {$(this).html("Critical Rate +2%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_AMBITION_MOONCAKES_1") {$(this).html("밸런스 2 감소")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_AMBITION_MOONCAKES_2") {$(this).html("공격속도 1 증가")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_AMBITION_MOONCAKES_3") {$(this).html("공격력 752 증가")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_AMBITION_MOONCAKES_4") {$(this).html("크리티컬 2% 증가")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_AMETHYST_1") {$(this).html("INT +10")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_AMETHYST_2") {$(this).html("STR +10")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ANNOUNCEMENT_1") {$(this).html("Critical Resistance +1%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ANNOUNCEMENT_2") {$(this).html("Balance +4")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ANNOUNCEMENT_3") {$(this).html("Attack Speed +1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ANNOUNCEMENT_4") {$(this).html("DEF -330")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ANNOUNCEMENT_5") {$(this).html("ATT +330")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ANNOUNCEMENT_6") {$(this).html("M. ATT +330")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ANNOUNCEMENT_7") {$(this).html("ATT +35")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ANNOUNCEMENT_8") {$(this).html("M. ATT +35")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ANTIQUE_1") {$(this).html("Attack Speed -1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ANTIQUE_100_1") {$(this).html("Attack Speed -1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ANTIQUE_100_2") {$(this).html("ATT +320")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ANTIQUE_2") {$(this).html("ATT +320")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ARMADILLO_1") {$(this).html("DEF +336")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ARMADILLO_2") {$(this).html("Stamina +5")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ARMADILLO_3") {$(this).html("HP -100")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ATK1000DAY90_1") {$(this).html("ATT +1000")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ATK1000DAY90_2") {$(this).html("M. ATT +1000")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ATK500DAY30_1") {$(this).html("공격력 500 증가")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ATK500DAY30_2") {$(this).html("마법공격력 500 증가")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ATK500DAY60_1") {$(this).html("ATT +500")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ATK500DAY60_2") {$(this).html("M. ATT +500")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ATK500DAY7_1") {$(this).html("공격력 500 증가")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ATK500DAY7_2") {$(this).html("마법공격력 500 증가")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ATK50DAY30_1") {$(this).html("ATT +{0}")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ATK50DAY30_2") {$(this).html("M. ATT +{0}")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ATK50DAY7_1") {$(this).html("공격력 {0} 증가")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ATK50DAY7_2") {$(this).html("마법공격력 {0} 증가")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_AWKWARD_1") {$(this).html("Balance -3")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_AWKWARD_2") {$(this).html("Attack Speed +1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_AWKWARD_3") {$(this).html("DEF +180")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_BALANCED_1") {$(this).html("Attack Speed +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_BALANCED_100_1") {$(this).html("Attack Speed +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_BALANCED_100_2") {$(this).html("Balance +1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_BALANCED_100_3") {$(this).html("Critical Rate +1%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_BALANCED_100_4") {$(this).html("Critical Resistance -1%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_BALANCED_2") {$(this).html("Balance +1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_BALANCED_3") {$(this).html("Critical Rate +1%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_BALANCED_4") {$(this).html("Critical Resistance -1%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_BASIC_MAGIC_1") {$(this).html("Grants a chance to increase your AGI by 700 and drain HP for 30 seconds.")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_BASIC_MANA_1") {$(this).html("Recovers HP over time.")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_BEAM_1") {$(this).html("Damages the opponent over time.")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_BEGINNERS_1") {$(this).html("INT +6")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_BEGINNERS_2") {$(this).html("AGI -5")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_BEGINNERS_3") {$(this).html("INT +5")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_BERSERKER_1") {$(this).html("일정 확률로 60초간 공격력 3000, 마법 공격력 3000 증가")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_BESTCOUPLE_1") {$(this).html("사랑이 샘솟는 베스트 커플")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_BITTER_1") {$(this).html("Balance +5")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_BITTER_100_1") {$(this).html("Balance +5")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_BITTER_100_2") {$(this).html("Attack Speed +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_BITTER_100_3") {$(this).html("Attack Speed +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_BITTER_100_4") {$(this).html("ATT -64")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_BITTER_100_5") {$(this).html("Critical Rate +3%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_BITTER_2") {$(this).html("Attack Speed +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_BITTER_3") {$(this).html("Attack Speed +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_BITTER_4") {$(this).html("ATT -64")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_BITTER_5") {$(this).html("Critical Rate 3%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_BLIZZARD_1") {$(this).html("Balance -1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_BLIZZARD_2") {$(this).html("DEF +158")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_BLIZZARD_3") {$(this).html("Critical Resistance +1%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_BLIZZARD_4") {$(this).html("Critical Resistance +2%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_BLOCK_1") {$(this).html("Grants a chance to recover Stamina.")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_BLOW_1") {$(this).html("Critical rate +1%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_BLOW_2") {$(this).html("ATT +12")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_BLOW_3") {$(this).html("AGI -3")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_BRAVE_1") {$(this).html("Balance +1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_BRAVE_2") {$(this).html("Balance +1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_CALM_1") {$(this).html("WIL +15")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_CALM_2") {$(this).html("STR +12")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_CATS_EYE_1") {$(this).html("M. ATT +50")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_CHANCE_1") {$(this).html("Balance -15")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_CHANCE_2") {$(this).html("Critical Rate +12%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_CHANGEABLE_1") {$(this).html("Attack Speed -1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_CHANGEABLE_2") {$(this).html("Critical Resistance +2%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_CHARMING_1") {$(this).html("HP +80")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_CHARMING_2") {$(this).html("HP +120")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_CHARMING_3") {$(this).html("ATT -40")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_CHARMING_4") {$(this).html("Critical Resistance -5%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_CLEARNESS_1") {$(this).html("Balance +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_CLEARNESS_2") {$(this).html("Attack Speed +1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_CLOSE_1") {$(this).html("DEF +184")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_COAT_1") {$(this).html("ATT +150")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_COAT_2") {$(this).html("M. ATT +150")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_COAT_3") {$(this).html("While attacking, Balance +30 and +2 Stamina per sec for 60 sec")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_CONSTANT_1") {$(this).html("Balance -2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_CONSTANT_2") {$(this).html("Attack Speed -1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_CONSTANT_3") {$(this).html("ATT +250")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_CONSTANT_4") {$(this).html("ATT +145")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_CONSTANT_5") {$(this).html("M. ATT +324")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_CONVICT_1") {$(this).html("Critical Rate +6%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_CONVICT_2") {$(this).html("ATT +680")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_CONVICT_3") {$(this).html("M. ATT +680")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_COURAGE_1") {$(this).html("Balance +3")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_COURAGE_2") {$(this).html("Attack Speed +3")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_COURAGE_3") {$(this).html("HP -190")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_COURAGE_4") {$(this).html("DEF -45")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_CRESENT_1") {$(this).html("100 ATT")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_CRESENT_100_1") {$(this).html("ATT +100")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_CRESENT_100_2") {$(this).html("M. ATT +100")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_CRESENT_100_3") {$(this).html("Balance +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_CRESENT_2") {$(this).html("100 M. ATT")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_CRESENT_3") {$(this).html("2 Balance")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_CRY_1") {$(this).html("Balance +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_CRY_2") {$(this).html("Attack Speed +1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_CRY_3") {$(this).html("DEF -180")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_CURIOUS_1") {$(this).html("STR +6")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_CURIOUS_100_1") {$(this).html("STR +6")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_CURIOUS_100_2") {$(this).html("INT +6")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_CURIOUS_100_3") {$(this).html("DEF +130")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_CURIOUS_2") {$(this).html("INT +6")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_CURIOUS_3") {$(this).html("DEF +130")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_CURSE_1") {$(this).html("Grants a chance to increase your STR by 500 and drain HP for 30 seconds.")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_DECEPTIVE_1") {$(this).html("Balance +5")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_DECEPTIVE_2") {$(this).html("Attack Speed +3")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_DECEPTIVE_3") {$(this).html("ATT -65")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_DECEPTIVE_4") {$(this).html("M. ATT -61")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_DECIDE_1") {$(this).html("WIL +15")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_DECIDE_2") {$(this).html("STR +12")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_DECISION_1") {$(this).html("Balance +4")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_DECISION_2") {$(this).html("Attack Speed +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_DECISION_3") {$(this).html("HP -120")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_DECISIVE_1") {$(this).html("Balance +1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_DECISIVE_2") {$(this).html("ATT -40")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_DECISIVE_3") {$(this).html("Critical Rate +3%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_DEF1000DAY90_1") {$(this).html("DEF +1000")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_DEF500DAY30_1") {$(this).html("방어력 500 증가")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_DEF500DAY60_1") {$(this).html("DEF +500")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_DEF500DAY7_1") {$(this).html("방어력 500 증가")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_DEF50DAY30_1") {$(this).html("DEF +{0}")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_DEF50DAY7_1") {$(this).html("방어력 {0} 증가")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_DELICATE_1") {$(this).html("Critical Rate +2%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_DELICATE_2") {$(this).html("Critical Resistance -3%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_DELICATE_3") {$(this).html("Attack Speed 1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_DELICATE_4") {$(this).html("Stamina + 5")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_DIAMOND_1") {$(this).html("DEF +62")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_DIAMOND_2") {$(this).html("Critical Resistance +3%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_DIAMOND_3") {$(this).html("HP -50")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_DURATION_1") {$(this).html("-280 ATT")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_DURATION_2") {$(this).html("-280 M. ATT")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_DURATION_3") {$(this).html("+4 Attack Speed")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_DURATION_4") {$(this).html("+5 Balance")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ECHO_1") {$(this).html("Critical Resistance +2%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ECHO_2") {$(this).html("Balance +4")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ECHO_3") {$(this).html("Attack Speed +1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ECHO_4") {$(this).html("DEF -260")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ECHO_5") {$(this).html("ATT +190")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ECHO_6") {$(this).html("M. ATT +190")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ECHO_7") {$(this).html("ATT +35")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ECHO_8") {$(this).html("M. ATT +35")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ELEGANT_1") {$(this).html("Attack Speed +4")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ELEGANT_2") {$(this).html("Stamina -10")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ELEGANT_3") {$(this).html("Critical Rate +3%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ENERGY_1") {$(this).html("HP +10")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ENERGY_2") {$(this).html("HP +12")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ENLIGHTENMENT_1") {$(this).html("Critical Rate +2%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ENLIGHTENMENT_2") {$(this).html("Critical Resistance +1%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ENLIGHTENMENT_3") {$(this).html("Balance +1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ENLIGHTENMENT_4") {$(this).html("Attack Speed +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ENLIGHTENMENT_5") {$(this).html("ATT +210")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ENLIGHTENMENT_6") {$(this).html("M. ATT +210")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ENLIGHTENMENT_7") {$(this).html("ATT +35")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ENLIGHTENMENT_8") {$(this).html("M. ATT +35")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_EXPEDITION_1") {$(this).html("Critical Resistance +4%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_EXPEDITION_100_1") {$(this).html("Critical Resistance 4%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_EXPEDITION_100_2") {$(this).html("DEF + 280")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_EXPEDITION_100_3") {$(this).html("ATT 170")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_EXPEDITION_100_4") {$(this).html("M. ATT 170")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_EXPEDITION_100_5") {$(this).html("ATT 35")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_EXPEDITION_100_6") {$(this).html("M. ATT 35")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_EXPEDITION_2") {$(this).html("DEF +280")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_EXPEDITION_3") {$(this).html("ATT +170")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_EXPEDITION_4") {$(this).html("M. ATT +170")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_EXPEDITION_5") {$(this).html("ATT +35")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_EXPEDITION_6") {$(this).html("M. ATT +35")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_EXPLOSIVE_1") {$(this).html("ATT +1128")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_EXPLOSIVE_100_1") {$(this).html("ATT +1128")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_EXPLOSIVE_100_2") {$(this).html("Attack Speed -5")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_EXPLOSIVE_100_3") {$(this).html("Critical rate -7%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_EXPLOSIVE_2") {$(this).html("Attack Speed -5")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_EXPLOSIVE_3") {$(this).html("Critical rate -7%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_EXTREME_1") {$(this).html("ATT -685")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_EXTREME_2") {$(this).html("DEF +856")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_EXTREME_3") {$(this).html("HP +100")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FAIR_1") {$(this).html("Balance +1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FAIR_2") {$(this).html("STR +10")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FALLENLEAF_1") {$(this).html("ATT -15")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FALLENLEAF_100_1") {$(this).html("ATT -15")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FALLENLEAF_100_2") {$(this).html("DEF +118")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FALLENLEAF_100_3") {$(this).html("DEF +106")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FALLENLEAF_100_4") {$(this).html("Critical Resistance +2%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FALLENLEAF_2") {$(this).html("DEF +118")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FALLENLEAF_3") {$(this).html("DEF +106")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FALLENLEAF_4") {$(this).html("Critical Resistance +2%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FALLFOLIAGE_1") {$(this).html("Attack Speed -1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FALLFOLIAGE_2") {$(this).html("DEF +81")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FALLFOLIAGE_3") {$(this).html("Critical Resistance +1%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FALLFOLIAGE_4") {$(this).html("Critical Resistance +1%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FAMILIAR_1") {$(this).html("Attack Speed -1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FAMILIAR_2") {$(this).html("ATT -50")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FAMILIAR_3") {$(this).html("M. ATT -38")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FAMILIAR_4") {$(this).html("DEF +320")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FATAL_1") {$(this).html("ATT -250")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FATAL_2") {$(this).html("M. ATT -250")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FATAL_3") {$(this).html("Critical Rate +3%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FERVOR_1") {$(this).html("+5 Balance")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FERVOR_100_1") {$(this).html("Balance +5")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FERVOR_100_2") {$(this).html("ATT +270")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FERVOR_100_3") {$(this).html("M. ATT +282")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FERVOR_100_4") {$(this).html("DEF -370")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FERVOR_2") {$(this).html("+270 ATT")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FERVOR_3") {$(this).html("+282 M. ATT")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FERVOR_4") {$(this).html("-370 DEF")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FERVOR_MOONCAKES_1") {$(this).html("밸런스 5 증가")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FERVOR_MOONCAKES_2") {$(this).html("공격력 270 증가")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FERVOR_MOONCAKES_3") {$(this).html("마법공격력 282 증가")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FERVOR_MOONCAKES_4") {$(this).html("방어력 370 감소")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FIGHT_1") {$(this).html("-160 ATT")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FIGHT_2") {$(this).html("+340 DEF")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FIGHT_3") {$(this).html("+5% Critical Resistance")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FINE_1") {$(this).html("STR +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FINE_2") {$(this).html("INT +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FINE_3") {$(this).html("AGI +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FINE_4") {$(this).html("WIL +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FINE_5") {$(this).html("ATT +5")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FINE_6") {$(this).html("M. ATT +5")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FINGER_MARKED_1") {$(this).html("ATT +45")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FINGER_MARKED_2") {$(this).html("INT +6")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FINGER_MARKED_3") {$(this).html("AGI -7")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FINISHED_1") {$(this).html("STR +4")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FINISHED_2") {$(this).html("AGI +4")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FINISHED_3") {$(this).html("INT +4")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FINISHED_4") {$(this).html("WIL +4")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FINISHED_5") {$(this).html("ATT +5")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FINISHED_6") {$(this).html("M. ATT +5")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FIRST_STEP_1") {$(this).html("Damages the opponent over time.")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FLASH_1") {$(this).html("Attack Speed +1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FLASH_2") {$(this).html("Attack Speed +1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FLASH_3") {$(this).html("Attack Speed +1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FLUTTER_1") {$(this).html("DEF -50")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FLUTTER_2") {$(this).html("Critical Resistance +6%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FRESH_1") {$(this).html("Attack Speed +3")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FRESH_2") {$(this).html("ATT +55")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FRESH_3") {$(this).html("M. ATT +55")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FULFILL_1") {$(this).html("Balance -1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FULFILL_2") {$(this).html("Critical Rate +2%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_FULFILL_3") {$(this).html("Critical Resistance +1%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_GIANT_1") {$(this).html("Grants a chance to activate a DEF Boost.")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_GNOLL_1") {$(this).html("ATT +15")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_GOBLIN_1") {$(this).html("ATT +50")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_GOLEM_1") {$(this).html("ATT +75")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_GRAVEL_1") {$(this).html("DEF +15")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_HARD_1") {$(this).html("STR +3")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_HARD_2") {$(this).html("WIL -7")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_HARD_3") {$(this).html("AGI +3")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_HARSH_1") {$(this).html("ATT +105")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_HARSH_2") {$(this).html("M. ATT +82")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_HARSH_3") {$(this).html("Critical rate -2%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_HARSH_4") {$(this).html("Critical Resistance +2%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_HEAVY_RAIN_1") {$(this).html("Grants a chance to increase your M. ATT.")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_HIGH_MAGIC_1") {$(this).html("Grants a chance to increase your INT by 800 and drain HP for 30 seconds.")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_HIGH_MANA_1") {$(this).html("Grants a chance to increase your Attack Speed.")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_HOPE_1") {$(this).html("Grants a chance to increase your Critical rate by 5% for 60 seconds.")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_HP1000DAY90_1") {$(this).html("최대 생명력 1000 증가")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_HP500DAY30_1") {$(this).html("최대 생명력 500 증가")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_HP500DAY60_1") {$(this).html("최대 생명력 500 증가")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_HP500DAY7_1") {$(this).html("최대 생명력 500 증가")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_HP50DAY30_1") {$(this).html("최대 생명력 {0} 증가")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_HP50DAY7_1") {$(this).html("최대 생명력 {0} 증가")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ICE_STONE_1") {$(this).html("M. ATT +20")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_INJUSTICE_1") {$(this).html("Critical Rate +8%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_INJUSTICE_100_1") {$(this).html("Critical Rate 8%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_INJUSTICE_100_2") {$(this).html("Critical Resistance -5%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_INJUSTICE_100_3") {$(this).html("Attack Speed 4")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_INJUSTICE_100_4") {$(this).html("ATT 220")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_INJUSTICE_100_5") {$(this).html("M. ATT 220")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_INJUSTICE_2") {$(this).html("Critical Resistance -5%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_INJUSTICE_3") {$(this).html("Attack Speed +4")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_INJUSTICE_4") {$(this).html("ATT +220")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_INJUSTICE_5") {$(this).html("M. ATT +220")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_INNER_TEST_1") {$(this).html("공격속도 {0} 증가")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_INNER_TEST_2") {$(this).html("스태미나 {0} 증가")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_INSIST_1") {$(this).html("ATT -10")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_INSIST_2") {$(this).html("DEF +85")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_INTELLIGENT_1") {$(this).html("M. ATT +80")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ITINERARY_1") {$(this).html("Critical Rate +1%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ITINERARY_2") {$(this).html("Critical Resistance +3%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ITINERARY_3") {$(this).html("DEF + 150")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ITINERARY_4") {$(this).html("ATT +250")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ITINERARY_5") {$(this).html("M. ATT +250")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ITINERARY_6") {$(this).html("ATT +35")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ITINERARY_7") {$(this).html("M. ATT +35")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_IVORY_1") {$(this).html("DEF +30")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_JADE_1") {$(this).html("M. ATT +10")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_JASMINE_1") {$(this).html("Balance +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_JASMINE_100_1") {$(this).html("Balance +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_JASMINE_100_2") {$(this).html("ATT +140")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_JASMINE_100_3") {$(this).html("M. ATT +132")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_JASMINE_100_4") {$(this).html("DEF -28")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_JASMINE_2") {$(this).html("ATT +140")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_JASMINE_3") {$(this).html("M. ATT +132")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_JASMINE_4") {$(this).html("DEF -28")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_JUDGMENT_1") {$(this).html("Critical Rate +4%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_JUDGMENT_2") {$(this).html("Critical Resistance -1%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_JUDGMENT_3") {$(this).html("Balance -1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_JUDGMENT_4") {$(this).html("Attack Speed +3")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_JUDGMENT_5") {$(this).html("ATT +870")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_JUDGMENT_6") {$(this).html("M. ATT +870")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_JUSTICE_1") {$(this).html("Critical Rate +2%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_JUSTICE_2") {$(this).html("Balance +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_JUSTICE_3") {$(this).html("Attack Speed +8")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_JUSTICE_4") {$(this).html("ATT +430")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_JUSTICE_5") {$(this).html("M. ATT +430")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_KNOWLEDGE_1") {$(this).html("INT +8")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_KNOWLEDGE_2") {$(this).html("AGI -1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_KOBOLD_1") {$(this).html("ATT +30")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_LEOPARD_1") {$(this).html("ATT -240")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_LEOPARD_100_1") {$(this).html("ATT -240")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_LEOPARD_100_2") {$(this).html("M. ATT -240")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_LEOPARD_100_3") {$(this).html("Attack Speed +8")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_LEOPARD_100_4") {$(this).html("Balance +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_LEOPARD_2") {$(this).html("M. ATT -240")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_LEOPARD_3") {$(this).html("Attack Speed +8")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_LEOPARD_4") {$(this).html("Balance +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_LIGHT_1") {$(this).html("AGI +15")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_LIGHT_2") {$(this).html("WIL -5")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_LIKELY_1") {$(this).html("M. ATT +55")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_LIKELY_2") {$(this).html("INT +5")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_LIKELY_3") {$(this).html("ATT -10")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_LIKELY_4") {$(this).html("AGI -2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_MAGICAL_1") {$(this).html("M. ATT +15")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_MAGICAL_2") {$(this).html("M. ATT +9")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_MANA_1") {$(this).html("M. ATT +20")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_MANA_2") {$(this).html("INT +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_MANA_3") {$(this).html("STR -3")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_MEDIUM_MAGIC_1") {$(this).html("Grants a chance to recover Stamina.")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_MEDIUM_MANA_1") {$(this).html("Recovers HP and Stamina over time.")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_MIND_1") {$(this).html("ATT +30")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_MIND_100_1") {$(this).html("ATT +30")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_MIND_100_2") {$(this).html("M. ATT +30")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_MIND_100_3") {$(this).html("Continuously recovers a small amount of Stamina (Rank 2)")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_MIND_2") {$(this).html("M. ATT +30")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_MIND_3") {$(this).html("Stamina Recovery")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_MIND_MOONCAKES_1") {$(this).html("공격력 30 증가")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_MIND_MOONCAKES_2") {$(this).html("마법 공격력 30 증가")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_MIND_MOONCAKES_3") {$(this).html("스태미나 소량 회복 2단계 (지속)")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_MIST_1") {$(this).html("Balance -1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_MIST_2") {$(this).html("Attack Speed +3")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_MIST_3") {$(this).html("HP +40")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_MIST_4") {$(this).html("Stamina +10")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_MIST_5") {$(this).html("ATT -85")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_MIST_6") {$(this).html("M. ATT -78")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_MULTIPURPOSE_1") {$(this).html("Stamina +16")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_MULTIPURPOSE_2") {$(this).html("Critical Resistance -12%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_NAIVE_1") {$(this).html("DEF +7")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_NOBLE_1") {$(this).html("Balance +4")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_NOBLE_2") {$(this).html("ATT -100")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_NOBLE_3") {$(this).html("M. ATT -100")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ORNATE_1") {$(this).html("Balance +7")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ORNATE_2") {$(this).html("Attack Speed +5")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ORNATE_3") {$(this).html("HP -40")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ORNATE_4") {$(this).html("Critical Rate +3%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PASSION_1") {$(this).html("DEF +200")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PASSION_100_1") {$(this).html("DEF +200")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PASSION_100_2") {$(this).html("Stamina +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PASSION_2") {$(this).html("Stamina +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PATIENT_1") {$(this).html("Stamina +5")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PATIENT_2") {$(this).html("ATT -10")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PATIENT_3") {$(this).html("M. ATT -10")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PATIENT_4") {$(this).html("Stamina +5")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PERIDOT_1") {$(this).html("M. ATT +35")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PERSPICUITY_1") {$(this).html("Attack Speed +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PERSPICUITY_100_1") {$(this).html("Attack Speed +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PERSPICUITY_100_2") {$(this).html("Attack Speed +3")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PERSPICUITY_100_3") {$(this).html("Critical Rate +4%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PERSPICUITY_2") {$(this).html("Attack Speed +3")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PERSPICUITY_3") {$(this).html("Critical Rate +4%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PETAL_1") {$(this).html("Balance +3")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PETAL_100_1") {$(this).html("Balance +3")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PETAL_100_2") {$(this).html("Attack Speed +5")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PETAL_100_3") {$(this).html("ATT +150")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PETAL_100_4") {$(this).html("M. ATT +138")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PETAL_2") {$(this).html("Attack Speed +5")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PETAL_3") {$(this).html("ATT +150")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PETAL_4") {$(this).html("M. ATT +138")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PETAL_MOONCAKES_1") {$(this).html("밸런스 3 증가")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PETAL_MOONCAKES_2") {$(this).html("공격속도 5 증가")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PETAL_MOONCAKES_3") {$(this).html("공격력 150 증가")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PETAL_MOONCAKES_4") {$(this).html("마법공격력 138 증가")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PIERCING_1") {$(this).html("ATT +30")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PIERCING_2") {$(this).html("M. ATT +30")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PINE_1") {$(this).html("Balance +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PINE_2") {$(this).html("Attack Speed +1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PINE_3") {$(this).html("DEF -28")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PINE_4") {$(this).html("Critical Resistance -2%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_POWERFUL_1") {$(this).html("STR +6")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_POWERFUL_2") {$(this).html("AGI -3")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_POWERFUL_3") {$(this).html("STR +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_POWERFUL_4") {$(this).html("ATT +5")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PRECIOUS_1") {$(this).html("STR +3")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PRECIOUS_2") {$(this).html("AGI +3")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PRECIOUS_3") {$(this).html("INT +3")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PRECIOUS_4") {$(this).html("WIL +3")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PRECIOUS_5") {$(this).html("ATT +7")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PRECIOUS_6") {$(this).html("M. ATT +7")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PREPARED_1") {$(this).html("DEF +82")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PREPARED_2") {$(this).html("STR -4")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PREPARED_3") {$(this).html("WIL -2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PREVENT_1") {$(this).html("DEF +135")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PROPER_1") {$(this).html("Balance +3")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PROPER_2") {$(this).html("Critical Resistance -5%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PROPERLY_1") {$(this).html("ATT +25")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PROPERLY_2") {$(this).html("INT +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PROTECTED_1") {$(this).html("HP +7")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PROTECTED_100_1") {$(this).html("HP +7")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PROTECTED_100_2") {$(this).html("STR -8")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PROTECTED_100_3") {$(this).html("HP +4")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PROTECTED_100_4") {$(this).html("DEF +16")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PROTECTED_2") {$(this).html("STR -8")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PROTECTED_3") {$(this).html("HP +4")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PROTECTED_4") {$(this).html("DEF +16")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PROTECTION_1") {$(this).html("Balance -1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PROTECTION_2") {$(this).html("Critical Rate +5%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PROTECTION_3") {$(this).html("Critical Resistance +5%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PROUD_1") {$(this).html("Balance -1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PROUD_2") {$(this).html("Attack Speed +1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PROUD_3") {$(this).html("Attack Speed +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PROUD_4") {$(this).html("ATT -40")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PUNISH_1") {$(this).html("M. ATT +677")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PUNISH_100_1") {$(this).html("M. ATT +677")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PUNISH_100_2") {$(this).html("Attack Speed +1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PUNISH_100_3") {$(this).html("Balance -2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PUNISH_100_4") {$(this).html("Critical Rate +2%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PUNISH_2") {$(this).html("Attack Speed +1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PUNISH_3") {$(this).html("Balance -2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PUNISH_4") {$(this).html("Critical Rate +2%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PVP_ENCHANT_LV40_1") {$(this).html("PVP 40 ATT")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PVP_ENCHANT_LV40_2") {$(this).html("PVP 40 M. ATT")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PVP_ENCHANT_LV40_3") {$(this).html("PVP 10 DEF")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PVP_ENCHANT_LV50_1") {$(this).html("PVP 50 ATT")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PVP_ENCHANT_LV50_2") {$(this).html("PVP 50 M. ATT")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PVP_ENCHANT_LV50_3") {$(this).html("PVP 20 DEF")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PVP_ENCHANT_LV60_1") {$(this).html("PVP 60 ATT")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PVP_ENCHANT_LV60_2") {$(this).html("PVP 60 M. ATT")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PVP_ENCHANT_LV60_3") {$(this).html("PVP 30 DEF")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PVP_ENCHANT_LV65_1") {$(this).html("PVP 70 ATT")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PVP_ENCHANT_LV65_2") {$(this).html("PVP 70 M. ATT")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PVP_ENCHANT_LV65_3") {$(this).html("PVP 40 DEF")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PVP_ENCHANT_LV70_1") {$(this).html("PVP 80 ATT")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PVP_ENCHANT_LV70_2") {$(this).html("PVP 80 M. ATT")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PVP_ENCHANT_LV70_3") {$(this).html("PVP 50 DEF")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PVP_ENCHANT_LV75_1") {$(this).html("PVP 90 ATT")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PVP_ENCHANT_LV75_2") {$(this).html("PVP 90 M. ATT")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PVP_ENCHANT_LV75_3") {$(this).html("PVP 60 DEF")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PVP_ENCHANT_LV80_1") {$(this).html("PVP 100 ATT")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PVP_ENCHANT_LV80_2") {$(this).html("PVP 100 M. ATT")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_PVP_ENCHANT_LV80_3") {$(this).html("PVP 70 DEF")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_QUICKNESS_1") {$(this).html("AGI +6")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_QUICKNESS_2") {$(this).html("INT +9")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_QUICKNESS_3") {$(this).html("STR -5")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_RAINBOW_1") {$(this).html("Grants a chance to increase ATT and M. ATT by 2500 for 60 seconds.")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_RAINBOW_2") {$(this).html("Grants a chance to increase ATT and M. ATT by 2500 for 60 seconds.")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_RANDOM_TEST_1") {$(this).html("공격속도 {0} 증가")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_RANDOM_TEST_2") {$(this).html("스태미나 {0} 증가")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_RELAXED_1") {$(this).html("HP +5")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_RELAXED_2") {$(this).html("Stamina +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_RELAXED_3") {$(this).html("STR -2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_REMEMBER_1") {$(this).html("Critical Rate +2%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_REMEMBER_2") {$(this).html("Critical Resistance +2%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_REMEMBER_3") {$(this).html("Balance +1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_REMEMBER_4") {$(this).html("Attack Speed +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_REMEMBER_5") {$(this).html("DEF +100")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_REMEMBER_6") {$(this).html("ATT +35")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_REMEMBER_7") {$(this).html("M. ATT +35")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_REPEATSAY_1") {$(this).html("Critical Rate +1%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_REPEATSAY_2") {$(this).html("Critical Resistance -1%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_REPEATSAY_3") {$(this).html("Balance +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_REPEATSAY_4") {$(this).html("Attack Speed +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_REPEATSAY_5") {$(this).html("DEF +150")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_REPEATSAY_6") {$(this).html("ATT +35")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_REPEATSAY_7") {$(this).html("M. ATT +35")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_RESOLUTION_1") {$(this).html("Balance +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_RESOLUTION_100_1") {$(this).html("Balance +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_RESOLUTION_100_2") {$(this).html("Balance +3")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_RESOLUTION_100_3") {$(this).html("Attack Speed +3")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_RESOLUTION_100_4") {$(this).html("ATT -45")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_RESOLUTION_2") {$(this).html("Balance +3")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_RESOLUTION_3") {$(this).html("Attack Speed +3")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_RESOLUTION_4") {$(this).html("ATT -45")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_RESOLVE_1") {$(this).html("Balance +3")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_RESOLVE_2") {$(this).html("Attack Speed +1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_RESOLVE_3") {$(this).html("HP -30")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_RICH_1") {$(this).html("Balance +1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_RICH_100_1") {$(this).html("Balance +1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_RICH_100_2") {$(this).html("Attack Speed +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_RICH_100_3") {$(this).html("Attack Speed +3")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_RICH_100_4") {$(this).html("ATT -80")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_RICH_100_5") {$(this).html("Critical Rate +1%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_RICH_2") {$(this).html("Attack Speed +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_RICH_3") {$(this).html("Attack Speed +3")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_RICH_4") {$(this).html("ATT -80")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_RICH_5") {$(this).html("Critical Rate +1%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_ROCK_1") {$(this).html("DEF +20")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SAND_1") {$(this).html("DEF +10")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SAPPHIRE_1") {$(this).html("M. ATT +70")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SERVICEABLE_1") {$(this).html("ATT +60")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SERVICEABLE_2") {$(this).html("AGI -2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SERVICEABLE_3") {$(this).html("WIL -2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SHARP_1") {$(this).html("ATT +21")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SHARPEDGE_1") {$(this).html("Critical Rate +3%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SHARPEDGE_2") {$(this).html("Critical Resistance -5%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SHOWER_1") {$(this).html("Recovers HP over time.")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SIGNIFICANT_1") {$(this).html("ATT +15")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SIGNIFICANT_100_1") {$(this).html("ATT +15")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SIGNIFICANT_100_2") {$(this).html("M. ATT +15")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SIGNIFICANT_100_3") {$(this).html("Attack Speed +1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SIGNIFICANT_2") {$(this).html("M. ATT +15")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SIGNIFICANT_3") {$(this).html("Attack Speed +1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SILENT_1") {$(this).html("Critical Rate +1%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SILENT_2") {$(this).html("Critical Resistance -2%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SILENT_3") {$(this).html("Balance +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SILENT_4") {$(this).html("Attack Speed +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SILENT_5") {$(this).html("DEF + 150")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SILENT_6") {$(this).html("ATT +110")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SILENT_7") {$(this).html("M. ATT +110")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SILENT_8") {$(this).html("ATT +35")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SILENT_9") {$(this).html("M. ATT +35")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SIMPLE_1") {$(this).html("STR +1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SIMPLE_2") {$(this).html("INT +1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SIMPLE_3") {$(this).html("AGI +1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SIMPLE_4") {$(this).html("WIL +1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SNOWBRANCH_1") {$(this).html("Balance -1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SNOWBRANCH_2") {$(this).html("Attack Speed +3")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SNOWBRANCH_3") {$(this).html("ATT +185")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SNOWBRANCH_4") {$(this).html("M. ATT +78")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SOLID_1") {$(this).html("Critical Resistance +4%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SOLID_2") {$(this).html("Critical Resistance +4%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SOLID_3") {$(this).html("Critical Resistance +4%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SOW_1") {$(this).html("마을이속 증가")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SPEED1DAY30_1") {$(this).html("Attack Speed +1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SPEED1DAY7_1") {$(this).html("공격속도 1 증가")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SPEED2DAY30_1") {$(this).html("공격속도 2 증가")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SPEED2DAY60_1") {$(this).html("Attack Speed +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SPEED2DAY7_1") {$(this).html("공격속도 2 증가")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SPEED3DAY90_1") {$(this).html("Attack Speed +3")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SPEEDY_1") {$(this).html("Attack Speed +5")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SPEEDY_100_1") {$(this).html("Attack Speed +5")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SPEEDY_100_2") {$(this).html("Balance -8")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SPEEDY_2") {$(this).html("Balance -8")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SPEEDY_MOONCAKES_1") {$(this).html("공격속도 5 증가")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SPEEDY_MOONCAKES_2") {$(this).html("밸런스 8 감소")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SPELL_1") {$(this).html("Damages the opponent over time.")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SPRING_RAIN_1") {$(this).html("DEF +32")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SPROUT_1") {$(this).html("Continuously recovers a small amount of Stamina (Rank 1).")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_STARLIGHT_1") {$(this).html("200 ATT")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_STARLIGHT_100_1") {$(this).html("ATT +200")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_STARLIGHT_100_2") {$(this).html("M. ATT +200")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_STARLIGHT_100_3") {$(this).html("Attack Speed +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_STARLIGHT_2") {$(this).html("200 M. ATT")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_STARLIGHT_3") {$(this).html("Attack Speed +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_STARLIGHT_4") {$(this).html("Attack Speed +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_STATUE_1") {$(this).html("M. ATT +40")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_STEADY_1") {$(this).html("Stamina +8")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_STEADY_2") {$(this).html("Stamina +7")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_STIGMA_1") {$(this).html("Critical Rate +5%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_STIGMA_2") {$(this).html("Critical Resistance +7%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_STIGMA_3") {$(this).html("Balance -1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_STIGMA_4") {$(this).html("HP -80")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_STIGMA_5") {$(this).html("DEF +70")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_STOUT_1") {$(this).html("STR +9")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_STOUT_100_1") {$(this).html("STR +9")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_STOUT_100_2") {$(this).html("INT +9")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_STOUT_100_3") {$(this).html("Stamina +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_STOUT_2") {$(this).html("INT +9")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_STOUT_3") {$(this).html("Stamina +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_STRANGE_1") {$(this).html("Balance -1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_STRANGE_2") {$(this).html("Attack Speed +1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_STRANGE_3") {$(this).html("DEF +280")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_STRENGTH_1") {$(this).html("HP +8")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_STRENGTH_2") {$(this).html("STR -2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_STRENGTH_3") {$(this).html("HP +10")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_STRENGTH_4") {$(this).html("INT -2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_STRONG_1") {$(this).html("WIL +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_STRONG_2") {$(this).html("INT -2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_STRONG_3") {$(this).html("WIL +1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_STRONG_4") {$(this).html("AGI +3")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_STRONG_BODY_1") {$(this).html("DEF +95")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_STRONG_BODY_2") {$(this).html("DEF +95")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_STRONG_SHOT_1") {$(this).html("ATT +32")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_STURDY_1") {$(this).html("DEF +48")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_STURDY_2") {$(this).html("WIL -5")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SUBSTANTIAL_1") {$(this).html("HP +30")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SUBSTANTIAL_2") {$(this).html("HP +30")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SUBSTANTIAL_3") {$(this).html("HP +30")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SUBSTANTIAL_4") {$(this).html("HP +30")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SURPRISE_1") {$(this).html("Balance -5")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SURPRISE_2") {$(this).html("Attack Speed +4")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SURPRISE_3") {$(this).html("Critical Resistance -4%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_SWIFT_1") {$(this).html("AGI +6")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_TEST_1") {$(this).html("Balance +10")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_TEST_2") {$(this).html("AGI +1000")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_THRILLING_1") {$(this).html("DEF +145")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_THRILLING_2") {$(this).html("Critical Rate +1%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_THRILLING_3") {$(this).html("Critical Resistance -3%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_TIME_1") {$(this).html("Critical Rate +4%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_TIME_100_1") {$(this).html("Critical Rate 4%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_TIME_100_2") {$(this).html("Critical Resistance 6%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_TIME_100_3") {$(this).html("Balance -3")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_TIME_100_4") {$(this).html("HP + 50")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_TIME_100_5") {$(this).html("DEF + 160")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_TIME_2") {$(this).html("Critical Resistance +6%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_TIME_3") {$(this).html("Balance -3")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_TIME_4") {$(this).html("HP + 50")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_TIME_5") {$(this).html("DEF +160")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_TRESURE_1") {$(this).html("Balance +1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_TRESURE_2") {$(this).html("ATT +230")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_TRESURE_3") {$(this).html("DEF -120")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_TUTELARY_1") {$(this).html("DEF +112")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_TUTELARY_100_1") {$(this).html("DEF +112")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_TUTELARY_100_2") {$(this).html("HP +50")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_TUTELARY_2") {$(this).html("HP +50")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_TWILIGHT_1") {$(this).html("HP +300")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_TWILIGHT_2") {$(this).html("DEF +300")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_TWILIGHT_3") {$(this).html("Balance -5")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_TWINKLE_1") {$(this).html("Critical Rate +7%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_TWINKLE_2") {$(this).html("Critical Resistance -10%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_TYPHOON_1") {$(this).html("Balance +1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_TYPHOON_2") {$(this).html("Attack Speed +1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_TYPHOON_3") {$(this).html("DEF +60")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_TYPHOON_4") {$(this).html("DEF +40")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_TYPHOON_5") {$(this).html("Critical Resistance -3%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_UNDEAD_1") {$(this).html("+5 Balance")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_UNDEAD_2") {$(this).html("+5% Critical Resistance")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_UNDEAD_3") {$(this).html("STR reduced by 40")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_UNDEAD_4") {$(this).html("HP reduced by 450")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_UNDERDONE_1") {$(this).html("ATT +180")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_UNDERDONE_100_1") {$(this).html("ATT +180")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_UNDERDONE_100_2") {$(this).html("M. ATT +150")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_UNDERDONE_100_3") {$(this).html("Balance +1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_UNDERDONE_2") {$(this).html("M. ATT +150")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_UNDERDONE_3") {$(this).html("Balance +1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_VALOR_1") {$(this).html("Balance +5")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_VALOR_100_1") {$(this).html("Balance +5")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_VALOR_100_2") {$(this).html("Attack Speed +4")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_VALOR_100_3") {$(this).html("ATT +130")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_VALOR_100_4") {$(this).html("M. ATT +119")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_VALOR_2") {$(this).html("Attack Speed +4")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_VALOR_3") {$(this).html("ATT +130")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_VALOR_4") {$(this).html("M. ATT +119")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_VALUABLE_1") {$(this).html("Attack Speed +1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_VALUABLE_2") {$(this).html("ATT +240")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_VALUABLE_3") {$(this).html("ATT +120")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_VAMPIRE_1") {$(this).html("STR +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_VAMPIRE_2") {$(this).html("INT +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_VAMPIRE_3") {$(this).html("AGI +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_VAMPIRE_4") {$(this).html("WIL +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_VITALITY_1") {$(this).html("HP +12")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_VITALITY_100_1") {$(this).html("HP +12")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_VITALITY_100_2") {$(this).html("DEF +130")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_VITALITY_2") {$(this).html("DEF +130")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_WANTLESS_1") {$(this).html("STR +3")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_WANTLESS_2") {$(this).html("INT +3")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_WANTLESS_3") {$(this).html("AGI +3")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_WANTLESS_4") {$(this).html("WIL +3")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_WAVE_1") {$(this).html("Attack Speed +1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_WAVE_2") {$(this).html("Stamina +3")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_WAVE_3") {$(this).html("DEF -28")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_WAVE_4") {$(this).html("Critical Resistance -2%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_WEAK_1") {$(this).html("Increases your Attack Speed.")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_WHISPER_1") {$(this).html("Damages the opponent over time.")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_WILL_1") {$(this).html("WIL +4")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_WILL_2") {$(this).html("WIL +3")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_WILL_3") {$(this).html("INT +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_WILL_4") {$(this).html("DEF -25")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_WILLOW_1") {$(this).html("Balance +2")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_WILLOW_2") {$(this).html("DEF -25")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_WILLOW_3") {$(this).html("Critical Resistance +1%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_WINDY_1") {$(this).html("Critical rate +3%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_WINDY_2") {$(this).html("STR -5")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_WISDOM_1") {$(this).html("INT +18")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_WISDOM_2") {$(this).html("AGI -5")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_WISE_1") {$(this).html("M. ATT +30")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_WISE_2") {$(this).html("STR -3")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_WISE_3") {$(this).html("AGI -5")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_WISE_MAN_1") {$(this).html("INT +21")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_WISE_MAN_2") {$(this).html("AGI -6")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_WRATH_1") {$(this).html("Balance +1")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_WRATH_2") {$(this).html("Attack Speed +3")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_WRATH_3") {$(this).html("HP -100")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_WRATH_4") {$(this).html("Critical Rate 3%")}
		if (EnchantStat == "GAMEUI_HEROES_ENCHANTSTAT_YETI_1") {$(this).html("ATT +100")}
		
}