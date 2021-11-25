import { render, screen } from '@testing-library/react'
import About from './About'

test('Render About Component', () => {
  render(<About />)
  const linkElement = screen.getByText(/This is the about Page/i)
  expect(linkElement).toBeInTheDocument()
})
