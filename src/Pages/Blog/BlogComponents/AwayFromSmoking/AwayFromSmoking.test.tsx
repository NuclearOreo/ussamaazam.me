import { render, screen } from '@testing-library/react'
import React from 'react'
import { AwayFromSmoking } from '.'

test('Render AboutPage Component', () => {
  render(<AwayFromSmoking />)
  const title = screen.getByRole('heading')
  expect(title).toBeInTheDocument()
})
