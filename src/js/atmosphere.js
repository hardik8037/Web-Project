/* ═══════════════════════════════════════════════════
   BOTZO.IO — GLOBAL ATMOSPHERE ENGINE
   Cinematic 3D depth system across the entire site.
   Lightweight Three.js + scroll-reactive + mouse-aware.
   ═══════════════════════════════════════════════════ */

import * as THREE from 'three';

export class AtmosphereEngine {
  constructor() {
    this.isDestroyed = false;
    this.isVisible = true;
    this.mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };
    this.scroll = { y: 0, velocity: 0, lastY: 0 };
    this.startTime = performance.now();
    this.frameCount = 0;

    // Performance: reduce on mobile
    this.isMobile = window.innerWidth < 768;
    this.isTablet = window.innerWidth < 1024;

    this.init();
    this.createParticleField();
    this.createNeuralNetwork();
    this.createOrbitalGeometry();
    this.createAmbientOrbs();
    this.bindEvents();
    this.animate();
  }

  init() {
    // Create canvas container
    this.container = document.createElement('div');
    this.container.id = 'atmosphere-canvas';
    this.container.style.cssText = `
      position: fixed;
      inset: 0;
      z-index: 0;
      pointer-events: none;
      overflow: hidden;
    `;
    document.body.prepend(this.container);

    this.width = window.innerWidth;
    this.height = window.innerHeight;

    // Scene setup
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(60, this.width / this.height, 0.1, 100);
    this.camera.position.set(0, 0, 6);

    // Renderer — performance optimized
    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: false,
      powerPreference: 'high-performance',
      stencil: false,
      depth: false,
    });
    this.renderer.setSize(this.width, this.height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, this.isMobile ? 1 : 1.5));
    this.renderer.setClearColor(0x000000, 0);

    this.container.appendChild(this.renderer.domElement);
  }

  /* ═══ PARTICLE FIELD ═══ */
  createParticleField() {
    const count = this.isMobile ? 400 : this.isTablet ? 600 : 900;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const phases = new Float32Array(count);

    const purple = new THREE.Color('#9C27FF');
    const lightPurple = new THREE.Color('#B84DFF');
    const dimPurple = new THREE.Color('#7B1FA2');
    const white = new THREE.Color('#F5F5F7');

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      // Distribute in a wide cylindrical volume
      const radius = 1.5 + Math.random() * 7;
      const theta = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 14; // tall vertical spread

      positions[i3] = radius * Math.cos(theta);
      positions[i3 + 1] = y;
      positions[i3 + 2] = (Math.random() - 0.5) * 6 - 2;

      // Color palette
      const r = Math.random();
      let color;
      if (r < 0.35) color = purple.clone().lerp(lightPurple, Math.random());
      else if (r < 0.6) color = dimPurple.clone().lerp(purple, Math.random());
      else if (r < 0.85) color = lightPurple.clone().lerp(white, Math.random() * 0.2);
      else color = white.clone();

      colors[i3] = color.r;
      colors[i3 + 1] = color.g;
      colors[i3 + 2] = color.b;

      sizes[i] = Math.random() * 4.5 + 1.2;
      phases[i] = Math.random() * Math.PI * 2;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
    geometry.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1));

    const material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: { value: 0 },
        uMouse: { value: new THREE.Vector2(0, 0) },
        uScroll: { value: 0 },
        uPixelRatio: { value: this.renderer.getPixelRatio() },
      },
      vertexShader: `
        uniform float uTime;
        uniform vec2 uMouse;
        uniform float uScroll;
        uniform float uPixelRatio;
        attribute float aSize;
        attribute float aPhase;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vAlpha;

        void main() {
          vColor = color;

          vec3 pos = position;
          float phase = aPhase;
          float speed = aSize * 0.08;

          // Gentle orbital drift
          pos.x += sin(uTime * speed * 0.12 + phase) * 0.25;
          pos.y += cos(uTime * speed * 0.09 + phase * 1.3) * 0.18;
          pos.z += sin(uTime * speed * 0.07 + phase * 0.7) * 0.12;

          // Scroll-driven vertical shift
          pos.y += uScroll * 0.0008;

          // Mouse influence — boosted for clear cursor-driven drift
          float mouseInfluence = 0.85;
          pos.x += uMouse.x * mouseInfluence * (1.0 - abs(position.z) * 0.12);
          pos.y += uMouse.y * mouseInfluence * (1.0 - abs(position.z) * 0.12);

          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          gl_PointSize = aSize * uPixelRatio * (5.5 / -mvPosition.z);

          // Depth-based alpha with pulsing
          float dist = length(mvPosition.xyz);
          float pulse = sin(uTime * 0.8 + phase) * 0.2 + 0.8;
          vAlpha = smoothstep(22.0, 2.0, dist) * 0.95 * pulse;
        }
      `,
      fragmentShader: `
        varying vec3 vColor;
        varying float vAlpha;

        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          if (dist > 0.5) discard;

          // Soft glow falloff
          float alpha = smoothstep(0.5, 0.05, dist) * vAlpha;
          float glow = smoothstep(0.5, 0.1, dist) * 0.7;
          gl_FragColor = vec4(vColor, alpha + glow * vAlpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    this.particles = new THREE.Points(geometry, material);
    this.scene.add(this.particles);
  }

  /* ═══ NEURAL NETWORK LINES ═══ */
  createNeuralNetwork() {
    if (this.isMobile) return; // Skip on mobile for performance

    const nodeCount = this.isTablet ? 30 : 50;
    this.networkNodes = [];
    this.networkPositions = new Float32Array(nodeCount * 3);

    for (let i = 0; i < nodeCount; i++) {
      const radius = 2 + Math.random() * 5;
      const theta = Math.random() * Math.PI * 2;
      const y = (Math.random() - 0.5) * 10;
      const node = {
        x: radius * Math.cos(theta),
        y: y,
        z: (Math.random() - 0.5) * 4 - 1,
        speed: Math.random() * 0.3 + 0.1,
        phase: Math.random() * Math.PI * 2,
      };
      this.networkNodes.push(node);
    }

    // Line geometry — we'll update positions in animate()
    const maxConnections = nodeCount * 4;
    this.linePositions = new Float32Array(maxConnections * 6);
    this.lineColors = new Float32Array(maxConnections * 6);
    this.lineGeometry = new THREE.BufferGeometry();
    this.lineGeometry.setAttribute('position', new THREE.BufferAttribute(this.linePositions, 3));
    this.lineGeometry.setAttribute('color', new THREE.BufferAttribute(this.lineColors, 3));
    this.lineGeometry.setDrawRange(0, 0);

    const lineMaterial = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    this.networkLines = new THREE.LineSegments(this.lineGeometry, lineMaterial);
    this.scene.add(this.networkLines);
  }

  /* ═══ ORBITAL GEOMETRY ═══ */
  createOrbitalGeometry() {
    if (this.isMobile) return;

    this.orbitals = [];
    const shapes = [
      { geo: new THREE.IcosahedronGeometry(1.2, 1), pos: [-3, 2, -5], speed: 0.08 },
      { geo: new THREE.OctahedronGeometry(0.8, 0), pos: [4, -1.5, -6], speed: 0.06 },
    ];

    if (!this.isTablet) {
      shapes.push(
        { geo: new THREE.TetrahedronGeometry(0.6, 0), pos: [-2, -3, -4], speed: 0.1 }
      );
    }

    shapes.forEach(({ geo, pos, speed }) => {
      const edges = new THREE.EdgesGeometry(geo);
      const material = new THREE.LineBasicMaterial({
        color: '#B84DFF',
        transparent: true,
        opacity: 0.28,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      });
      const wireframe = new THREE.LineSegments(edges, material);
      wireframe.position.set(...pos);
      wireframe.userData = { speed, basePos: [...pos] };
      this.scene.add(wireframe);
      this.orbitals.push(wireframe);
      geo.dispose();
    });
  }

  /* ═══ AMBIENT GLOW ORBS ═══ */
  createAmbientOrbs() {
    this.orbs = [];
    const orbGeometry = new THREE.SphereGeometry(1, 12, 12);

    const orbConfigs = [
      { color: '#9C27FF', pos: [-3.5, 3, -5], radius: 1.4, speed: 0.15 },
      { color: '#B84DFF', pos: [4, 0, -6], radius: 1.2, speed: 0.12 },
      { color: '#7B1FA2', pos: [0, -4, -4], radius: 1.6, speed: 0.1 },
      { color: '#9C27FF', pos: [-2, -2, -7], radius: 1.0, speed: 0.18 },
    ];

    if (!this.isMobile) {
      orbConfigs.push(
        { color: '#B84DFF', pos: [3, 4, -8], radius: 1.3, speed: 0.08 }
      );
    }

    orbConfigs.forEach(config => {
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color(config.color),
        transparent: true,
        opacity: 0.18,
      });
      const orb = new THREE.Mesh(orbGeometry, material);
      orb.position.set(...config.pos);
      orb.scale.setScalar(config.radius);
      orb.userData = { speed: config.speed, basePos: [...config.pos] };
      this.scene.add(orb);
      this.orbs.push(orb);
    });

    orbGeometry.dispose(); // shared geometry
  }

  /* ═══ EVENTS ═══ */
  bindEvents() {
    this._onResize = () => {
      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.camera.aspect = this.width / this.height;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(this.width, this.height);
      this.isMobile = this.width < 768;
      this.isTablet = this.width < 1024;
    };

    this._onMouseMove = (e) => {
      this.mouse.targetX = (e.clientX / this.width) * 2 - 1;
      this.mouse.targetY = -(e.clientY / this.height) * 2 + 1;
    };

    this._onScroll = () => {
      this.scroll.lastY = this.scroll.y;
      this.scroll.y = window.scrollY;
      this.scroll.velocity = this.scroll.y - this.scroll.lastY;
    };

    this._onVisibility = () => {
      this.isVisible = !document.hidden;
    };

    window.addEventListener('resize', this._onResize, { passive: true });
    window.addEventListener('mousemove', this._onMouseMove, { passive: true });
    window.addEventListener('scroll', this._onScroll, { passive: true });
    document.addEventListener('visibilitychange', this._onVisibility);
  }

  /* ═══ ANIMATION LOOP ═══ */
  animate() {
    if (this.isDestroyed) return;
    requestAnimationFrame(() => this.animate());

    if (!this.isVisible) return;

    // Throttle to ~30fps on mobile
    this.frameCount++;
    if (this.isMobile && this.frameCount % 2 !== 0) return;

    const elapsed = (performance.now() - this.startTime) / 1000;

    // Smooth mouse lerp
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.06;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.06;

    // === Camera drift ===
    this.camera.position.x = this.mouse.x * 2.2;
    // Boosted vertical shift for screen scroll
    this.camera.position.y = this.mouse.y * 1.8 - this.scroll.y * 0.0018;
    // Scroll-driven camera zoom: User moves deep *through* the 3D space on scroll
    this.camera.position.z = 6.0 - Math.min(this.scroll.y * 0.0012, 3.2);

    // Scroll-driven camera rotation: Rotate view direction as you scroll
    this.camera.rotation.x = Math.sin(elapsed * 0.08) * 0.008 + this.mouse.y * 0.06 + this.scroll.y * 0.00015;
    this.camera.rotation.y = Math.cos(elapsed * 0.06) * 0.006 - this.mouse.x * 0.08 + this.scroll.y * 0.00025;

    // === Particles ===
    if (this.particles) {
      const u = this.particles.material.uniforms;
      u.uTime.value = elapsed;
      u.uMouse.value.set(this.mouse.x, this.mouse.y);
      u.uScroll.value = this.scroll.y;
      // Spin the particle field on scroll for vortex feel
      this.particles.rotation.y = elapsed * 0.008 + this.scroll.y * 0.00035;
      this.particles.rotation.x = this.scroll.y * 0.0001;
    }

    // === Neural network ===
    if (this.networkLines && this.networkNodes) {
      this.updateNeuralNetwork(elapsed);
    }

    // === Orbital geometry ===
    if (this.orbitals) {
      this.orbitals.forEach(obj => {
        const { speed, basePos } = obj.userData;
        obj.rotation.x = elapsed * speed;
        // Shift rotation on scroll
        obj.rotation.y = elapsed * speed * 0.7 + this.scroll.y * 0.0002;
        obj.rotation.z = elapsed * speed * 0.3;
        obj.position.y = basePos[1] + Math.sin(elapsed * speed * 0.5) * 0.5;
        obj.position.x = basePos[0] + Math.cos(elapsed * speed * 0.3) * 0.3;
        // Stronger scroll parallax on orbitals
        obj.position.y -= this.scroll.y * 0.0022;
      });
    }

    // === Ambient orbs ===
    if (this.orbs) {
      this.orbs.forEach(orb => {
        const { speed, basePos } = orb.userData;
        orb.position.x = basePos[0] + Math.sin(elapsed * speed) * 1.2;
        orb.position.y = basePos[1] + Math.cos(elapsed * speed * 0.7) * 0.8;
        orb.scale.setScalar(orb.scale.x + (1 + Math.sin(elapsed * speed * 0.4) * 0.15 - orb.scale.x) * 0.02);
        // Stronger scroll parallax on orbs
        orb.position.y -= this.scroll.y * 0.0015;
      });
    }

    this.renderer.render(this.scene, this.camera);
  }

  updateNeuralNetwork(elapsed) {
    const nodes = this.networkNodes;
    const threshold = 4.2;
    let lineIdx = 0;
    const purple = new THREE.Color('#B84DFF');

    // Update node positions
    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      const x = n.x + Math.sin(elapsed * n.speed * 0.15 + n.phase) * 0.4;
      const y = n.y + Math.cos(elapsed * n.speed * 0.12 + n.phase * 1.2) * 0.3 - this.scroll.y * 0.0006;
      const z = n.z + Math.sin(elapsed * n.speed * 0.08 + n.phase * 0.6) * 0.15;

      this.networkPositions[i * 3] = x;
      this.networkPositions[i * 3 + 1] = y;
      this.networkPositions[i * 3 + 2] = z;
    }

    // Find connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dx = this.networkPositions[i * 3] - this.networkPositions[j * 3];
        const dy = this.networkPositions[i * 3 + 1] - this.networkPositions[j * 3 + 1];
        const dz = this.networkPositions[i * 3 + 2] - this.networkPositions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < threshold && lineIdx < this.linePositions.length / 6) {
          const idx = lineIdx * 6;
          const alpha = 1 - dist / threshold;

          this.linePositions[idx] = this.networkPositions[i * 3];
          this.linePositions[idx + 1] = this.networkPositions[i * 3 + 1];
          this.linePositions[idx + 2] = this.networkPositions[i * 3 + 2];
          this.linePositions[idx + 3] = this.networkPositions[j * 3];
          this.linePositions[idx + 4] = this.networkPositions[j * 3 + 1];
          this.linePositions[idx + 5] = this.networkPositions[j * 3 + 2];

          // Purple color with distance fade
          this.lineColors[idx] = purple.r * alpha;
          this.lineColors[idx + 1] = purple.g * alpha;
          this.lineColors[idx + 2] = purple.b * alpha;
          this.lineColors[idx + 3] = purple.r * alpha;
          this.lineColors[idx + 4] = purple.g * alpha;
          this.lineColors[idx + 5] = purple.b * alpha;

          lineIdx++;
        }
      }
    }

    this.lineGeometry.attributes.position.needsUpdate = true;
    this.lineGeometry.attributes.color.needsUpdate = true;
    this.lineGeometry.setDrawRange(0, lineIdx * 2);
  }

  /* ═══ CLEANUP ═══ */
  destroy() {
    this.isDestroyed = true;
    window.removeEventListener('resize', this._onResize);
    window.removeEventListener('mousemove', this._onMouseMove);
    window.removeEventListener('scroll', this._onScroll);
    document.removeEventListener('visibilitychange', this._onVisibility);

    // Dispose Three.js resources
    this.scene.traverse(obj => {
      if (obj.geometry) obj.geometry.dispose();
      if (obj.material) {
        if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose());
        else obj.material.dispose();
      }
    });
    this.renderer.dispose();
    this.container.remove();
  }
}
