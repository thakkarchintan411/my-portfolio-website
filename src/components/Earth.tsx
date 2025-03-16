import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const Earth = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let scene, camera, renderer, globe;
    let mouseX = 0;
    let mouseY = 0;

    // Scene setup
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 2;

    // Renderer setup
    renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true  // Transparent background
    });
    renderer.setSize(window.innerWidth / 2, window.innerWidth / 2);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef?.current?.appendChild(renderer.domElement);

    // Earth creation
    const geometry = new THREE.SphereGeometry(1, 64, 64);
    
    // Load textures
    const textureLoader = new THREE.TextureLoader();
    const earthMap = textureLoader.load('/earth/earthmap.jpg');
    const bumpMap = textureLoader.load('/earth/earthbump.jpg');
    const specularMap = textureLoader.load('/earth/earthspec.jpg');
    
    const material = new THREE.MeshPhongMaterial({
      map: earthMap,
      bumpMap: bumpMap,
      bumpScale: 0.05,
      specularMap: specularMap,
      specular: new THREE.Color('grey'),
      shininess: 5
    });

    globe = new THREE.Mesh(geometry, material);
    scene.add(globe);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 1);
    pointLight.position.set(5, 3, 5);
    scene.add(pointLight);

    // Add subtle atmosphere glow
    const atmosphereGeometry = new THREE.SphereGeometry(1.1, 64, 64);
    const atmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vertexNormal;
        void main() {
          vertexNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vertexNormal;
        void main() {
          float intensity = pow(0.7 - dot(vertexNormal, vec3(0.0, 0.0, 1.0)), 2.0);
          gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity;
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true
    });

    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    scene.add(atmosphere);

    // Mouse movement effect
    const onMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.001;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.001;
    };

    window.addEventListener('mousemove', onMouseMove);

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);

      // Smooth rotation based on mouse position
      globe.rotation.y += 0.001;
      globe.rotation.y += (mouseX - globe.rotation.y) * 0.01;
      globe.rotation.x += (mouseY - globe.rotation.x) * 0.01;
      
      atmosphere.rotation.y = globe.rotation.y;
      atmosphere.rotation.x = globe.rotation.x;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      const width = window.innerWidth / 2;
      const height = width;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      mountRef?.current?.removeChild(renderer.domElement);
      
      // Dispose resources
      geometry.dispose();
      material.dispose();
      atmosphereGeometry.dispose();
      atmosphereMaterial.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef}
      className="absolute right-0 top-1/2 -translate-y-1/2"
    />
  );
};

export default Earth;