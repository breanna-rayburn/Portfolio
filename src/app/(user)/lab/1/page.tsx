'use client'
import { Canvas } from '@react-three/fiber'

export default function Page() {
  return (
    <Canvas>
      <mesh>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
    </Canvas>
  )
}
