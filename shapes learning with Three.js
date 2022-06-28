<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="x-UA-Compatible" content="ie=edge">
    <title>Learning Shapes </title>
</head>

<style>
    body { 
    margin: 0; 
    height: 100vh;

}
  
canvas { 
    display: block;
}

h1 {
    position:absolute;
    font-family:'Times New Roman';
    font-size: 4em;
    width: auto;
    color:black;
    padding: .2em;
  }
    </style>
<body>
    <h1 id="paluniv">Hey</h1>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/102/three.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.2/TweenMax.min.js"></script>
    <script>
 var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
camera.position.z = 5;
var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor("#D1D0CE");
/*size for renderer , traditionally it'll be based on the window inner width
 and height ,nothing'shappening yet you can't see anything on the site*/
renderer.setSize(window.innerWidth,window.innerHeight);

document.body.appendChild(renderer.domElement);

window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth,window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;

    camera.updateProjectionMatrix();
})
var raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();

var geometry = new THREE.CylinderGeometry(.5,.5,.5,.5);
var geometry1 = new THREE.BoxGeometry(1,1,1);
var geometry2 = new THREE.ConeGeometry(.4,.4,.4); 
var geometry3 = new THREE.SphereGeometry(0.5,0.5,0.5,0.5);
var geometry4 = new THREE.CircleGeometry(.4,.4,.4);  
         var ranCol = new THREE.Color();
		ranCol.setRGB( Math.random(), Math.random(), Math.random() );
var material = new THREE.MeshLambertMaterial({color: ranCol, ambient: ranCol });

var ranCol2 = new THREE.Color();
		ranCol2.setRGB( Math.random(), Math.random(), Math.random() );
var material2 = new THREE.MeshLambertMaterial({color: ranCol2, ambient: ranCol2 });

var ranCol3 = new THREE.Color();
		ranCol3.setRGB( Math.random(), Math.random(), Math.random() );
var material3 = new THREE.MeshLambertMaterial({color: ranCol3, ambient: ranCol3 });

var ranCol4 = new THREE.Color();
		ranCol4.setRGB( Math.random(), Math.random(), Math.random() );
var material4 = new THREE.MeshLambertMaterial({color: ranCol4, ambient: ranCol4 });

var ranCol5 = new THREE.Color();
		ranCol5.setRGB( Math.random(), Math.random(), Math.random() );
var material5 = new THREE.MeshLambertMaterial({color: ranCol5, ambient: ranCol5 });

meshX = -10;
//mesh.position : shape position(x,y,z) ,when we refresh the page it will change
for(var i = 0; i<10;i++) {
    var mesh = new THREE.Mesh(geometry, material2);
    mesh.position.x = (Math.random() - 0.5) * 10;
    mesh.position.y = (Math.random() - 0.5) * 10;
    mesh.position.z = (Math.random() - 0.5) * 10;
    scene.add(mesh);
    meshX+=1;
}
for(var i = 0; i<10;i++) {
    var mesh1 = new THREE.Mesh(geometry1, material3);
    mesh1.position.x = (Math.random() - 0.5) * 10;
    mesh1.position.y = (Math.random() - 0.5) * 10;
    mesh1.position.z = (Math.random() - 0.5) * 10;
    scene.add(mesh1);
    meshX+=1;
}
for(var i = 0; i<10;i++) {
    var mesh2 = new THREE.Mesh(geometry2, material4);
    mesh2.position.x = (Math.random() - 0.5) * 10;
    mesh2.position.y = (Math.random() - 0.5) * 10;
    mesh2.position.z = (Math.random() - 0.5) * 10;
    scene.add(mesh2);
    meshX+=1;
}
for(var i = 0; i<10;i++) {
    var mesh3 = new THREE.Mesh(geometry3, material5);
    mesh3.position.x = (Math.random() - 0.5) * 10;
    mesh3.position.y = (Math.random() - 0.5) * 10;
    mesh3.position.z = (Math.random() - 0.5) * 10;
    scene.add(mesh3);
    meshX+=1;
}
for(var i = 0; i<10;i++) {
    var mesh4 = new THREE.Mesh(geometry4, material);
    mesh4.position.x = (Math.random() - 0.5) * 10;
    mesh4.position.y = (Math.random() - 0.5) * 10;
    mesh4.position.z = (Math.random() - 0.5) * 10;
    scene.add(mesh4);
    meshX+=1;
}
var light = new THREE.PointLight(0xF7F7F7, 1, 1000)
light.position.set(0,0,0);
scene.add(light);

var light = new THREE.PointLight(0xF7F7F7, 2, 1000)
light.position.set(0,0,25);
scene.add(light);

/*scale the window it ends up distorting the image or
 the aspect ratio even though we have that resize event trying to fix the aspect ratio*/

var render = function() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
}


document.getElementById("paluniv").onmousemove = function(event) {myFunction(event)};
function myFunction(e) {
  document.getElementById("paluniv").style.color= "red";
}
function onMouseMove(event) {
    event.preventDefault();

    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);

    var intersects = raycaster.intersectObjects(scene.children, true);
    for (var i = 0; i < intersects.length; i++) {
        document.getElementById("paluniv").innerHTML ="Paluniv Shapes";
    }
}
window.addEventListener('mousemove', onMouseMove);
function onMouseMove1(event) {
    event.preventDefault();

    mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    var intersects = raycaster.intersectObjects(scene.children, true);
    for (var i = 0; i < intersects.length; i++) {
        this.tl = new TimelineMax();
        this.tl.to(intersects[i].object.scale, 1, {x: 2, ease: Expo.easeOut})
        this.tl.to(intersects[i].object.scale, .5, {x: .5, ease: Expo.easeOut})
        this.tl.to(intersects[i].object.position, .5, {x: 2, ease: Expo.easeOut})
        this.tl.to(intersects[i].object.rotation, .5, {y: Math.PI*.5, ease: Expo.easeOut}, "=-1.5")
    }
}
// or click
window.addEventListener('click', onMouseMove1);
render();
        </script>
</body>
</html>
