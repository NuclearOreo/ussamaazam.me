/* eslint-disable react/no-unknown-property */
import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { canvasStyle } from './styles'
import Donut48 from './Donut48'
import { ResizeObserver } from '@juggle/resize-observer'

export function Donut3D() {
  return (
    <div data-testid="Canvas" className={canvasStyle}>
      <Canvas resize={{ polyfill: ResizeObserver }}>
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Donut48 scale={27} />
        </Suspense>
      </Canvas>
    </div>
  )
}
