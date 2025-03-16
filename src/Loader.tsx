import { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  OrbitControls,
  Stage,
  CameraShake,
  useAnimations,
} from "@react-three/drei";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

// Handling controls in Threejs is hard bc 3rd party components that change the camera need to know
// about controls, or else all changes are overwritten. That is the case for both <Stage and <CameraShake.
// In latest R3F controls can be set as the default so that other parts of the app may react to it.
// By setting <OrbitControls makeDefault <Stage and <CameraShake are aware of the controls being used.
// Should your own components rely on default controls, throughout the three they're available as:
//   const controls = useThree(state => state.controls)

useGLTF.preload("/robot.gltf");
function Model(props: object) {
  const { scene, animations } = useGLTF("/robot-draco.glb");
  const { actions } = useAnimations(animations, scene);
  useEffect(() => {
    if (actions.Idle) actions.Idle.play();
    scene.traverse(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (obj: any) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true)
    );
  }, [actions, scene]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return <primitive object={scene} {...props} />;
}

export default function Viewer() {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 100, { duration: 4 });

    return animation.stop;
  }, []);

  return (
    <>
      <Canvas
        shadows
        camera={{ fov: 50 }}
        style={{ width: "100vw", height: "100vh" }}
      >
        <Suspense fallback={null}>
          <Stage>
            <Model />
          </Stage>
        </Suspense>
        <OrbitControls makeDefault />
        <CameraShake
          maxYaw={0.1} // Max amount camera can yaw in either direction
          maxPitch={0.1} // Max amount camera can pitch in either direction
          maxRoll={0.1} // Max amount camera can roll in either direction
          yawFrequency={0.1} // Frequency of the the yaw rotation
          pitchFrequency={0.1} // Frequency of the pitch rotation
          // rollFrequency={0.1} // Frequency of the roll rotation
          intensity={1} // initial intensity of the shake
          decayRate={0.65} // if decay = true this is the rate at which intensity will reduce at />
        />
      </Canvas>
      <div className="fixed flex top-[80vh] justify-center w-full text-5xl ordinal slashed-zero tabular-nums font-mono">
        <motion.h1>{rounded}</motion.h1>
        <div>%</div>
      </div>
    </>
  );
}
