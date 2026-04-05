import { ContactShadows, Environment, Float, useGLTF } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

type ExplodedGlbHeroSceneProps = {
  modelSrc: string;
  progress: number;
};

const EXPLODED_PEAK_RATIO = 0.54;

function LoadedExplodedModel({ modelSrc, progress }: ExplodedGlbHeroSceneProps) {
  const { scene, animations } = useGLTF(modelSrc);
  const rootRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  const { action, clonedScene, mixer, clipDuration, scale } = useMemo(() => {
    const cloned = scene.clone(true);
    cloned.updateMatrixWorld(true);

    const modelBox = new THREE.Box3().setFromObject(cloned);
    const modelSize = modelBox.getSize(new THREE.Vector3());
    const maxDimension = Math.max(modelSize.x, modelSize.y, modelSize.z, 0.001);
    const computedScale = 4.3 / maxDimension;
    const animationMixer = new THREE.AnimationMixer(cloned);
    const primaryClip = animations[0] ?? null;
    const primaryAction = primaryClip ? animationMixer.clipAction(primaryClip) : null;

    cloned.traverse((object) => {
      if (!(object instanceof THREE.Mesh)) {
        return;
      }

      object.castShadow = true;
      object.receiveShadow = true;

      const materialList = Array.isArray(object.material) ? object.material : [object.material];
      materialList.forEach((material) => {
        if (material && "envMapIntensity" in material) {
          material.envMapIntensity = 1.2;
        }
      });
    });

    if (primaryAction) {
      primaryAction.clampWhenFinished = true;
      primaryAction.setLoop(THREE.LoopOnce, 1);
      primaryAction.play();
      primaryAction.enabled = true;
      primaryAction.setEffectiveWeight(1);
      primaryAction.time = 0;
    }

    return {
      action: primaryAction,
      clonedScene: cloned,
      mixer: animationMixer,
      clipDuration: primaryClip?.duration ?? 0,
      scale: computedScale,
    };
  }, [animations, scene]);

  useEffect(() => {
    return () => {
      action?.stop();
      mixer.stopAllAction();
      mixer.uncacheRoot(clonedScene);
    };
  }, [action, clonedScene, mixer]);

  useFrame((state, delta) => {
    const eased = THREE.MathUtils.smootherstep(progress, 0, 1);
    const xPosition = viewport.width < 8 ? 0 : 2.65;
    const yPosition = viewport.width < 8 ? -0.22 : -0.06;
    const clipProgress = THREE.MathUtils.smoothstep(progress, 0.02, 0.82);
    const drift = Math.sin(state.clock.elapsedTime * 0.22) * 0.01;

    if (rootRef.current) {
      rootRef.current.position.x = THREE.MathUtils.damp(rootRef.current.position.x, xPosition, 4.2, delta);
      rootRef.current.position.y = THREE.MathUtils.damp(rootRef.current.position.y, yPosition, 4.2, delta);
      rootRef.current.rotation.x = THREE.MathUtils.damp(rootRef.current.rotation.x, -0.12, 4.2, delta);
      rootRef.current.rotation.y = THREE.MathUtils.damp(
        rootRef.current.rotation.y,
        -0.08 + drift,
        4.2,
        delta,
      );
      rootRef.current.rotation.z = THREE.MathUtils.damp(rootRef.current.rotation.z, -0.03, 4.2, delta);
      rootRef.current.scale.setScalar(scale * (viewport.width < 8 ? 0.72 : 0.6));
    }

    if (action && clipDuration > 0) {
      action.time = clipDuration * EXPLODED_PEAK_RATIO * clipProgress;
      mixer.update(0);
    }
  });

  return (
    <Float speed={0.8} rotationIntensity={0.05} floatIntensity={0.12}>
      <group ref={rootRef}>
        <primitive object={clonedScene} />
      </group>
    </Float>
  );
}

export default function ExplodedGlbHeroScene({ modelSrc, progress }: ExplodedGlbHeroSceneProps) {
  return (
    <Canvas
      shadows
      dpr={[1, 1.8]}
      gl={{ antialias: true, alpha: true }}
      camera={{ position: [0, 0.18, 13.3], fov: 21 }}
    >
      <color attach="background" args={["#f6f1e8"]} />
      <fog attach="fog" args={["#f6f1e8", 12, 28]} />
      <ambientLight intensity={1.35} color="#fffaf3" />
      <directionalLight position={[6, 5, 6]} intensity={3.5} castShadow color="#ffffff" />
      <directionalLight position={[-4, 1, 4]} intensity={1.1} color="#6b7cff" />
      <spotLight position={[0, 6, 2]} intensity={12} angle={0.34} penumbra={0.7} color="#7da8ff" />
      <Environment preset="studio" />

      <LoadedExplodedModel modelSrc={modelSrc} progress={progress} />

      <ContactShadows position={[2.55, -1.75, 0]} opacity={0.24} blur={3.4} scale={7.4} far={6} color="#8b837a" />
    </Canvas>
  );
}

useGLTF.preload("/assets/radial-pneumatic-engine.glb");
