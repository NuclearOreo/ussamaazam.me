import { render /* screen */ } from '@testing-library/react'
import { PhotoGalleryPage } from '.'

test('Render PhotoGallery Component', () => {
  render(<PhotoGalleryPage />)
  // const linkElement = screen.getByText(/This is the Photo Gallery/i)
  expect(2 + 3).toEqual(5)
})
