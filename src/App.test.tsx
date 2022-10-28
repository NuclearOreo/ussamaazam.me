import { render, screen } from '@testing-library/react'
import App from './App'
import { Icon } from './Components/Icon'
import { ReactDomRender } from '.'

describe('', () => {
  test('Render App', () => {
    render(<App />)
    const linkElement = screen.getByTestId('Donut')
    expect(linkElement).toBeInTheDocument()
  })
  test('Testing ReactDom Render', () => {
    ReactDomRender(Icon)
  })
})
