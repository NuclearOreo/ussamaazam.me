import { render, screen } from '@testing-library/react'
import React from 'react'
import { Why1000000007 } from '.'

test('Render AboutPage Component', () => {
  render(<Why1000000007 />)
  const titles = screen.getAllByRole('heading')
  titles.forEach((title) => expect(title).toBeInTheDocument())
})
