import { render, screen } from '@testing-library/react'
import Home from '.'

test('Render Home Component', () => {
  render(<Home />)
  const linkElement = screen.getByText(/This the home page/i)
  expect(linkElement).toBeInTheDocument()
})
