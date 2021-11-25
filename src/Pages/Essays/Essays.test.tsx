import { render, screen } from '@testing-library/react'
import Essays from './Essays'

test('Render Essays Component', () => {
  render(<Essays />)
  const linkElement = screen.getByText(/This is Essays/i)
  expect(linkElement).toBeInTheDocument()
})
