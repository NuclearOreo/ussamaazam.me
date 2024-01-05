import { render, screen } from '@testing-library/react'
import React from 'react'
import { TinyThoughts } from '.'

test('Render AboutPage Component', () => {
  render(<TinyThoughts />)
  //   const links = screen.getAllByRole('link')

  //   links.forEach((link) => {
  //     expect(link).toBeInTheDocument()
  //   })
})
