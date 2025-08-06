const container = document.getElementById('abstract-ball-bg');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, window.innerWidth/(window.innerHeight*0.6), 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight*0.6);
container.appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(4, 64, 64);
const material = new THREE.MeshStandardMaterial({
    color: 0x222244,
    roughness: 0.5,
    metalness: 0.3,
    transparent: true,
    opacity: 0.6
});
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

scene.add(new THREE.AmbientLight(0x666699, 0.8));
const pointLight = new THREE.PointLight(0x222255, 0.7);
pointLight.position.set(0, 0, 8);
scene.add(pointLight);

camera.position.z = 11;

function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.y += 0.006;
    sphere.rotation.x = Math.sin(Date.now() * 0.0007) * 0.2;
    renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / (window.innerHeight*0.6);
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight*0.6);
});
