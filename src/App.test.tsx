import { render, screen } from '@testing-library/react'
import React from 'react'
import App from './App'

describe('', () => {
  test('Render App', () => {
    render(<App />)
    const linkElement = screen.getByTestId('Donut')
    expect(linkElement).toBeInTheDocument()
  })
})
