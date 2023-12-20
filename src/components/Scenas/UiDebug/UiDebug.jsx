import "../StylesScenas.scss";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./miniComponents/Experience";
import { OrbitControls } from "@react-three/drei";
import { Leva  } from "leva";

const cameraSettings = {
  fov: 45,
  near: 0.1,
  far: 200,
  position: [0, 7, 15],
};

//nueva configuracion
const glSettings = {
  antialias: true,
  toneMapping: 4,
  outputEncoding: 3000,
};


export const UiDebug = () => {
  return (
    <div id="canvas-container1">
      <Leva collapsed  />
        <Canvas gl={glSettings} camera={cameraSettings}>
          <OrbitControls makeDefault/>
          <Experience />
        </Canvas>
    </div>
  );
};
