import React, { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../components/Loader'

import Island from '../models/Island'
import Sky from '../models/Sky';
import Bird from '../models/Bird';
import Plane from '../models/Plane';
import { is } from '@react-three/fiber/dist/declarations/src/core/utils';
{/* <div className='absolute top-28 left-0 right-0 flex items-center justify-center'>
        POPUP
    </div> */}

const Home = () => {
    const [isRotating, setIsRotating] = useState(false)
    const adjustIslandForScreenSize = () => {
        let screenScale = null;
        let screenPosition = [0, -6.5, -43]
        let rotation = [0.1, 4.7, 0]

        if (window.innerWidth < 768) {
            screenScale = [0.9, 0.9, 0.9];// x,y,z axis
        } else {
            screenScale = [1, 1, 1];// x,y,z axis
        }
        return [screenScale, screenPosition, rotation]
    }

    const [islandScale, islandPosition, islandRotation] = adjustIslandForScreenSize();
    return (
        <section className="w-full h-screen relative">
            <Canvas
                className={`w-full h-screen bg-transparent ${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
                camera={{ near: 0.1, far: 1000 }} //camera props objects closer than near 0.1 wont be rendered and objects farther than 1000 will not be rendered
            >
                <Suspense fallback={<Loader />}>
                    <directionalLight position={[1, 1, 1]} intensity={2} />
                    <ambientLight intensity={0.5} />
                    <hemisphereLight skyColor="#b1e1ff" groundColor="#000000" intensity={1} />
                    {/* <pointLight /> */}
                    {/* <spotLight /> */}

                </Suspense>

                <Bird />
                <Sky />
                <Island
                    position={islandPosition}
                    scale={islandScale}
                    rotation={islandRotation}
                    isRotating={isRotating}
                    setIsRotating={setIsRotating}
                />
                <Plane />



            </Canvas>
        </section>
    )
}

export default Home