import { render, screen } from '@testing-library/react'
import Donut from '.'

test('Render Home Component', () => {
  render(<Donut />)
  const linkElement = screen.getByText(/This the home page/i)
  expect(linkElement).toBeInTheDocument()
})
