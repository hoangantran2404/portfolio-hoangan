window.addEventListener("load", () => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 10;

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  const container = document.getElementById("bg-ball");
  renderer.domElement.style.position = "fixed";
  renderer.domElement.style.top = "0";
  renderer.domElement.style.left = "0";
  renderer.domElement.style.width = "100%";
  renderer.domElement.style.height = "100%";
  renderer.domElement.style.zIndex = "-1";
  renderer.domElement.style.pointerEvents = "none";
  container.appendChild(renderer.domElement);

  const geometry = new THREE.SphereGeometry(4, 64, 64);
  const material = new THREE.MeshStandardMaterial({
    color: 0xff4081,
    emissive: 0xff4081,
    emissiveIntensity: 1.2,
    metalness: 1,
    roughness: 0.1,
  });
  const sphere = new THREE.Mesh(geometry, material);
  scene.add(sphere);

  const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
  scene.add(ambientLight);

  const light1 = new THREE.PointLight(0xffffff, 1.5);
  light1.position.set(10, 10, 10);
  scene.add(light1);

  const light2 = new THREE.PointLight(0xff80ff, 1.2);
  light2.position.set(-10, -10, 5);
  scene.add(light2);

  function animate() {
    requestAnimationFrame(animate);
    sphere.rotation.x += 0.003;
    sphere.rotation.y += 0.004;
    renderer.render(scene, camera);
  }

  animate();

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
});
