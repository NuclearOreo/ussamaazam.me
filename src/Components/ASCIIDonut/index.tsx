import { useRef, useState, useEffect } from 'react'
import { asciiDonut } from './renderFrames'
import { asciiDonutStyle } from './styles'

export function AsciiDonut() {
  const [donut, setDonut] = useState({ frame: '', a: 0, b: 0 })
  const timerId = useRef<NodeJS.Timer>()

  useEffect(() => {
    timerId.current = setInterval(() => {
      setDonut((prev) => asciiDonut(prev.a, prev.b))
    }, 50)

    return () => {
      clearInterval(timerId.current)
    }
  }, [])

  return (
    <pre className={asciiDonutStyle} data-testid="Donut">
      {donut.frame}
    </pre>
  )
}
