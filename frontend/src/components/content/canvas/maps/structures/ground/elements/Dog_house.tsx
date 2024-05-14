/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/models/object/Dog_house.glb -t -o src/components/content/canvas/maps/structures/ground/elements/Dog_house.tsx 
*/

import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { ObjectSettingType } from '../../../../../../../types/GameType';
import { useBox } from '@react-three/cannon';

type GLTFResult = GLTF & {
    nodes: {
        Dog_house_Brown_2_0: THREE.Mesh;
        Dog_house_Gray_0: THREE.Mesh;
        Dog_house_Red_0: THREE.Mesh;
        Dog_house_Yellow_2_0: THREE.Mesh;
    };
    materials: {
        Brown_2: THREE.MeshStandardMaterial;
        Gray: THREE.MeshStandardMaterial;
        material: THREE.MeshStandardMaterial;
        Yellow_2: THREE.MeshStandardMaterial;
    };
};

export function Dog_house(props: ObjectSettingType) {
    const { nodes, materials } = useGLTF(
        '/models/object/Dog_house.glb'
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
        <group position={[0, 0, 0]} dispose={null}>
            <group>
                <mesh
                    ref={ref}
                    geometry={nodes.Dog_house_Brown_2_0.geometry}
                    material={materials.Brown_2}
                    position={props.position}
                    rotation={props.rotation}
                />
                <mesh
                    ref={ref}
                    geometry={nodes.Dog_house_Gray_0.geometry}
                    material={materials.Gray}
                    position={props.position}
                    rotation={props.rotation}
                />
                <mesh
                    ref={ref}
                    geometry={nodes.Dog_house_Red_0.geometry}
                    material={materials.material}
                    position={props.position}
                    rotation={props.rotation}
                />
                <mesh
                    ref={ref}
                    geometry={nodes.Dog_house_Yellow_2_0.geometry}
                    material={materials.Yellow_2}
                    position={props.position}
                    rotation={props.rotation}
                />
            </group>
        </group>
    );
}

useGLTF.preload('/models/object/Dog_house.glb');