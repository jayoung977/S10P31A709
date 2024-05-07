/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/object/Lamp_3.glb -t -o src/components/content/canvas/maps/structures/ground/elements/Lamp_3.tsx 
*/

import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { ObjectSettingType } from '../../../../../../../types/GameType';
import { useBox } from '@react-three/cannon';

type GLTFResult = GLTF & {
    nodes: {
        Mesh267: THREE.Mesh;
        Mesh267_1: THREE.Mesh;
    };
    materials: {
        Cartoon_Room_Mat: THREE.MeshStandardMaterial;
        Cartoon_Room_Emission: THREE.MeshStandardMaterial;
    };
};

export function Lamp_3(props: ObjectSettingType) {
    const { nodes, materials } = useGLTF(
        '/models/object/Lamp_3.glb'
    ) as GLTFResult;
    const [ref] = useBox<THREE.Mesh>(() => ({
        args: [1, 1, 1],
        mass: 0.1,
        position: props.position,
        rotation: props.rotation,
        linearFactor: [0, 0, 0], // 모든 축에 대해 이동 제한
        angularFactor: [0, 0, 0], // 모든 축에 대해 회전 제한
    }));
    return (
        <group dispose={null}>
            <group>
                <mesh
                    ref={ref}
                    geometry={nodes.Mesh267.geometry}
                    material={materials.Cartoon_Room_Mat}
                    position={props.position}
                    rotation={props.rotation}
                    scale={0.025}
                />
                <mesh
                    geometry={nodes.Mesh267_1.geometry}
                    material={materials.Cartoon_Room_Emission}
                    position={props.position}
                    rotation={props.rotation}
                    scale={0.025}
                />
            </group>
        </group>
    );
}

useGLTF.preload('/models/object/Lamp_3.glb');