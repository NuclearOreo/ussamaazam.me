import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { Blog } from '.'

test('Render Essays Component', () => {
  render(
    <Router>
      <Routes>
        <Route path="/" element={<Blog />} />
      </Routes>
    </Router>,
  )
  const linkElement = screen.getByTestId('GutsIcon')
  linkElement.click()
  expect(linkElement).toBeInTheDocument()
})
