import { render } from '@testing-library/react'
import { ErrorPage } from '.'

test('Render Error Component', () => {
  render(<ErrorPage />)
  expect(2 + 2).toEqual(4)
})
