import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Mesh } from 'three'
import { canvasStyle } from './style'

const Cube = () => {
  const cube = useRef<Mesh>()

  useFrame(() => {
    cube.current!.rotation.x += 0.01
    cube.current!.rotation.y += 0.01
  })

  return (
    <mesh ref={cube}>
      <boxBufferGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#0391BA" />
    </mesh>
  )
}

export default function Donut3D() {
  return (
    <div className={canvasStyle}>
      <Canvas>
        <ambientLight intensity={1} />
        <Cube />
      </Canvas>
    </div>
  )
}
