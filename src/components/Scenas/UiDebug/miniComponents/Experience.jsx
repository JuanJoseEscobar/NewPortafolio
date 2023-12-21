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
import { Perf } from "r3f-perf";
import { Model } from "./Model";

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

  const [{ color, visible, rotation, grados }, set] = useControls(
    "Figura",
    () => ({
      position: {
        value: { x: 0, y: 2, z: 0 },
        step: 0.1,
        onChange: ({x,y,z})=>{
          refObj.current.position.x = x;
          refObj.current.position.y = y;
          refObj.current.position.z = z;
        }
      },
      scale: {
        value: { x: 1, y: 1, z: 1 },
        step: 0.1,
        onChange: ({x,y,z})=>{
          refObj.current.scale.x = x;
          refObj.current.scale.y = y;
          refObj.current.scale.z = z;
        }
      },
      rotation: {
        value: { x: 0, y: 0, z: 0 },
        step: .01,
        // onChange: ({x,y,z})=>{
        //   refObj.current.rotation.x = (Math.PI * x) / 180;
        //   refObj.current.rotation.y = (Math.PI * y) / 180;
        //   refObj.current.rotation.z = (Math.PI * z) / 180;
        // }
      },
      grados: false,
      color: "#dd196eff",
      visible: true,
      clickMe: button(() => {
        window.alert("you clicked me!");
      }),
    })
  );

  useFrame((state, delta)=>{
    const {x,y,z} = refObj.current.position;
    refObj.current.rotation.x = grados ? (Math.PI * rotation.x) / 180 : Math.PI * rotation.x;
    refObj.current.rotation.y = grados ? (Math.PI * rotation.y) / 180 : Math.PI * rotation.y;
    refObj.current.rotation.z = grados ? (Math.PI * rotation.z) / 180 : Math.PI * rotation.z;
    set({position:{ x:x, y:y, z:z}})
  });

  return (
    <>
      <mesh
        ref={refObj}
        onPointerOver={(e) => setHovered(true)}
        onPointerOut={(e) => setHovered(false)}
        name={name}
        castShadow
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
  const [{ name, Figura, PrefVisible, background}, set] = useControls("Esena", () => ({ name: "AzTro", Figura: { options: ["Cubo", "Esfera", "Figura"] }, PrefVisible: false, background: "#f8ffde" }));
  
  useEffect(() => {
    set({background:"ivory"})
  }, [])
  

  useFrame((state, delta) => {
    
  });

  return (
    <>
      {PrefVisible && <Perf position="top-left"/>}
      <color args={[background]} attach="background"/>

      <directionalLight castShadow position={[10, 20, 30]} intensity={1.5} />
      <ambientLight castShadow intensity={0.25} />

      <ObjMesh
        name={name}
        
      >
        {Figura == "Cubo" ? (
          <boxGeometry args={[2, 2, 2]} />
        ) : Figura == "Esfera" ? (
          <sphereGeometry args={[1.5]} />
        ) :
          <Model scale={ [ 2, 2, 2 ] }/>
        }
      </ObjMesh>

      <mesh
        //ref={refPlane}
        receiveShadow={true}
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
          UI + Transform
        </Text>
      </Float>
    </>
  );
};
