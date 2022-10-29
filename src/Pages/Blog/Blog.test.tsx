import { render, screen } from '@testing-library/react'
import React from 'react'
import { BlogPage } from '.'

test('Render Essays Component', () => {
  render(<BlogPage />)
  const linkElement = screen.getByText(/This is Blogs/i)
  expect(linkElement).toBeInTheDocument()
})
