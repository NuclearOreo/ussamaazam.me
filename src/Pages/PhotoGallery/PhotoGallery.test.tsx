import { render, screen } from '@testing-library/react'
import { PhotoGalleryPage } from '.'

test('Render PhotoGallery Component', () => {
  render(<PhotoGalleryPage />)
  const linkElement = screen.getByText(
    /I'm a hobbyist photographer outside of work and pushing myself to come up with with creative work. Hope you enjoy my photos us much as I do!/i,
  )
  expect(linkElement).toEqual(linkElement)
})
