import React from 'react'
import { useGLTF } from '@react-three/drei'
import planeScene from '../assets/3d/plane.glb'

const Plane = () => {
    const { scene, animations } = useGLTF(planeScene)// if we dont add this we get reference error
    return (
        <mesh position={[-5, 2, 1]} scale={[0.003, 0.003, 0.003]}>
            <primitive object={scene} />
        </mesh>
    )
}

export default Plane