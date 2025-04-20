import { useState } from 'react'
import { AsciiDonut } from '@/Components/ASCIIDonut'
import { Donut3D } from '@/Components/Donut3D'
import { style } from './styles'
import { GameOfLife } from '@/Components/GameOfLife'

interface DonutPageProp {
  disableMobile?: boolean
}

export function HomePage({ disableMobile }: DonutPageProp) {
  const isMobile = !disableMobile ? window.innerWidth <= 768 : false
  const [displayMode, setDisplayMode] = useState(0) // 0: AsciiDonut, 1: GameOfLife, 2: Donut3D

  const cycleDisplayMode = () => {
    setDisplayMode((prev) => (prev + 1) % 3)
  }

  return (
    <div
      data-testid="Wrapper"
      className={style({ transitionDown: displayMode === 0 ? 10 : 0, toggle: displayMode !== 0 })}
      onClick={!isMobile ? cycleDisplayMode : undefined}
    >
      {displayMode === 0 && <AsciiDonut />}
      {displayMode === 1 && <GameOfLife />}
      {displayMode === 2 && <Donut3D />}
    </div>
  )
}
