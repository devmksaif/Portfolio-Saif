/* === Skills 3D: rotating sphere of tech tags === */

(function () {
  const host = document.getElementById('skills-3d');
  if (!host) return;

  const w = host.clientWidth;
  const h = host.clientHeight;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(w, h);
  host.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
  camera.position.z = 18;

  // ---- text sprites for each skill ----
  const SKILLS = [
    'React Native', 'TypeScript', 'Node.js', 'Spring Boot', 'Next.js',
    'PostgreSQL', 'MongoDB', 'Docker', 'Kubernetes', 'GraphQL',
    'WebRTC', 'WebSockets', 'Firebase', 'Supabase', 'Tailwind',
    'NestJS', 'Python', 'TensorFlow', 'PyTorch', 'OpenAI',
    'LangChain', 'RAG', 'Express', 'Redux', 'Recoil',
    'Stripe', 'Clerk', 'OAuth2', 'JWT', 'Prisma',
    'TypeORM', 'FastAPI', 'Flask', 'Java', 'C++',
    'GCP', 'CI/CD', 'Git', 'Lottie', 'MUI',
  ];

  function makeLabel(text, color) {
    const cv = document.createElement('canvas');
    cv.width = 512;
    cv.height = 128;
    const ctx = cv.getContext('2d');
    ctx.fillStyle = 'rgba(0,0,0,0)';
    ctx.fillRect(0, 0, cv.width, cv.height);
    ctx.font = '600 56px JetBrains Mono, monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = color;
    ctx.shadowColor = color;
    ctx.shadowBlur = 16;
    ctx.fillText(text, cv.width / 2, cv.height / 2);
    const tex = new THREE.CanvasTexture(cv);
    tex.minFilter = THREE.LinearFilter;
    const mat = new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false });
    const sp = new THREE.Sprite(mat);
    sp.scale.set(4, 1, 1);
    return sp;
  }

  const group = new THREE.Group();
  scene.add(group);

  // distribute on sphere via fibonacci
  const N = SKILLS.length;
  const R = 7;
  for (let i = 0; i < N; i++) {
    const phi = Math.acos(1 - 2 * (i + 0.5) / N);
    const theta = Math.PI * (1 + Math.sqrt(5)) * i;
    const x = R * Math.sin(phi) * Math.cos(theta);
    const y = R * Math.sin(phi) * Math.sin(theta);
    const z = R * Math.cos(phi);

    // alternate colors
    const palette = ['#00d4ff', '#7c3aed', '#ffffff', '#ff2d92'];
    const c = palette[i % palette.length];
    const sp = makeLabel(SKILLS[i], c);
    sp.position.set(x, y, z);
    group.add(sp);
  }

  // wireframe sphere
  const wire = new THREE.Mesh(
    new THREE.SphereGeometry(R, 24, 16),
    new THREE.MeshBasicMaterial({ color: 0x00d4ff, wireframe: true, transparent: true, opacity: 0.06 })
  );
  group.add(wire);

  // pole indicators
  const poleGeom = new THREE.BufferGeometry().setFromPoints([
    new THREE.Vector3(0, -R - 1.2, 0),
    new THREE.Vector3(0,  R + 1.2, 0),
  ]);
  group.add(new THREE.Line(poleGeom, new THREE.LineBasicMaterial({ color: 0x00d4ff, transparent: true, opacity: 0.2 })));

  // mouse drag/parallax
  let dragX = 0, dragY = 0, targetX = 0, targetY = 0;
  let down = false, lastX = 0, lastY = 0;
  host.addEventListener('mousedown', (e) => { down = true; lastX = e.clientX; lastY = e.clientY; });
  window.addEventListener('mouseup', () => down = false);
  window.addEventListener('mousemove', (e) => {
    if (down) {
      targetY += (e.clientX - lastX) * 0.005;
      targetX += (e.clientY - lastY) * 0.005;
      lastX = e.clientX; lastY = e.clientY;
    } else {
      // parallax follow when over host
      const r = host.getBoundingClientRect();
      if (e.clientX > r.left && e.clientX < r.right && e.clientY > r.top && e.clientY < r.bottom) {
        targetY = ((e.clientX - r.left) / r.width - 0.5) * 1.2;
        targetX = ((e.clientY - r.top) / r.height - 0.5) * 0.6;
      }
    }
  });

  function resize() {
    const w = host.clientWidth, h = host.clientHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  window.addEventListener('resize', resize);

  const clock = new THREE.Clock();
  function tick() {
    const t = clock.getElapsedTime();
    dragX += (targetX - dragX) * 0.05;
    dragY += (targetY - dragY) * 0.05;

    group.rotation.y = dragY + t * 0.1;
    group.rotation.x = dragX * 0.5;

    // billboard sprites toward camera (sprites are auto-billboarded)
    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  }
  tick();
})();
