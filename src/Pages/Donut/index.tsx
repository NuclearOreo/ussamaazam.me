import { useRef, useState, useEffect } from 'react'
import { asciiDonut } from 'Components/ASCIIDonut'
import { Donut3D } from 'Components/Donut3D'
import { style, asciiDonutStyle } from './styles'

export function DonutPage() {
  const isMobile = window.screen.width <= 768
  const [donut, setDonut] = useState({ frame: '', a: 0, b: 0 })
  const timerId = useRef<NodeJS.Timer>()
  const [toggleDonut, setToggleDonut] = useState(false)

  useEffect(() => {
    timerId.current = setInterval(() => {
      setDonut((prev) => asciiDonut(prev.a, prev.b))
    }, 50)

    return () => {
      if (timerId.current) {
        clearInterval(timerId.current)
      }
    }
  }, [])

  return (
    <div
      className={style({ transitionDown: toggleDonut ? 0 : 10, toggle: toggleDonut })}
      onClick={!isMobile ? () => setToggleDonut(!toggleDonut) : undefined}
    >
      {toggleDonut ? (
        <Donut3D />
      ) : (
        <pre className={asciiDonutStyle} data-testid="Donut">
          {donut.frame}
        </pre>
      )}
    </div>
  )
}
