import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { extend, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import CustomeObject from "./CustomeObject";
import * as THREE from 'three';

extend({ OrbitControls });

export const Experience = () => {
  const cubitoRef = useRef();
  const groupRef = useRef();
  const { camera, gl } = useThree();

  //   console.log();

  useFrame((state, delta) => {
    // This function runs 60 times/second inside the global render-loop
    cubitoRef.current.rotation.y += Math.PI * 0.25 * delta;
    groupRef.current.rotation.y += Math.PI * 0.1 * delta;

    /**Se utilizo este codigo para rotar la camra circularmente mirando al centro */
    // const angle = state.clock.elapsedTime;
    // state.camera.position.x = Math.sin(angle) * 10;
    // state.camera.position.z = Math.cos(angle) * 10;
    // state.camera.lookAt(0,0,0);
    /*********************************** */
    
    // console.log(state.camera)

    //console.log(state.clock.elapsedTime);//tiempo total transcurrido
    // console.log(position);
    
  });

  return (
    <>
      <orbitControls args={[camera, gl.domElement]} />

      <directionalLight position={[1,2,3]} intensity={0.75}/>
      <ambientLight intensity={0.25}/>

      <group ref={groupRef} position={[0, .5, 0]} scale={1.2
    }>
        <mesh position-x={-3}>
          <sphereGeometry />
          <meshStandardMaterial color="orange"  />
        </mesh>

        <mesh
          ref={cubitoRef}
          position-x={3}
          rotation-y={Math.PI * 0.75}
          scale={1.4}
        >
          {/* <sphereGeometry args={[1.5,32,32]}/> */}
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
      </group>

      <CustomeObject/>

      <mesh position={[0, -1, 0]} rotation-x={-(Math.PI * 0.5)} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color={"greenyellow"} side={ THREE.DoubleSide }/>
      </mesh>
    </>
  );
};
