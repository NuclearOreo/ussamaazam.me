import { render, screen } from '@testing-library/react'
import Error from './Error'

test('Render Error Component', () => {
  render(<Error />)
  const linkElement = screen.getByText(/This is the Error Page/i)
  expect(linkElement).toBeInTheDocument()
})
