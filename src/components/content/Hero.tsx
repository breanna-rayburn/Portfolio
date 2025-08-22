'use client'

import { Canvas } from '@react-three/fiber'
import Box from '@/components/mesh/Box'

const Hero = () => {
  return (
    <div className="h-[150vh]">
      <div className="absolute z-10 flex h-[100vh] items-center justify-center">
        <h1 className="text-9xl text-white">Breanna Rayburn</h1>
      </div>

      <Canvas
        shadows
        camera={{ position: [-4, 1.5, 2], fov: 45, near: 1, far: 20 }}
      >
        <color attach="background" args={['black']} />
        <ambientLight intensity={4} />
        <Box />
      </Canvas>
    </div>
  )
}

export default Hero
