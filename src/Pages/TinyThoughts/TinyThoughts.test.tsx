import { render, screen } from '@testing-library/react'
import React from 'react'
import { TinyThoughts } from '.'

test('Render AboutPage Component', () => {
  render(<TinyThoughts />)
  const lists = screen.getAllByRole('list')
  lists.forEach((list) => expect(list).toBeInTheDocument())
})
