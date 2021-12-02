import { render, screen } from '@testing-library/react'
import Error from '.'

test('Render Error Component', () => {
  render(<Error />)
  const linkElement = screen.getByText(/This is the Error Page/i)
  expect(linkElement).toBeInTheDocument()
})
