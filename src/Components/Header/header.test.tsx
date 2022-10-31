import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { Header } from '.'

test('Render NavBar Component', () => {
  render(
    <Router>
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </Router>,
  )

  const HomeLink = screen.getByText(/🍩/i)
  const AboutLink = screen.getByText(/About/i)
  const GalleryLink = screen.getByText(/Gallery/i)
  expect(HomeLink).toBeInTheDocument()
  expect(AboutLink).toBeInTheDocument()
  expect(GalleryLink).toBeInTheDocument()
})
