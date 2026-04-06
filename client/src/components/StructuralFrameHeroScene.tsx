import { Environment, Float } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const materialProps = {
  color: "#d9dee7",
  metalness: 0.18,
  roughness: 0.34,
} as const;

function StructuralFrameModel() {
  const rootRef = useRef<THREE.Group>(null);

  const floorLevels = useMemo(
    () => Array.from({ length: 12 }, (_, index) => -2.15 + index * 0.38),
    [],
  );
  const columnX = [-1.8, -0.6, 0.6, 1.8];
  const columnZ = [-1.28, 0, 1.28];
  const outerColumnX = [-2.3, 2.3];
  const outerColumnZ = [-1.85, 1.85];

  useFrame((state, delta) => {
    if (!rootRef.current) return;

    rootRef.current.rotation.y += delta * 0.35;
    rootRef.current.rotation.x = THREE.MathUtils.damp(rootRef.current.rotation.x, -0.18, 3.5, delta);
    rootRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.7) * 0.06 + 0.15;
  });

  return (
    <Float speed={0.85} rotationIntensity={0.05} floatIntensity={0.14}>
      <group ref={rootRef} scale={1.58} position={[0, -0.25, 0]}>
        <mesh position={[0, -2.82, 0]} castShadow receiveShadow>
          <boxGeometry args={[5.6, 0.22, 4.2]} />
          <meshStandardMaterial {...materialProps} />
        </mesh>

        <mesh position={[0, -2.52, 0]} castShadow receiveShadow>
          <boxGeometry args={[4.45, 0.18, 3.05]} />
          <meshStandardMaterial color="#e6ebf4" metalness={0.12} roughness={0.3} />
        </mesh>

        {columnX.flatMap((x) =>
          columnZ.map((z) => (
            <mesh key={`core-col-${x}-${z}`} position={[x, -0.02, z]} castShadow receiveShadow>
              <boxGeometry args={[0.08, 4.75, 0.08]} />
              <meshStandardMaterial {...materialProps} />
            </mesh>
          )),
        )}

        {outerColumnX.flatMap((x) =>
          outerColumnZ.map((z) => (
            <mesh key={`outer-col-${x}-${z}`} position={[x, -1.12, z]} castShadow receiveShadow>
              <boxGeometry args={[0.08, 2.55, 0.08]} />
              <meshStandardMaterial color="#cbd3de" metalness={0.16} roughness={0.36} />
            </mesh>
          )),
        )}

        {floorLevels.map((y) => (
          <group key={`floor-${y}`} position={[0, y, 0]}>
            <mesh position={[0, 0, -1.28]} castShadow receiveShadow>
              <boxGeometry args={[4.15, 0.04, 0.05]} />
              <meshStandardMaterial {...materialProps} />
            </mesh>
            <mesh position={[0, 0, 1.28]} castShadow receiveShadow>
              <boxGeometry args={[4.15, 0.04, 0.05]} />
              <meshStandardMaterial {...materialProps} />
            </mesh>
            <mesh position={[-1.8, 0, 0]} castShadow receiveShadow>
              <boxGeometry args={[0.05, 0.04, 2.61]} />
              <meshStandardMaterial {...materialProps} />
            </mesh>
            <mesh position={[1.8, 0, 0]} castShadow receiveShadow>
              <boxGeometry args={[0.05, 0.04, 2.61]} />
              <meshStandardMaterial {...materialProps} />
            </mesh>
            <mesh position={[0, 0, 0]} castShadow receiveShadow>
              <boxGeometry args={[4.15, 0.02, 2.61]} />
              <meshStandardMaterial color="#aab6c8" transparent opacity={0.16} metalness={0.05} roughness={0.5} />
            </mesh>
          </group>
        ))}

        <mesh position={[0, 2.62, 0]} castShadow receiveShadow>
          <boxGeometry args={[2.65, 0.12, 1.68]} />
          <meshStandardMaterial color="#eef2fa" metalness={0.14} roughness={0.28} />
        </mesh>

        <mesh position={[0, 3.0, 0]} castShadow receiveShadow>
          <boxGeometry args={[0.95, 0.32, 0.78]} />
          <meshStandardMaterial color="#d7dde8" metalness={0.18} roughness={0.34} />
        </mesh>
      </group>
    </Float>
  );
}

export default function StructuralFrameHeroScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0.55, 6.2], fov: 24 }}
    >
      <ambientLight intensity={1.25} color="#f7f8ff" />
      <directionalLight position={[5, 6, 4]} intensity={2.4} color="#ffffff" />
      <directionalLight position={[-4, 1, 5]} intensity={1.15} color="#7fb4ff" />
      <spotLight position={[0, 7, 0]} intensity={7} angle={0.32} penumbra={0.75} color="#7f9cff" />
      <Environment preset="city" />

      <StructuralFrameModel />
    </Canvas>
  );
}
