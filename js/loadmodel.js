LoadModel = function() {
	if (finalreplace.indexOf("Royal_Guard_Heavy_Mail") != -1) {
		texture = THREE.ImageUtils.loadTexture('/viewer/texture/pc_male_royalguard_upper.jpg'),
		texture.wrapS = THREE.RepeatWrapping;
			texture.wrapT = THREE.RepeatWrapping;
			texture.repeat.set( 1, 1 );
		texture2 = THREE.ImageUtils.loadTexture('/viewer/texture/pc_male_royalguard_upper_metal.jpg'),
		texture2.wrapS = THREE.RepeatWrapping;
			texture2.wrapT = THREE.RepeatWrapping;
			texture2.repeat.set( 1, 1 );
        material = new THREE.MeshFaceMaterial([
			new THREE.MeshPhongMaterial( { map: texture2, shininess:100, specular:0xffffff  }),
			new THREE.MeshLambertMaterial( { map: texture}),
		]);
	}
	if (finalreplace.indexOf("Regal_Betrothed_Top") != -1) {
		texture = THREE.ImageUtils.loadTexture('/viewer/texture/pc_female_traditional_upper.png'),
		texture.wrapS = THREE.RepeatWrapping;
			texture.wrapT = THREE.RepeatWrapping;
			texture.repeat.set( 1, 1 );
        material = new THREE.MeshFaceMaterial([
			new THREE.MeshLambertMaterial( { map: texture}),
			new THREE.MeshLambertMaterial( { map: texture}),
			new THREE.MeshLambertMaterial( { map: texture}),
		]);
	}
	if (finalreplace.indexOf("Black_Hammer_Bastard_Sword") != -1) {
		texture = THREE.ImageUtils.loadTexture('/viewer/texture/bastardsword_blackhammer.jpg'),
			texture.wrapS = THREE.RepeatWrapping;
			texture.wrapT = THREE.RepeatWrapping;
			texture.repeat.set( 1, 1 );
        material = new THREE.MeshFaceMaterial([
			new THREE.MeshPhongMaterial( { map: texture, shininess:100, specular:0xffffff  }),
			new THREE.MeshPhongMaterial( { map: texture2, shininess:100, specular:0xffffff  }),
		]);
	}
}