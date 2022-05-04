import { render /* screen */ } from '@testing-library/react'
import { About } from '.'

test('Render About Component', () => {
  render(<About />)
  expect(2).toEqual(2)
})
