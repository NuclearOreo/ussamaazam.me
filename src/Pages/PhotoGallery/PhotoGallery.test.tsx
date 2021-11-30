import { render, screen } from '@testing-library/react'
import PhotoGallery from './PhotoGallery'

test('Render PhotoGallery Component', () => {
  render(<PhotoGallery />)
  const linkElement = screen.getByText(/This is the Photo Gallery/i)
  expect(linkElement).toBeInTheDocument()
})
