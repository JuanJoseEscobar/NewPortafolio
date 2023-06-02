import {useEffect, useRef, useMemo } from 'react';
import * as THREE from 'three'

const CustomeObject = () => {

    const geometryRef = useRef();

    const VerticesCount = 10*3;
    
    const positions = useMemo(() => {
        const positions = new Float32Array(VerticesCount * 3)
    
        for(let i = 0; i < VerticesCount * 3; i++){
            positions[i] = (Math.random() - .5) * 3
        }
        return positions
    }, [])

    //con esto se puede esperar el segundo frame ya que el primero no funcionan ciertas cosas.
    useEffect(()=>{
        geometryRef.current.computeVertexNormals()//desbuguea la geometria
        console.log(geometryRef.current)
    },[])
  
  return (<mesh scale={0.75}>
    <bufferGeometry ref={geometryRef}>
        <bufferAttribute
            attach="attributes-position"
            count={VerticesCount}
            itemSize={ 3 }
            array={ positions }
        />
    </bufferGeometry>
    <meshStandardMaterial color={"red"} side={ THREE.DoubleSide }/>
  </mesh>);
}

export default CustomeObject