import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { useControls, button } from "leva";
import {
  PivotControls,
  useCursor,
  Html,
  Text,
  Float,
  TransformControls,
} from "@react-three/drei";

function ObjMesh({
  children,
  name = "Hellow Word!",
}) {

  const refObj = useRef();
  const refTrans = useRef();

  useEffect(() => {
    //console.log(refObj)
  }, []);

  const [hovered, setHovered] = useState(false);
  useCursor(hovered);

  const [{ color, visible }, set] = useControls(
    "Elementals",
    () => ({
      position: {
        value: { x: 0, y: 2, z: 0 },
        step: 0.1,
        onChange: ({x,y,z})=>{
          console.log('i changed')
          refObj.current.position.x = x;
          refObj.current.position.y = y;
          refObj.current.position.z = z;
        }
      },
      color: "#dd196eff",
      visible: true,
      clickMe: button(() => {
        window.alert("you clicked me!");
      }),
    })
  );

  useFrame((state, delta)=>{
    const {x,y,z} = refObj.current.position;
    set({position:{ x:x, y:y, z:z}})
  });

  return (
    <>
      <mesh
        ref={refObj}
        onPointerOver={(e) => setHovered(true)}
        onPointerOut={(e) => setHovered(false)}
        name={name}
        visible={visible}
      >
        {children}
        <meshStandardMaterial color={hovered ? '#fff' : color} />
        <Html
          position={[0, 1.5, 0]}
          wrapperClass="tituloObjecto"
          center
          distanceFactor={8}
        >
          <h1>{name}</h1>
        </Html>
      </mesh>
      <TransformControls 
        
        ref={refTrans}
        object={refObj}
      />
    </>
  );
}

export const Experience = () => {
  const refPlane = useRef();

  // const [{name}, set] = useControls('name',()=>({ text: 'AzTro'}))//variable tipo usestate
  const { name, choice } = useControls("name", { name: "AzTro", choice: { options: ["Cubo", "Esfera"] }, });

  useFrame((state, delta) => {
    
  });

  return (
    <>
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.25} />

      <ObjMesh
        name={name}
      >
        {choice == "Cubo" ? (
          <boxGeometry args={[2, 2, 2]} />
        ) : (
          <sphereGeometry args={[1.5]} />
        )}
      </ObjMesh>

      {/* <ObjMesh position={[3, 2, 0]} principalColor="#217dbf" name="Nix">
        <sphereGeometry />
      </ObjMesh> */}

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
          UI
        </Text>
      </Float>
    </>
  );
};
