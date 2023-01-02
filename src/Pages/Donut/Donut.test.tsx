import { render, screen } from '@testing-library/react'
import React from 'react'
import { act } from 'react-dom/test-utils'
import { DonutPage } from '.'
import { vi } from 'vitest'

const doAsync = (c: any) => {
  setTimeout(() => {
    c(true)
  }, 3000)
}

vi.useFakeTimers()

describe('Home Page', () => {
  test('Render Home Page', () => {
    const disableMobile = true
    render(<DonutPage disableMobile={disableMobile} />)
    const donut = screen.getByTestId('Donut')
    const wrapper = screen.getByTestId('Wrapper')

    expect(donut).toBeInTheDocument()
    expect(wrapper).toBeInTheDocument()

    act(() => {
      wrapper.dispatchEvent(new MouseEvent('click', { bubbles: true }))
    })

    const canvas = screen.getByTestId('Canvas')
    expect(canvas).toBeInTheDocument()
  })
  test('Test Set interval', () => {
    const disableMobile = true
    render(<DonutPage disableMobile={disableMobile} />)

    act(() => {
      vi.advanceTimersByTime(50)

      const callback1 = () => {
        expect(screen.getByTestId('Donut')).toBeInTheDocument()
      }

      doAsync(callback1)
      vi.useRealTimers()
    })
  })
})
