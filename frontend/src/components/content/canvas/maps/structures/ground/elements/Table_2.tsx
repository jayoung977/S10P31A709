/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/object/Table_2.glb -t -o src/components/content/canvas/maps/structures/ground/elements/Table_2.tsx 
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { ObjectSettingType } from "../../../../../../../types/GameType";

import { useBox } from "@react-three/cannon";
import React from "react";
type GLTFResult = GLTF & {
  nodes: {
    Table_2_Dark_Blue_0: THREE.Mesh;
    Table_2_Dark_Gray_0: THREE.Mesh;
  };
  materials: {
    Dark_Blue_17: THREE.MeshStandardMaterial;
    Dark_Gray: THREE.MeshStandardMaterial;
  };
};

function Table_2Component(props: ObjectSettingType) {
  const { nodes, materials } = useGLTF(
    "/models/object/Table_2.glb"
  ) as GLTFResult;
  const [ref] = useBox<THREE.Mesh>(() => ({
    args: [1, 1, 1.45],

    mass: 0.1,

    position: props.position,

    rotation: props.rotation,

    linearFactor: [0, 0, 0], // 모든 축에 대해 이동 제한

    angularFactor: [0, 0, 0], // 모든 축에 대해 회전 제한
  }));
  return (
    <group position={[0, 0, 0]} dispose={null}>
      <group>
        <mesh
          ref={ref}
          geometry={nodes.Table_2_Dark_Blue_0.geometry}
          material={materials.Dark_Blue_17}
          position={props.position}
          rotation={props.rotation}
        />
        <mesh
          ref={ref}
          geometry={nodes.Table_2_Dark_Gray_0.geometry}
          material={materials.Dark_Gray}
          position={props.position}
          rotation={props.rotation}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/object/Table_2.glb");

function areEqual(
  prevProps: ObjectSettingType,
  nextProps: ObjectSettingType
) {
  return (
    prevProps.position[0] === nextProps.position[0] &&
    prevProps.position[1] === nextProps.position[1] &&
    prevProps.position[2] === nextProps.position[2]
  );
} 

export default React.memo(Table_2Component, areEqual);