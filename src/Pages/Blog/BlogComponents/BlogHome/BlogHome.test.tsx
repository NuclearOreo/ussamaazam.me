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
  const links = screen.getAllByRole('link')
  const listItems = screen.getAllByRole('listitem')

  expect(list).toBeInTheDocument()
  links.forEach((link) => expect(link).toBeInTheDocument())
  listItems.forEach((item) => expect(item).toBeInTheDocument())
})
