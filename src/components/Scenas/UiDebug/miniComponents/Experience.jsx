import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import * as THREE from "three";
import {
  PivotControls,
  useCursor,
  Html,
  Text,
  Float,
} from "@react-three/drei";


function ObjMesh({
  children,
  principalColor = "#e64c4c",
  secondColor = "#fff",
  name = "Hellow Word!",
  ...props
}) {
  const refObj = useRef();

  const [hovered, setHovered] = useState(false);
  useCursor(hovered);

  return (
    <>
      <mesh
        ref={refObj}
        onPointerOver={(e) => setHovered(true)}
        onPointerOut={(e) => setHovered(false)}
        name={name}
        {...props}
      >
        {children}
        <meshStandardMaterial
          color={hovered ? secondColor : principalColor}
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


      {/* <PivotControls
        anchor={[0,0,0]}
        depthTest={false}
        lineWidth={2}
        axisColors={["#ee6a6a","#6ff36f","#6fc9f3"]}
        scale={100}
        fixed={true}
      /> */}

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
