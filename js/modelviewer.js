SetUpViewer = function() {
	 // Set up the scene, camera, and renderer as global variables.
    var scene, camera, renderer;

    init();
    animate();

    // Sets up the scene.
    function init() {

      // Create the scene and set the scene size.
      scene = new THREE.Scene();
      var WIDTH = 1266,
          HEIGHT = 600;

      // Create a renderer and add it to the DOM.
      renderer = new THREE.WebGLRenderer({antialias:true});
      renderer.setSize(WIDTH, HEIGHT);
	  
      $('#model').appendChild(renderer.domElement);

      // Create a camera, zoom it out from the model a bit, and add it to the scene.
      camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 0.1, 10000);
      camera.position.set(0,40,90);
      scene.add(camera);

      // Create an event listener that resizes the renderer with the browser window.


      // Set the background color of the scene.

      // Create a light, set its position, and add it to the scene.
      var light = new THREE.HemisphereLight( 0xffffff, 0x666666, 1 );
      scene.add(light);

      // Load in the mesh and add it to the scene.
      var loader = new THREE.JSONLoader();
	  LoadModel()
      loader.load( "models/treehouse_logo.js", function(geometry){
		texture = THREE.ImageUtils.loadTexture('pc_male_royalguard_upper.gif'),
		texture.wrapS = THREE.RepeatWrapping;
			texture.wrapT = THREE.RepeatWrapping;
			texture.repeat.set( 1, 1 );
		texture2 = THREE.ImageUtils.loadTexture('pc_male_royalguard_upper_metal.gif'),
		texture2.wrapS = THREE.RepeatWrapping;
			texture2.wrapT = THREE.RepeatWrapping;
			texture2.repeat.set( 1, 1 );
        material = new THREE.MeshFaceMaterial([
			new THREE.MeshLambertMaterial( { map: texture2 }),
			new THREE.MeshStandardMaterial( { map: texture, metalness:1.0 }),
		]);
        mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
      });

      // Add OrbitControls so that we can pan around with the mouse.
      controls = new THREE.OrbitControls(camera, renderer.domElement);

    }


    // Renders the scene and updates the render as needed.
    function animate() {

      // Read more about requestAnimationFrame at http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
      requestAnimationFrame(animate);
      
      // Render the scene.
      renderer.render(scene, camera);
      controls.update();

    }
}