/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("./models/DunaBlanco.glb");
  const { actions } = useAnimations(animations, group);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Madera" scale={0.001}>
          <group name="Objeto_23">
            <mesh
              name="Objeto_23_1"
              castShadow
              geometry={nodes.Objeto_23_1.geometry}
              material={materials.F_Blanco_Android}
            />
            <mesh
              name="Objeto_23_2"
              castShadow
              geometry={nodes.Objeto_23_2.geometry}
              material={materials.Pi_Negra_Metal}
            />
            <mesh
              name="Objeto_23_3"
              castShadow
              geometry={nodes.Objeto_23_3.geometry}
              material={materials["/P_Negro_Semibrillante"]}
            />
            <mesh
              name="Objeto_23_4"
              castShadow
              geometry={nodes.Objeto_23_4.geometry}
              material={materials.P_Blanco_Mate}
            />
            <mesh
              name="Objeto_23_5"
              castShadow
              geometry={nodes.Objeto_23_5.geometry}
              material={materials.Cromo}
            />
            <mesh
              name="Objeto_23_6"
              castShadow
              geometry={nodes.Objeto_23_6.geometry}
              material={materials.MDF_Android}
            />
            <mesh
              name="Objeto_23_7"
              castShadow
              geometry={nodes.Objeto_23_7.geometry}
              material={materials.N_Nevado_Android}
            />
            <mesh
              name="Objeto_23_8"
              castShadow
              geometry={nodes.Objeto_23_8.geometry}
              material={materials.N_Nevado_Android}
            />
            <mesh
              name="Objeto_23_9"
              castShadow
              geometry={nodes.Objeto_23_9.geometry}
              material={materials.N_Duna_Android}
            />
          </group>
        </group>
        <group name="Madera001" scale={0.001}>
          <group name="Objeto_56">
            <mesh
              name="Objeto_56001"
              castShadow
              geometry={nodes.Objeto_56001.geometry}
              material={materials["MDF_Android.004"]}
            />
            <mesh
              name="Objeto_56001_1"
              castShadow
              geometry={nodes.Objeto_56001_1.geometry}
              material={materials.Pi_Negra_Metal}
            />
            <mesh
              name="Objeto_56001_2"
              castShadow
              geometry={nodes.Objeto_56001_2.geometry}
              material={materials.Cromo}
            />
            <mesh
              name="Objeto_56001_3"
              castShadow
              geometry={nodes.Objeto_56001_3.geometry}
              material={materials.F_Blanco_Android}
            />
            <mesh
              name="Objeto_56001_4"
              castShadow
              geometry={nodes.Objeto_56001_4.geometry}
              material={materials.N_Nevado_Android}
            />
            <mesh
              name="Objeto_56001_5"
              castShadow
              geometry={nodes.Objeto_56001_5.geometry}
              material={materials.N_Nevado_Android}
            />
            <mesh
              name="Objeto_56001_6"
              castShadow
              geometry={nodes.Objeto_56001_6.geometry}
              material={materials.N_Duna_Android}
            />
          </group>
        </group>
        <group name="Madera002" scale={0.001}>
          <group name="Objeto_8">
            <mesh
              name="Objeto_8002"
              castShadow
              geometry={nodes.Objeto_8002.geometry}
              material={materials["MDF_Android.004"]}
            />
            <mesh
              name="Objeto_8002_1"
              castShadow
              geometry={nodes.Objeto_8002_1.geometry}
              material={materials.Pi_Negra_Metal}
            />
            <mesh
              name="Objeto_8002_2"
              castShadow
              geometry={nodes.Objeto_8002_2.geometry}
              material={materials.Cromo}
            />
            <mesh
              name="Objeto_8002_3"
              castShadow
              geometry={nodes.Objeto_8002_3.geometry}
              material={materials.F_Blanco_Android}
            />
            <mesh
              name="Objeto_8002_4"
              castShadow
              geometry={nodes.Objeto_8002_4.geometry}
              material={materials.N_Nevado_Android}
            />
            <mesh
              name="Objeto_8002_5"
              castShadow
              geometry={nodes.Objeto_8002_5.geometry}
              material={materials.N_Nevado_Android}
            />
            <mesh
              name="Objeto_8002_6"
              castShadow
              geometry={nodes.Objeto_8002_6.geometry}
              material={materials.N_Duna_Android}
            />
          </group>
        </group>
        <group name="Madera003" scale={0.001}>
          <group name="Objeto_7">
            <mesh
              name="Objeto_7003"
              castShadow
              geometry={nodes.Objeto_7003.geometry}
              material={materials["MDF_Android.004"]}
            />
            <mesh
              name="Objeto_7003_1"
              castShadow
              geometry={nodes.Objeto_7003_1.geometry}
              material={materials.Pi_Negra_Metal}
            />
            <mesh
              name="Objeto_7003_2"
              castShadow
              geometry={nodes.Objeto_7003_2.geometry}
              material={materials.Cromo}
            />
            <mesh
              name="Objeto_7003_3"
              castShadow
              geometry={nodes.Objeto_7003_3.geometry}
              material={materials.F_Blanco_Android}
            />
            <mesh
              name="Objeto_7003_4"
              castShadow
              geometry={nodes.Objeto_7003_4.geometry}
              material={materials.N_Nevado_Android}
            />
            <mesh
              name="Objeto_7003_5"
              castShadow
              geometry={nodes.Objeto_7003_5.geometry}
              material={materials.N_Nevado_Android}
            />
            <mesh
              name="Objeto_7003_6"
              castShadow
              geometry={nodes.Objeto_7003_6.geometry}
              material={materials.N_Duna_Android}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/DunaBlanco.glb");
