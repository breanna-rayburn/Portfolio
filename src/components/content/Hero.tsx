'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { easing } from 'maath'

const CameraRig = () => {
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [
        -1 + (state.pointer.x * state.viewport.width) / 3,
        (1 + state.pointer.y) / 2,
        5.5,
      ],
      0.5,
      delta
    )
    state.camera.lookAt(0, 0, 0)
  })
}

const Hero = () => {
  return (
    <div className="h-[150vh]">
      <h1 className="absolute z-10 mt-[50vh] text-9xl text-white">
        Breanna Rayburn
      </h1>

      <Canvas
        shadows
        camera={{ position: [-4, 1.5, 2], fov: 45, near: 1, far: 20 }}
      >
        <color attach="background" args={['black']} />
        <ambientLight intensity={4} />
        <spotLight
          position={[1, 5, 3]}
          angle={0.2}
          penumbra={1}
          intensity={3}
          castShadow
          shadow-mapSize={2048}
        />
        <mesh receiveShadow castShadow rotation={[0, -Math.PI * 0.85, 0]}>
          <boxGeometry />
        </mesh>
        <CameraRig />
      </Canvas>
    </div>
  )
}

export default Hero
