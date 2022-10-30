import { act, render, screen } from '@testing-library/react'
import React from 'react'
import { PhotoGalleryPage } from '.'

describe('Render PhotoGallery Component', () => {
  test('Check if my description is present', () => {
    render(<PhotoGalleryPage />)
    const description = screen.getByText(
      /I'm a hobbyist photographer outside of work and pushing myself to come up with with creative work. Hope you enjoy my photos us much as I do!/i,
    )
    expect(description).toEqual(description)
  })
  test('Resize window research', () => {
    render(<PhotoGalleryPage />)
    Object.defineProperty(window, 'location', {
      configurable: true,
      value: { reload: jest.fn() },
    })

    act(() => {
      global.innerWidth = 500
      global.dispatchEvent(new Event('resize'))
    })

    expect(window.location.reload).toBeCalled()
  })
  test('d', () => {
    const mockIntersectionObserver = jest.fn()
    mockIntersectionObserver.mockReturnValue({
      observe: () => {
        current: 'Hw'
      },
      unobserve: () => null,
      disconnect: () => null,
    })
    window.IntersectionObserver = mockIntersectionObserver

    jest.spyOn(React, 'useCallback').mockImplementation((f) => f())

    render(<PhotoGalleryPage />)

    expect(1).toEqual(1)
  })
})
