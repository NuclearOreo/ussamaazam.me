import { render, screen } from '@testing-library/react'
import Blogs from '.'

test('Render Essays Component', () => {
  render(<Blogs />)
  const linkElement = screen.getByText(/This is Blogs/i)
  expect(linkElement).toBeInTheDocument()
})
