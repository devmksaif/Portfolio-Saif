/* === Solar system: each project = a planet orbiting a central star === */

(function () {
  const host = document.getElementById('solar-3d');
  if (!host) return;

  const w = host.clientWidth, h = host.clientHeight;
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(w, h);
  host.appendChild(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 200);
  camera.position.set(0, 18, 32);
  camera.lookAt(0, 0, 0);

  // central star
  const star = new THREE.Mesh(
    new THREE.SphereGeometry(1.6, 32, 32),
    new THREE.MeshBasicMaterial({ color: 0xfff5e0 })
  );
  scene.add(star);
  const starGlow = new THREE.Mesh(
    new THREE.SphereGeometry(2.6, 32, 32),
    new THREE.MeshBasicMaterial({ color: 0x00d4ff, transparent: true, opacity: 0.15, blending: THREE.AdditiveBlending })
  );
  scene.add(starGlow);

  // background star dust
  const dustGeom = new THREE.BufferGeometry();
  const dustPos = new Float32Array(800 * 3);
  for (let i = 0; i < 800; i++) {
    dustPos[i*3+0] = (Math.random() - 0.5) * 120;
    dustPos[i*3+1] = (Math.random() - 0.5) * 60;
    dustPos[i*3+2] = (Math.random() - 0.5) * 120;
  }
  dustGeom.setAttribute('position', new THREE.BufferAttribute(dustPos, 3));
  scene.add(new THREE.Points(dustGeom, new THREE.PointsMaterial({
    color: 0xffffff, size: 0.06, transparent: true, opacity: 0.7, depthWrite: false, blending: THREE.AdditiveBlending,
  })));

  // planets
  const PLANETS = [
    { name: 'CALLIVERSE', radius: 4.5,  size: 0.55, speed: 0.42, color: 0x00d4ff, tilt: 0.05 },
    { name: 'BLINK',      radius: 6.5,  size: 0.45, speed: 0.30, color: 0x7c3aed, tilt: 0.12 },
    { name: 'CRAFTGENT',  radius: 8.5,  size: 0.70, speed: 0.22, color: 0xff2d92, tilt: 0.0  },
    { name: 'JULIABOT',   radius: 11,   size: 0.85, speed: 0.16, color: 0x00d4ff, tilt: 0.08 },
    { name: 'ACTE',       radius: 13.5, size: 0.50, speed: 0.12, color: 0x7c3aed, tilt: 0.04 },
  ];

  const planetGroup = new THREE.Group();
  scene.add(planetGroup);

  PLANETS.forEach((p) => {
    // orbit ring
    const segs = 128;
    const orbitPts = [];
    for (let i = 0; i <= segs; i++) {
      const a = (i / segs) * Math.PI * 2;
      orbitPts.push(new THREE.Vector3(Math.cos(a) * p.radius, 0, Math.sin(a) * p.radius));
    }
    const orbit = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(orbitPts),
      new THREE.LineBasicMaterial({ color: 0x00d4ff, transparent: true, opacity: 0.18 })
    );
    orbit.rotation.x = p.tilt;
    scene.add(orbit);

    // pivot for orbit motion
    const pivot = new THREE.Group();
    pivot.rotation.x = p.tilt;
    pivot.userData.speed = p.speed;
    pivot.userData.angle = Math.random() * Math.PI * 2;
    planetGroup.add(pivot);

    // planet
    const mesh = new THREE.Mesh(
      new THREE.IcosahedronGeometry(p.size, 1),
      new THREE.MeshBasicMaterial({ color: p.color, wireframe: true })
    );
    mesh.position.x = p.radius;
    pivot.add(mesh);

    // halo
    const halo = new THREE.Mesh(
      new THREE.SphereGeometry(p.size * 1.6, 16, 16),
      new THREE.MeshBasicMaterial({ color: p.color, transparent: true, opacity: 0.12, blending: THREE.AdditiveBlending })
    );
    halo.position.x = p.radius;
    pivot.add(halo);

    // label sprite
    const cv = document.createElement('canvas');
    cv.width = 512; cv.height = 64;
    const ctx = cv.getContext('2d');
    ctx.font = '500 28px JetBrains Mono, monospace';
    ctx.fillStyle = '#' + p.color.toString(16).padStart(6, '0');
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(p.name, cv.width/2, cv.height/2);
    const tex = new THREE.CanvasTexture(cv);
    tex.minFilter = THREE.LinearFilter;
    const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false }));
    sp.scale.set(5, 0.6, 1);
    sp.position.set(p.radius, p.size + 1.0, 0);
    pivot.add(sp);
  });

  function resize() {
    const w = host.clientWidth, h = host.clientHeight;
    renderer.setSize(w, h);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  }
  window.addEventListener('resize', resize);

  // very gentle camera orbit on mouse
  let mx = 0, my = 0, tmx = 0, tmy = 0;
  host.addEventListener('mousemove', (e) => {
    const r = host.getBoundingClientRect();
    tmx = ((e.clientX - r.left) / r.width - 0.5) * 2;
    tmy = ((e.clientY - r.top) / r.height - 0.5) * 2;
  });

  const clock = new THREE.Clock();
  function tick() {
    const t = clock.getElapsedTime();
    mx += (tmx - mx) * 0.04;
    my += (tmy - my) * 0.04;

    const camR = 34;
    const camAngle = mx * 0.5;
    camera.position.x = Math.sin(camAngle) * camR;
    camera.position.z = Math.cos(camAngle) * camR;
    camera.position.y = 18 + my * 4;
    camera.lookAt(0, 0, 0);

    planetGroup.children.forEach((piv) => {
      piv.userData.angle += 0.005 * piv.userData.speed;
      piv.rotation.y = piv.userData.angle;
    });

    star.rotation.y = t * 0.2;
    starGlow.scale.setScalar(1 + Math.sin(t * 1.5) * 0.05);

    renderer.render(scene, camera);
    requestAnimationFrame(tick);
  }
  tick();
})();
