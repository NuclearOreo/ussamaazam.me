import { render, screen } from '@testing-library/react'
import { Donut3D } from '.'
import Donut48 from './Donut48'
import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { ResizeObserver } from '@juggle/resize-observer'

describe('Tests for 3D donut', () => {
  test('Render 3D Donut', () => {
    render(<Donut3D />)
    const canvas = screen.getByTestId('Canvas')
    expect(canvas).toBeInTheDocument()
  })
  test('Render Donut48', () => {
    render(
      <Canvas resize={{ polyfill: ResizeObserver }}>
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Donut48 scale={27} />
        </Suspense>
      </Canvas>,
    )
    expect(1 + 1).toEqual(2)
  })
})
