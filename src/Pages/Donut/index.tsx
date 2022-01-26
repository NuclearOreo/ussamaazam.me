import { style } from './DonutStyle'
import { useRef, useState, useEffect } from 'react'
import { donutFrame } from './donutFrame'
import Three from './three'

const Donut = () => {
  const [donut, setDonut] = useState({ frame: '', a: 0, b: 0 })
  const timerId = useRef<NodeJS.Timer>()
  const [toggleDonut, setToggleDonut] = useState(true)

  useEffect(() => {
    timerId.current = setInterval(() => {
      setDonut((prev) => donutFrame(prev.a, prev.b))
    }, 50)
  }, [])

  return (
    <div className={style} onClick={() => setToggleDonut(!toggleDonut)}>
      {toggleDonut ? <Three /> : <pre data-testid="Donut">{donut.frame}</pre>}
    </div>
  )
}

export default Donut
