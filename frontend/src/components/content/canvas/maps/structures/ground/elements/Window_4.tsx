/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/object/Window_4.glb -t -o src/components/content/canvas/maps/structures/ground/elements/Window_4.tsx 
*/

import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { ObjectSettingType } from '../../../../../../../types/GameType';
import { useBox } from '@react-three/cannon';

type GLTFResult = GLTF & {
    nodes: {
        Mesh073: THREE.Mesh;
        Mesh073_1: THREE.Mesh;
    };
    materials: {
        Cartoon_Room_Mat: THREE.MeshStandardMaterial;
        Cartoon_Room_Glass: THREE.MeshStandardMaterial;
    };
};

export function Window_4(props: ObjectSettingType) {
    const { nodes, materials } = useGLTF(
        '/models/object/Window_4.glb'
    ) as GLTFResult;
    const [ref] = useBox<THREE.Mesh>(() => ({
        args: [5, 0.6, 4.5],
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
                    geometry={nodes.Mesh073.geometry}
                    material={materials.Cartoon_Room_Mat}
                    position={props.position}
                    rotation={props.rotation}
                    scale={0.025}
                />
                <mesh
                    geometry={nodes.Mesh073_1.geometry}
                    material={materials.Cartoon_Room_Glass}
                    position={props.position}
                    rotation={props.rotation}
                    scale={0.025}
                />
            </group>
        </group>
    );
}

useGLTF.preload('/models/object/Window_4.glb');