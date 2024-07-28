import { useState } from 'react'
import { AsciiDonut } from '@/Components/ASCIIDonut'
import { Donut3D } from '@/Components/Donut3D'
import { style } from './styles'
import { CheckeredGrid } from '@/Components/GameOfLife'

interface DonutPageProp {
  disableMobile?: boolean
}

export function DonutPage({ disableMobile }: DonutPageProp) {
  const isMobile = !disableMobile ? window.screen.width <= 768 : false
  const [toggleDonut, setToggleDonut] = useState(false)

  return (
    <div
      data-testid="Wrapper"
      className={style({ transitionDown: toggleDonut ? 0 : 10, toggle: toggleDonut })}
      onClick={!isMobile ? () => setToggleDonut(!toggleDonut) : undefined}
    >
      {toggleDonut ? (
        <div>
          <CheckeredGrid />
          <Donut3D />
        </div>
      ) : (
        <AsciiDonut />
      )}
    </div>
  )
}
