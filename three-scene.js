/* === Three.js BG: scroll-driven constellation fly-through ===
 * - Particle field (stars + nebula dust)
 * - 8 project nodes as glowing icospheres connected by lines (constellation)
 * - Camera follows a curved spline based on scroll progress
 * - Subtle parallax on mouse
 */

(function () {
  const canvas = document.getElementById('three-canvas');
  if (!canvas) return;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 0);

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x05070d, 0.018);

  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 400);
  camera.position.set(0, 0, 30);

  // ---- Stars (3 layers for parallax) ----
  function makeStars(count, range, size, color) {
    const geom = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * range;
      positions[i * 3 + 1] = (Math.random() - 0.5) * range;
      positions[i * 3 + 2] = (Math.random() - 0.5) * range;
    }
    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const mat = new THREE.PointsMaterial({
      color, size, transparent: true, opacity: 0.85,
      sizeAttenuation: true, depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    return new THREE.Points(geom, mat);
  }
  scene.add(makeStars(2200, 360, 0.08, 0xffffff));
  scene.add(makeStars(1400, 280, 0.16, 0x00d4ff));
  scene.add(makeStars(700, 220, 0.22, 0x7c3aed));

  // ---- Nebula dust (large soft particles) ----
  const nebGeom = new THREE.BufferGeometry();
  const nebCount = 220;
  const nebPos = new Float32Array(nebCount * 3);
  for (let i = 0; i < nebCount; i++) {
    nebPos[i * 3 + 0] = (Math.random() - 0.5) * 180;
    nebPos[i * 3 + 1] = (Math.random() - 0.5) * 120;
    nebPos[i * 3 + 2] = (Math.random() - 0.5) * 200;
  }
  nebGeom.setAttribute('position', new THREE.BufferAttribute(nebPos, 3));
  const nebMat = new THREE.PointsMaterial({
    color: 0x00d4ff,
    size: 4.5,
    transparent: true,
    opacity: 0.06,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  });
  scene.add(new THREE.Points(nebGeom, nebMat));

  // ---- Project nodes ----
  const PROJECTS = [
    { name: 'CALLIVERSE',  pos: [-14,  6, -10], color: 0x00d4ff },
    { name: 'BLINK',       pos: [ 12,  4, -22], color: 0x7c3aed },
    { name: 'CRAFTGENT',   pos: [-8, -10, -38], color: 0xff2d92 },
    { name: 'JULIABOT',    pos: [ 16, -2, -54], color: 0x00d4ff },
    { name: 'ACTE',        pos: [-18,  8, -72], color: 0x7c3aed },
    { name: 'TOPNET',      pos: [  8, -12, -90], color: 0x00d4ff },
    { name: 'INFOPRO',     pos: [-12,  2, -108], color: 0xff2d92 },
    { name: 'IEEE',        pos: [ 14,  10, -124], color: 0x00d4ff },
  ];

  const nodeGroup = new THREE.Group();
  scene.add(nodeGroup);

  PROJECTS.forEach((p, i) => {
    // Glowing core
    const core = new THREE.Mesh(
      new THREE.IcosahedronGeometry(0.7, 1),
      new THREE.MeshBasicMaterial({ color: p.color, wireframe: true, transparent: true, opacity: 0.9 })
    );
    core.position.set(...p.pos);
    core.userData.spin = { x: Math.random() * 0.01, y: Math.random() * 0.01 };
    nodeGroup.add(core);

    // Halo
    const halo = new THREE.Mesh(
      new THREE.SphereGeometry(1.4, 16, 16),
      new THREE.MeshBasicMaterial({ color: p.color, transparent: true, opacity: 0.08, blending: THREE.AdditiveBlending })
    );
    halo.position.set(...p.pos);
    nodeGroup.add(halo);

    // Outer ring
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(2.2, 0.015, 8, 64),
      new THREE.MeshBasicMaterial({ color: p.color, transparent: true, opacity: 0.5 })
    );
    ring.position.set(...p.pos);
    ring.rotation.x = Math.random() * Math.PI;
    ring.rotation.y = Math.random() * Math.PI;
    ring.userData.spin = { x: 0.003, y: 0.005 };
    nodeGroup.add(ring);
  });

  // ---- Constellation lines (connect each node to next, plus some cross-links) ----
  const linePoints = [];
  for (let i = 0; i < PROJECTS.length - 1; i++) {
    linePoints.push(new THREE.Vector3(...PROJECTS[i].pos));
    linePoints.push(new THREE.Vector3(...PROJECTS[i + 1].pos));
  }
  // cross links
  const crosses = [[0, 3], [1, 4], [2, 5], [3, 6], [4, 7]];
  crosses.forEach(([a, b]) => {
    linePoints.push(new THREE.Vector3(...PROJECTS[a].pos));
    linePoints.push(new THREE.Vector3(...PROJECTS[b].pos));
  });
  const lineGeom = new THREE.BufferGeometry().setFromPoints(linePoints);
  const lineMat = new THREE.LineBasicMaterial({ color: 0x00d4ff, transparent: true, opacity: 0.2 });
  scene.add(new THREE.LineSegments(lineGeom, lineMat));

  // ---- Camera path (smooth spline through scenes) ----
  const pathPoints = [
    new THREE.Vector3(0, 0, 30),       // hero
    new THREE.Vector3(-3, 2, 10),      // about
    new THREE.Vector3(2, -1, -8),      // skills
    new THREE.Vector3(-2, 3, -28),     // experience
    new THREE.Vector3(4, -2, -52),     // projects
    new THREE.Vector3(-3, 1, -78),     // education
    new THREE.Vector3(2, 0, -106),     // contact
    new THREE.Vector3(0, 0, -130),     // beyond
  ];
  const camPath = new THREE.CatmullRomCurve3(pathPoints, false, 'catmullrom', 0.4);
  const lookAhead = 0.04;

  // ---- Mouse parallax ----
  const mouse = { x: 0, y: 0, tx: 0, ty: 0 };
  window.addEventListener('mousemove', (e) => {
    mouse.tx = (e.clientX / window.innerWidth - 0.5) * 2;
    mouse.ty = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  // ---- Scroll progress ----
  let scrollT = 0;
  let scrollTargetT = 0;
  function updateScroll() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    scrollTargetT = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
    const bar = document.getElementById('scroll-bar');
    if (bar) bar.style.width = (scrollTargetT * 100) + '%';
  }
  window.addEventListener('scroll', updateScroll, { passive: true });
  updateScroll();

  // ---- Resize ----
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // ---- Animate ----
  const clock = new THREE.Clock();
  function tick() {
    const t = clock.getElapsedTime();

    // smooth scroll
    scrollT += (scrollTargetT - scrollT) * 0.05;
    mouse.x += (mouse.tx - mouse.x) * 0.04;
    mouse.y += (mouse.ty - mouse.y) * 0.04;

    // camera follows path
    const u = Math.min(0.999, scrollT * 0.95);
    const pos = camPath.getPointAt(u);
    const ahead = camPath.getPointAt(Math.min(0.999, u + lookAhead));
    camera.position.copy(pos);
    camera.position.x += mouse.x * 1.2;
    camera.position.y += -mouse.y * 1.2;
    camera.lookAt(ahead);

    // gentle drift
    camera.position.y += Math.sin(t * 0.3) * 0.15;

    // spin nodes
    nodeGroup.children.forEach((m) => {
      if (m.userData.spin) {
        m.rotation.x += m.userData.spin.x;
        m.rotation.y += m.userData.spin.y;
      }
    });

    // pulse line opacity
    lineMat.opacity = 0.15 + Math.sin(t * 0.6) * 0.08;

    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  }
  tick();
})();
