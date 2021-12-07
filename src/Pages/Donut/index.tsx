import { style } from './DonutStyle'
import { useRef, useEffect, useState } from 'react'

const Donut = () => {
  const [num, setNum] = useState(100)

  const decreaseNum = () => setNum((prev) => prev - 1)

  // setTimeout(decreaseNum, 1000)
  return (
    <div className={style}>
      <div>{num}</div>
    </div>
  )
}

export default Donut
