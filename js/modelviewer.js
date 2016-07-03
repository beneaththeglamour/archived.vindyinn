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
	  
      document.body.appendChild(renderer.domElement);

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
      loader.load( "/viewer/models/"+ finalreplace +".js", function(geometry){
		 $.getScript( '/js/loadmodel.js', function() {
			LoadModel()
			mesh = new THREE.Mesh(geometry, material);
			scene.add(mesh);
		})
        
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