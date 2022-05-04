import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { canvasStyle } from './styles'
import Donut48 from './Donut48'

export function Donut3D() {
  return (
    <div className={canvasStyle}>
      <Canvas>
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Donut48 scale={27} />
        </Suspense>
      </Canvas>
    </div>
  )
}
