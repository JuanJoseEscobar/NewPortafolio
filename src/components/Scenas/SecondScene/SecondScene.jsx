import "./SecondScene.scss";
import { Canvas } from "@react-three/fiber";
import { Experience } from "./miniComponents/Experience";
import * as THREE from "three";

const cameraSettings = {
  fov: 30,
  near: 0.1,
  far: 200,
  position: [0, 5, 14],
};

export const SecondScene = () => {
  return (
    <>
      <div id="FrontLine">
        <div className="CenterOfPage">
          <h1>holaaa</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae inventore fugiat nihil eveniet repudiandae, facilis iste blanditiis cumque assumenda provident? Nemo enim et doloribus impedit. Fugit expedita aut voluptas excepturi.</p>
        </div>
      </div>
      <div id="canvas-container">
        <Canvas
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
    </>
  );
};
