import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

function Stars() {
  const ref = useRef();
  const count = 1800;

  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = 3.5 + Math.random() * 7;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    positions[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.03;
      ref.current.rotation.y = state.clock.elapsedTime * 0.04;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.012}
        sizeAttenuation
        depthWrite={false}
        opacity={0.35}
      />
    </Points>
  );
}

function FloatingGeometry() {
  const meshRef  = useRef();
  const mesh2Ref = useRef();
  const mesh3Ref = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.12;
      meshRef.current.rotation.y = t * 0.18;
      meshRef.current.position.y = Math.sin(t * 0.45) * 0.25;
    }
    if (mesh2Ref.current) {
      mesh2Ref.current.rotation.x = -t * 0.09;
      mesh2Ref.current.rotation.z = t * 0.11;
      mesh2Ref.current.position.x = Math.cos(t * 0.35) * 0.18;
    }
    if (mesh3Ref.current) {
      mesh3Ref.current.rotation.y = t * 0.15;
      mesh3Ref.current.rotation.z = t * 0.07;
      mesh3Ref.current.position.y = Math.cos(t * 0.55) * 0.18;
    }
  });

  return (
    <>
      {/* Icosahedron — lime wireframe, top right */}
      <mesh ref={meshRef} position={[3.8, 1.6, -2.5]}>
        <icosahedronGeometry args={[1, 1]} />
        <meshBasicMaterial color="#a3e635" wireframe opacity={0.35} transparent />
      </mesh>

      {/* Torus — white dim wireframe, bottom left */}
      <mesh ref={mesh2Ref} position={[-3.8, -1.4, -3.5]}>
        <torusGeometry args={[0.9, 0.22, 16, 60]} />
        <meshBasicMaterial color="#ffffff" wireframe opacity={0.12} transparent />
      </mesh>

      {/* Octahedron — lime, top left */}
      <mesh ref={mesh3Ref} position={[-2.8, 2.0, -2.8]}>
        <octahedronGeometry args={[0.8]} />
        <meshBasicMaterial color="#a3e635" wireframe opacity={0.2} transparent />
      </mesh>
    </>
  );
}

export default function ParticlesCanvas() {
  return (
    <div id="canvas-container">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Stars />
        <FloatingGeometry />
      </Canvas>
    </div>
  );
}
