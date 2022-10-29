import { render, screen } from '@testing-library/react'
import React from 'react'
import { act } from 'react-dom/test-utils'
import { DonutPage } from '.'

test('Render Home Component', () => {
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
