import { style } from './DonutStyle'
import { useRef, useState, useEffect } from 'react'

// interface DonutType {
//   array: number[]
//   a: number
//   b: number
// }

const Donut = () => {
  const [seconds, setSeconds] = useState(0)
  const timerId = useRef<NodeJS.Timer>()

  useEffect(() => {
    timerId.current = setInterval(() => {
      setSeconds((prev) => prev + 1)
    }, 1000)
  }, [])

  return (
    <div className={style}>
      <br />
      <p>Second: {seconds}</p>
    </div>
  )
}

export default Donut
