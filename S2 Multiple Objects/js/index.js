//Gl//Global variables
var scene, camera, renderer;
var geometry, material, mesh;

function init(){
  // Create an empty scene --------------------------
  scene = new THREE.Scene();

  // Create a basic perspective camera --------------
  camera = new THREE.PerspectiveCamera(35, window.innerWidth/window.innerHeight, 300, 10000 );

  // Create a renderer with Antialiasing ------------
  renderer = new THREE.WebGLRenderer({antialias:true});

  // Configure renderer clear color
  renderer.setClearColor("#000000");

  // Configure renderer size
  renderer.setSize( window.innerWidth, window.innerHeight );

  // Append Renderer to DOM
  document.body.appendChild( renderer.domElement );
}

function geometry(){
  // Create a Cube Mesh with basic material ---------
  geometry = new THREE.SphereGeometry(90, 90, 90);
  material = new THREE.MeshNormalMaterial( { color: "#433F81" } );
  mesh = new THREE.Mesh( geometry, material );
  mesh.position.z = -1000;

  geometry2 = new THREE.TorusGeometry( 140, 15, 6, 80 );
  material2 = new THREE.MeshNormalMaterial({
    color: 0xffff00,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.8  });
  mesh2 = new THREE.Mesh( geometry2, material2 );
  mesh2.position.z = -1000;

  geometry3 = new THREE.BoxGeometry(450, 450, 450);
  material3 = new THREE.MeshNormalMaterial({
  color: "#433F81",
  wireframe: true,
  transparent: true,
  opacity: 0.8 });
  mesh3 = new THREE.Mesh( geometry3, material3 );
  mesh3.position.z = -1000;


  geometry4 = new THREE.TorusGeometry( 200, 15, 6, 160 );
  material4 = new THREE.MeshNormalMaterial({
    color: 0xffff00,
    side: THREE.DoubleSide,
    transparent: true,
    opacity: 0.8  });
  mesh4 = new THREE.Mesh( geometry4, material4 );
  mesh4.position.z = -1000;

  // Add mesh to scene
  scene.add( mesh );
  scene.add( mesh2 );
  scene.add( mesh3 );
  scene.add( mesh4 );
}



// Render Loop
var render = function () {
  requestAnimationFrame( render );

  mesh.rotation.x -= 0.01; //Continuously rotate the mesh
  mesh.rotation.y -= 0.01;

  mesh2.rotation.x += 0.02;
  mesh2.rotation.y -= 0.02;

  mesh3.rotation.x -= 0.01;
  mesh3.rotation.y -= 0.01;

  mesh4.rotation.x += 0.01;
  mesh4.rotation.y += 0.01;

  renderer.setClearColor("#000000");

  // Render the scene
  renderer.render(scene, camera);
};

init();
geometry();
render();
