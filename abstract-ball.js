// Three.js abstract ball background effect - bottom center
const container = document.createElement('div');
container.id = 'abstract-ball-bg';
document.body.appendChild(container);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, window.innerWidth/(window.innerHeight*0.6), 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight*0.6);
container.appendChild(renderer.domElement);

// Tạo hình cầu hiệu ứng abstract
const geometry = new THREE.SphereGeometry(4, 64, 64);
const material = new THREE.MeshStandardMaterial({
    color: 0x222266,
    roughness: 0.25,
    metalness: 0.8,
    transparent: true,
    opacity: 0.85
});
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

// Ánh sáng + camera
scene.add(new THREE.AmbientLight(0xffffff, 0.7));
const pointLight = new THREE.PointLight(0xffffff, 1.2);
pointLight.position.set(10, 10, 20);
scene.add(pointLight);

camera.position.z = 10;

// Animation chuyển động giống mẫu
function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.y += 0.008;
    sphere.rotation.x = Math.sin(Date.now() * 0.0007) * 0.25;
    sphere.scale.set(1 + Math.sin(Date.now()*0.001)*0.05, 1 + Math.cos(Date.now()*0.001)*0.05, 1);
    renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / (window.innerHeight*0.6);
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight*0.6);
});
