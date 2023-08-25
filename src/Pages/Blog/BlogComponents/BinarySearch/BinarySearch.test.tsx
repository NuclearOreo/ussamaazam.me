import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { BinarySearch } from '.'

test('Render AboutPage Component', () => {
  render(<BinarySearch />)
  const titles = screen.getAllByRole('heading')
  titles.forEach((title) => expect(title).toBeInTheDocument())
})
