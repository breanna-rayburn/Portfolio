import { shaderMaterial } from '@react-three/drei'
import { extend } from '@react-three/fiber'

const BoxMaterial = shaderMaterial(
  {},
  `varying vec3 vPosition;

    void main() {
        vPosition = position; // Pass the vertex position to the fragment shader
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }`,
  `varying vec3 vPosition;

    void main() {
        // Simple color based on the position of the vertex
        gl_FragColor = vec4(vPosition * 0.5 + 0.5, 1.0); // Normalize position to [0, 1]
    }`
)

extend({ BoxMaterial })
