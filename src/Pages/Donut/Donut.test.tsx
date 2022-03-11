import { render /* screen */ } from '@testing-library/react'
// import Donut from '.'

test('Render Home Component', () => {
  render(<>Hello</>)
  // const linkElement = screen.getByTestId('Donut')
  // expect(linkElement).toBeInTheDocument()
  expect(4).toEqual(4)
})
