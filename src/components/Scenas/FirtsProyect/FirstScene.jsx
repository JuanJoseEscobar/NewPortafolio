import "./FirstScene.scss";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./miniComponents/Experience";
import * as THREE from "three";

const cameraSettings = {
  fov: 45,
  near: 0.1,
  far: 200,
  position: [0, 5, 14],
};

export const FirstScene = () => {
  return (
    <div id="canvas-container1">
      <Canvas
        //flat
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          outputEncoding: THREE.sRGBEncoding,
        }}
        camera={cameraSettings}
        legacy={false}
      >
        <Experience />
      </Canvas>
    </div>
  );
};
