import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { canvasStyle } from './style'
import Donut48 from './Donut48'

export default function Donut3D() {
  return (
    <div className={canvasStyle}>
      <Canvas>
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Donut48 scale={30} />
        </Suspense>
      </Canvas>
    </div>
  )
}
