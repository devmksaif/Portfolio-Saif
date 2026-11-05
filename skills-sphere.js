/* === Skills 3D: rotating sphere of tech tags === */

(function () {
  const host = document.getElementById('skills-3d');
  if (!host) return;

  const reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.matchMedia && window.matchMedia('(max-width: 768px)').matches;

  // The render loop only runs while the scene is near the viewport.
  let isVisible = false;
  let wake = null;

  // Lazy-init: only build this WebGL scene when it scrolls near the viewport,
  // keeping it off the critical path at page load.
  let started = false;
  function init() {
    if (started) return;
    started = true;

  const w = host.clientWidth;
  const h = host.clientHeight;

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
  renderer.setSize(w, h);
  host.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, w / h, 0.1, 100);
  camera.position.z = isMobile ? 28 : 18;

  // ---- text sprites for each skill ----
  const SKILLS = [
    // Frontend
    'React', 'Next.js', 'Vue.js', 'Remix', 'TypeScript', 'Redux', 'Tailwind', 'MUI', 'Shadcn/UI',
    // Backend
    'Node.js', 'Express', 'NestJS', 'Hapi.js', 'Go', 'Spring Boot', 'Laravel', 'FastAPI', 'Flask', 'GraphQL', 'Microservices', 'WebSockets',
    // GenAI / LLM
    'OpenAI', 'Gemini', 'DeepSeek', 'LangChain', 'LangGraph', 'RAG', 'Multi-Agent', 'Embeddings', 'ElevenLabs',
    // Databases
    'PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'SQLite', 'Supabase', 'Prisma',
    // Systems
    'C', 'C++17', 'LLVM', 'OpenGL', 'ImGui', 'GTK', 'Compilers',
    // Mobile
    'React Native', 'Expo', 'Flutter', 'WebRTC',
    // DevOps / Cloud
    'Docker', 'Kubernetes',
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
    sp.scale.set(3.4, 0.85, 1);
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

  // drag (mouse, touch, pen), plus hover parallax kept as a separate offset
  let dragX = 0, dragY = 0, targetX = 0, targetY = 0;
  let parallaxX = 0, parallaxY = 0;
  let down = false, lastX = 0, lastY = 0;
  host.addEventListener('pointerdown', (e) => {
    down = true; lastX = e.clientX; lastY = e.clientY;
    host.classList.add('dragging');
  });
  function endDrag() {
    down = false;
    host.classList.remove('dragging');
  }
  window.addEventListener('pointerup', endDrag);
  window.addEventListener('pointercancel', endDrag);
  window.addEventListener('pointermove', (e) => {
    if (down) {
      targetY += (e.clientX - lastX) * 0.005;
      targetX += (e.clientY - lastY) * 0.005;
      lastX = e.clientX; lastY = e.clientY;
      if (reduceMotion) tick();
    } else if (!reduceMotion && e.pointerType === 'mouse') {
      // parallax follow when over host
      const r = host.getBoundingClientRect();
      if (e.clientX > r.left && e.clientX < r.right && e.clientY > r.top && e.clientY < r.bottom) {
        parallaxY = ((e.clientX - r.left) / r.width - 0.5) * 1.2;
        parallaxX = ((e.clientY - r.top) / r.height - 0.5) * 0.6;
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
  let running = false;
  function tick() {
    const t = reduceMotion ? 0 : clock.getElapsedTime();
    if (reduceMotion) {
      dragX = targetX;
      dragY = targetY;
    } else {
      dragX += (targetX + parallaxX - dragX) * 0.05;
      dragY += (targetY + parallaxY - dragY) * 0.05;
    }

    group.rotation.y = dragY + t * 0.1;
    group.rotation.x = dragX * 0.5;

    // billboard sprites toward camera (sprites are auto-billboarded)
    renderer.render(scene, camera);
    if (!reduceMotion && isVisible) requestAnimationFrame(tick);
    else running = false;
  }
  wake = function () {
    if (running || reduceMotion) return;
    running = true;
    tick();
  };
  if (reduceMotion) tick(); else wake();
  }

  // If WebGL or three.js is unavailable, drop the empty box: the HTML carries the content.
  function start() {
    try { init(); } catch (e) { host.hidden = true; }
  }

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(function (entries) {
      isVisible = entries[entries.length - 1].isIntersecting;
      if (isVisible) { start(); if (wake) wake(); }
    }, { rootMargin: '300px' });
    io.observe(host);
  } else {
    isVisible = true;
    start();
  }
})();
