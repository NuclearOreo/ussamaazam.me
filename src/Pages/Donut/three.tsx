import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

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

export default function Three() {
  return (
    <div style={{ position: 'relative', width: 500, height: 500, background: 'white' }}>
      <Canvas>
        <ambientLight intensity={1} />
        <Cube />
      </Canvas>
    </div>
  )
}
