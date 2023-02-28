import { render, screen } from '@testing-library/react'
import React from 'react'
import { AboutPage } from '.'

test('Render AboutPage Component', () => {
  render(<AboutPage />)
  const links = screen.getAllByRole('link')

  links.forEach((link) => {
    expect(link).toBeInTheDocument()
  })
})
