import { style } from './DonutStyle'
import { useRef, useState, useEffect } from 'react'
import { donutFrame } from './donutFrame'

const Donut = () => {
  const [donut, setDonut] = useState({ frame: '', a: 0, b: 0 })
  const timerId = useRef<NodeJS.Timer>()

  useEffect(() => {
    timerId.current = setInterval(() => {
      setDonut((prev) => donutFrame(prev.a, prev.b))
    }, 50)
  }, [])

  return (
    <div className={style}>
      <br />
      <pre>{donut.frame}</pre>
    </div>
  )
}

export default Donut
