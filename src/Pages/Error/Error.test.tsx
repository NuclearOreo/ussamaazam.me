import { render, screen } from '@testing-library/react'
import { ErrorPage } from '.'

test('Render Error Component', () => {
  render(<ErrorPage />)
  const linkElement = screen.getByText(/This is the Error Page/i)
  expect(linkElement).toBeInTheDocument()
})
