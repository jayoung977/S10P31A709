/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/object/Lamp_4.glb -t -o src/components/content/canvas/maps/structures/ground/elements/Lamp_4.tsx 
*/

import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { ObjectSettingType } from '../../../../../../../types/GameType';
import { useBox } from '@react-three/cannon';
import React from 'react';

type GLTFResult = GLTF & {
    nodes: {
        Mesh271: THREE.Mesh;
        Mesh271_1: THREE.Mesh;
    };
    materials: {
        Cartoon_Room_Emission: THREE.MeshStandardMaterial;
        Cartoon_Room_Mat: THREE.MeshStandardMaterial;
    };
};

function Lamp_4Component(props: ObjectSettingType) {
    const { nodes, materials } = useGLTF(
        '/models/object/Lamp_4.glb'
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
                    geometry={nodes.Mesh271.geometry}
                    material={materials.Cartoon_Room_Emission}
                    position={props.position}
                    rotation={props.rotation}
                    scale={0.025}
                />
                <mesh
                    geometry={nodes.Mesh271_1.geometry}
                    material={materials.Cartoon_Room_Mat}
                    position={props.position}
                    rotation={props.rotation}
                    scale={0.025}
                />
            </group>
        </group>
    );
}

useGLTF.preload('/models/object/Lamp_4.glb');

function areEqual(prevProps: ObjectSettingType, nextProps: ObjectSettingType) {
    return (
        prevProps.position[0] === nextProps.position[0] &&
        prevProps.position[1] === nextProps.position[1] &&
        prevProps.position[2] === nextProps.position[2]
    );
}

export default React.memo(Lamp_4Component, areEqual);