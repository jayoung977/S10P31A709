/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/object/Bush_4.glb -t -o src/components/content/canvas/maps/structures/ground/elements/Bush_4.tsx 
*/

import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { ObjectSettingType } from "../../../../../../../types/GameType";
import { useBox } from "@react-three/cannon";

type GLTFResult = GLTF & {
  nodes: {
    Bush004_Forest_Green_0: THREE.Mesh;
    Bush004_Grass_Green_0: THREE.Mesh;
  };
  materials: {
    Forest_Green: THREE.MeshStandardMaterial;
    Grass_Green: THREE.MeshStandardMaterial;
  };
};

export function Bush_4(props: ObjectSettingType) {
  const { nodes, materials } = useGLTF(
    "/models/object/Bush_4.glb"
  ) as GLTFResult;
  const [ref] = useBox<THREE.Mesh>(() => ({
    args: [4, 4.5, 1.7],
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
          geometry={nodes.Bush004_Forest_Green_0.geometry}
          material={materials.Forest_Green}
          position={props.position}
          rotation={props.rotation}
        />
        <mesh
          ref={ref}
          geometry={nodes.Bush004_Grass_Green_0.geometry}
          material={materials.Grass_Green}
          position={props.position}
          rotation={props.rotation}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/models/object/Bush_4.glb");
