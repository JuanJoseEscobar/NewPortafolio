import { useCursor } from "@react-three/drei";
import { useFrame  } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from 'three';


function loadGUI() {
  
}

function ObjMesh ({
  children,
  principalColor = '#de4242',
  secondColor = 'orange',
  position = [0,0,0]
})
{
  const refObj = useRef();

  const [hoveredCursor, setHoveredCursor] = useState(false);
  useCursor(hoveredCursor);
  const [hovered, setHover] = useState(false);
  const [clicked, setClick] = useState(false);

  useFrame((state, delta) => {
    refObj.current.rotation.y += Math.PI * 0.25 * delta;
    
  });

  return(
    <mesh
      position = {position}
      ref={refObj}
      scale={clicked ? 1.5 : 1}
      onClick={()=>setClick(!clicked)}
      onPointerOver={()=>{setHover(true); setHoveredCursor(true)}}
      onPointerOut={()=>{setHover(false); setHoveredCursor(false)}}
    >
      {children}
      <meshStandardMaterial color={hovered ? secondColor  : principalColor }/>
    </mesh>
  );
}

export const Experience = () => {

  
  useEffect(() => {
    loadGUI();
  
  }, [])
  

  const groupRef = useRef();

  //   console.log();

  useFrame((state, delta) => {
    
    groupRef.current.rotation.y += Math.PI * 0.1 * delta;
    
  });

  return (
    <>

      <directionalLight position={[1,2,3]} intensity={1.5}/>
      <ambientLight intensity={0.25} />

      <group ref={groupRef} position={[0, .5, 0]} scale={1.2
    }>
      <ObjMesh
        position={[-3, 0, 0]}
        >
        <sphereGeometry />
      </ObjMesh>

      <ObjMesh
        position={[3, 0, 0]}
      >
        <boxGeometry args={[1.5,1.5,1.5]}/>
      </ObjMesh>
      
      </group>

      <ObjMesh
        position={[0,.5,0]}
        principalColor='#e438d6'
        secondColor = '#6da1c4'
      >
        <boxGeometry args={[1,1,1]}/>
      </ObjMesh>


      <mesh position={[0, -1, 0]} rotation-x={-(Math.PI * 0.5)} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color={"greenyellow"} side={ THREE.DoubleSide }/>
      </mesh>
    </>
  );
};
