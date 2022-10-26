import { render, screen } from '@testing-library/react'
import { Donut3D } from '.'

test('Render 3D Donut', () => {
  render(<Donut3D />)
  const canvas = screen.getByTestId('Canvas')
  expect(canvas).toBeInTheDocument()
})
