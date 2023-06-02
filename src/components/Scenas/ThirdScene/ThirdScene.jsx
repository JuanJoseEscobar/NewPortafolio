import "./ThirdScene.scss";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./miniComponents/Experience";
import * as THREE from "three";
import { OrbitControls } from "@react-three/drei";

const cameraSettings = {
  fov: 45,
  near: 0.1,
  far: 200,
  position: [0, 5, 14],
};

//nueva configuracion
const glSettings = {
  antialias: true,
  toneMapping: THREE.ACESFilmicToneMapping,
  outputEncoding: THREE.LinearEncoding,
};

export const ThirdScene = () => {
  return (
    <div id="canvas-container1">
      <Canvas gl={glSettings} camera={cameraSettings}>
        <OrbitControls/>
        <Experience />
      </Canvas>
    </div>
  );
};
