import { style } from './DonutStyle'
import { useRef, useState, useEffect } from 'react'
import asciiDonut from 'Components/ASCIIDonut'
import Donut3D from 'Components/Donut3D'

const Donut = () => {
  const [donut, setDonut] = useState({ frame: '', a: 0, b: 0 })
  const timerId = useRef<NodeJS.Timer>()
  const [toggleDonut, setToggleDonut] = useState(true)

  useEffect(() => {
    timerId.current = setInterval(() => {
      setDonut((prev) => asciiDonut(prev.a, prev.b))
    }, 50)

    return () => {
      timerId.current ?? clearInterval(timerId.current)
    }
  }, [])

  return (
    <div
      className={style({ transitionDown: toggleDonut ? 0 : 10 })}
      onClick={() => setToggleDonut(!toggleDonut)}
    >
      {toggleDonut ? <Donut3D /> : <pre data-testid="Donut">{donut.frame}</pre>}
    </div>
  )
}

export default Donut
