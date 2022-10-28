import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

export const ReactDomRender = (A = App) => {
  ReactDOM.render(
    <React.StrictMode>
      <A />
    </React.StrictMode>,
    document.getElementById('root') || document.createElement('div'),
  )
}
