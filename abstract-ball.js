// Three.js abstract ball background effect
const container = document.createElement('div');
container.id = 'abstract-ball-bg';
document.body.prepend(container);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

const geometry = new THREE.SphereGeometry(4, 64, 64);
const material = new THREE.MeshStandardMaterial({
    color: 0x222266,
    roughness: 0.25,
    metalness: 0.7,
    transparent: true,
    opacity: 0.7
});
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// Simple abstract effect: animate scale and rotation
let tick = 0;
function animate() {
    requestAnimationFrame(animate);
    tick += 0.01;
    sphere.rotation.y += 0.007;
    sphere.rotation.x += 0.003;
    const scale = 1 + Math.sin(tick) * 0.1;
    sphere.scale.set(scale, scale, scale);
    renderer.render(scene, camera);
}
animate();

scene.add(new THREE.AmbientLight(0xffffff, 0.7));
const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(10, 10, 10);
scene.add(pointLight);

camera.position.z = 10;

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
