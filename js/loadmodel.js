LoadModel = function() {
	if (finalreplace == 'Royal_Guard_Heavy_Mail') {
		texture = THREE.ImageUtils.loadTexture('/viewer/texture/pc_male_royalguard_upper.gif'),
		texture.wrapS = THREE.RepeatWrapping;
			texture.wrapT = THREE.RepeatWrapping;
			texture.repeat.set( 1, 1 );
		texture2 = THREE.ImageUtils.loadTexture('/viewer/texture/pc_male_royalguard_upper_metal.gif'),
		texture2.wrapS = THREE.RepeatWrapping;
			texture2.wrapT = THREE.RepeatWrapping;
			texture2.repeat.set( 1, 1 );
        material = new THREE.MeshFaceMaterial([
			new THREE.MeshPhongMaterial( { map: texture2, shininess:100, specular:0xffffff  }),
			new THREE.MeshLambertMaterial( { map: texture}),
		]);
	}
}