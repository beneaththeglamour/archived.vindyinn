changetohero = function(){
		$('.bosshp').each(function(){
			decimal = hero / 100
			hpnum = parseInt($(this).attr('value'))
			herostats = hpnum * decimal
			total = hpnum + herostats
			$(this).html(total)
		})
		$('#difficulty').html('Hero')
		heroattack = attackbonus + attack
		$('.bossatt').html(heroattack)
		$('.bossatt').each(function(){
							grab = parseInt($(this).html())
							convert = grab.toLocaleString()
							$(this).html(convert)
						})
		herodef = defbonus + def
		$('.bossdef').html(herodef)
		$('.bossdef').each(function(){
							grab = parseInt($(this).html())
							convert = grab.toLocaleString()
							$(this).html(convert)
						})
		$('.bosshp').each(function(){
							grab = parseInt($(this).html())
							convert = grab.toLocaleString()
							$(this).html(convert)
						})
		$('#hero').off()
		$('#normal').click(changetonormal)
}
changetonormal = function(){
		$('.bosshp').each(function(){
			$(this).html(hpnum)
		})
		$('.bosshp').each(function(){
							grab = parseInt($(this).html())
							convert = grab.toLocaleString()
							$(this).html(convert)
						})
		$('.bossatt').html(attack)
		$('.bossatt').each(function(){
							grab = parseInt($(this).html())
							convert = grab.toLocaleString()
							$(this).html(convert)
						})
		$('.bossdef').html(def)
		$('.bossdef').each(function(){
							grab = parseInt($(this).html())
							convert = grab.toLocaleString()
							$(this).html(convert)
						})
		$('#hero').click(changetohero)
		$('#normal').off()
		$('#difficulty').html('Hard')
}