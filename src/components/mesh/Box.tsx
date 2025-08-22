import { Canvas } from '@react-three/fiber'
import './BoxMaterial'

const Box = () => {
  return (
    <mesh receiveShadow>
      <boxMaterial />
    </mesh>
  )
}

export default Box
