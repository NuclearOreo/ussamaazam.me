import { render, screen } from '@testing-library/react'
import Home from './Home'

test('Render Home Component', () => {
  render(<Home />)
  const linkElement = screen.getByText(/This the home page/i)
  expect(linkElement).toBeInTheDocument()
})
