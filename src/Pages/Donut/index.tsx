import { style } from './DonutStyle'
import { useRef, useState } from 'react'

const Donut = () => {
  const [seconds, setSeconds] = useState(0)
  const timerId = useRef<NodeJS.Timer>()

  const startTimer = () => {
    timerId.current = setInterval(() => {
      setSeconds((prev) => prev + 1)
    }, 1000)
  }

  return (
    <div className={style}>
      <button onClick={startTimer}>Start</button>
      <br />
      <p>Second: {seconds}</p>
    </div>
  )
}

export default Donut
