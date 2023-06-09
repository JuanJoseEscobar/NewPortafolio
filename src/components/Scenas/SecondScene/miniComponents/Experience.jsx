
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from 'three';


export const Experience = () => {
  const cubitoRef = useRef();
  const spheraRef = useRef();
  const miniPlayerRef = useRef();

  const SPEEDANIMATIONS = 2.5;
  const RADIOPLAYERX = 6;
  const RADIOPLAYERY = 4.5;


  useFrame((state, delta) => {
    // This function runs 60 times/second inside the global render-loop
    const angle = state.clock.elapsedTime;

    cubitoRef.current.rotation.y += Math.PI * 0.25 * delta;
    cubitoRef.current.position.y = Math.sin(angle * SPEEDANIMATIONS);

    spheraRef.current.position.y = -Math.sin(angle * SPEEDANIMATIONS);

    miniPlayerRef.current.position.x = -Math.sin(angle * SPEEDANIMATIONS) * RADIOPLAYERX;
    miniPlayerRef.current.position.z = -Math.cos(angle * SPEEDANIMATIONS) * RADIOPLAYERY;
    
  });

  return (
    <>

      <directionalLight position={[1,2,3]} intensity={0.75}/>
      <ambientLight intensity={0.25}/>

        <mesh
        ref={spheraRef}
         position-x={-6}>
          <sphereGeometry />
          <meshStandardMaterial color="orange"  />
        </mesh>

        <mesh
          ref={cubitoRef}
          position-x={6}
          rotation-y={Math.PI * 0.75}
          scale={1.4}
        >
          <boxGeometry />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>

      <mesh
      ref={miniPlayerRef}
       position={[4.5, 1, 0]}  scale={.5}>
        <capsuleGeometry />
        <meshStandardMaterial color={"greenyellow"} side={ THREE.DoubleSide }/>
      </mesh>
    </>
  );
};
