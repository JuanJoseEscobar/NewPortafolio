import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import { proxy, useSnapshot } from "valtio";
import { useControls, button } from "leva";
import * as THREE from "three";
import {
  TransformControls,
  PivotControls,
  useCursor,
  Html,
  Text,
  Float,
  MeshReflectorMaterial,
} from "@react-three/drei";

const modes = ["translate", "rotate", "scale"];
const state = proxy({ current: null, mode: 0 });

function ObjMesh({
  children,
  principalColor = "#e64c4c",
  secondColor = "#fff",
  name = "Hellow Word!",
  ...props
}) {
  const snap = useSnapshot(state);
  const refObj = useRef();

  const [hovered, setHovered] = useState(false);
  useCursor(hovered);

  return (
    <>
      <mesh
        ref={refObj}
        onClick={(e) => (e.stopPropagation(), (state.current = name))}
        onPointerMissed={(e) => e.type === "click" && (state.current = null)}
        onContextMenu={(e) =>
          snap.current === name &&
          (e.stopPropagation(), (state.mode = (snap.mode + 1) % modes.length))
        }
        onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
        onPointerOut={(e) => setHovered(false)}
        name={name}
        {...props}
      >
        {children}
        <meshStandardMaterial
          color={hovered && snap.current != name ? secondColor : principalColor}
        />
        <Html
          position={[0, 1.5, 0]}
          wrapperClass="tituloObjecto"
          center
          distanceFactor={8}
        >
          <h1>{name}</h1>
        </Html>
      </mesh>
    </>
  );
}

function ControlsPivot() {
  // Get notified on changes to state
  const snap = useSnapshot(state);
  const scene = useThree((state) => state.scene);

  return (
    <>
      {snap.current && (
        <TransformControls
          object={scene.getObjectByName(snap.current)}
          mode={modes[snap.mode]}
        />
      )}
    </>
  );
}

export const Experience = () => {
  const refPlane = useRef();

  useFrame((state, delta) => {
    //groupRef.current.rotation.y += Math.PI * 0.1 * delta;
  });

  return (
    <>
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.25} />

      <ObjMesh position={[-3, 2, 0]} principalColor="#4c4c4c" name="AzTro">
        <sphereGeometry />
      </ObjMesh>

      <ObjMesh position={[3, 2, 0]} principalColor="#217dbf" name="Nix">
        <boxGeometry args={[2, 2, 2]} />
      </ObjMesh>

      <ObjMesh position={[0, 2, 0]} principalColor="#d6851c" name="Snow">
        <boxGeometry args={[1, 1, 1]} />
      </ObjMesh>

      <ControlsPivot />

      <mesh
        ref={refPlane}
        position={[0, 0, -1]}
        rotation-x={-(Math.PI * 0.5)}
        scale={[15, 15, 1]}
      >
        <planeGeometry />
        <meshStandardMaterial color={"#2f8233"} side={THREE.DoubleSide} />
      </mesh>

      <Float speed={5} floatIntensity={2}>
        <Text
          font="./Inter-Regular.woff"
          position={[0, 4.5, -5]}
          fontSize={1.5}
          color={"#ff007b"}
          textAlign="center"
        >
          Transform Controls
        </Text>
      </Float>
    </>
  );
};
