import { act, render, screen } from '@testing-library/react'
import React from 'react'
import { PhotoGalleryPage } from '.'

describe('Render PhotoGallery Component', () => {
  test('Check if my description is present', () => {
    render(<PhotoGalleryPage />)
    const description = screen.getByText(
      /I'm a hobbyist photographer outside of work and pushing myself to sharpen my creative skill. Hope you enjoy my photos as much as I do!/i,
    )
    expect(description).toEqual(description)
  })

  test('Handles window resize', () => {
    let reloadCalled = false
    render(<PhotoGalleryPage />)

    // Create a simple reload tracker
    Object.defineProperty(window, 'location', {
      configurable: true,
      value: {
        reload: () => {
          reloadCalled = true
        },
      },
    })

    act(() => {
      global.innerWidth = 500
      global.dispatchEvent(new Event('resize'))
    })

    expect(reloadCalled).toBe(true)
  })
})
