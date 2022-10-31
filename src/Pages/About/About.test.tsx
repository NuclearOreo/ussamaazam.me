import { render /* screen */ } from '@testing-library/react'
import React from 'react'
import { AboutPage } from '.'

test('Render AboutPage Component', () => {
  render(<AboutPage />)
  expect(2).toEqual(2)
})
