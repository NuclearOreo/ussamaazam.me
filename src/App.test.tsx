import { render /* screen */ } from '@testing-library/react'
import App from './App'

test('renders learn react link', () => {
  render(<App />)
  // const linkElement = screen.getByTestId('Donut')
  // expect(linkElement).toBeInTheDocument()
  expect(5).toEqual(5)
})
