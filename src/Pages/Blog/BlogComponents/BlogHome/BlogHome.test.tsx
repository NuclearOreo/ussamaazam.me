import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { BlogHome } from '.'

test('Render AboutPage Component', () => {
  render(
    <Router>
      <Routes>
        <Route path="/" element={<BlogHome />} />
      </Routes>
    </Router>,
  )
  const list = screen.getByRole('list')
  const link = screen.getByRole('link')
  const listitem = screen.getByRole('listitem')

  expect(link).toBeInTheDocument()
  expect(listitem).toBeInTheDocument()
  expect(list).toBeInTheDocument()
})
