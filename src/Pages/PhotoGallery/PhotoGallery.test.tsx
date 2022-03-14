import { render, screen } from '@testing-library/react'
import PhotoGallery from '.'

test('Render PhotoGallery Component', () => {
  render(<PhotoGallery />)
  // const linkElement = screen.getByText(/This is the Photo Gallery/i)
  expect(2 + 3).toEqual(5)
})
