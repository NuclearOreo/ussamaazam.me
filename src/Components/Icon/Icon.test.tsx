import { render, screen } from '@testing-library/react'
import Icon from '.'

test('Render Icon Component', () => {
  render(<Icon />)
  const linkElement = screen.getByTestId('GutsIcon')
  expect(linkElement).toBeInTheDocument()
})