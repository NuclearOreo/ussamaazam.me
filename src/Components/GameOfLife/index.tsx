import { GunMetal, Cultured } from '@/Styles/color'
import { gridStyle } from './styles'

export function CheckeredGrid(): JSX.Element {
  const size = 25
  const grid = Array.from({ length: size }, () => Array.from({ length: size }, () => 0))
  grid[5][5] = 1
  grid[1][1] = 1
  grid[0][0] = 1
  const renderSquare = (row: number, col: number): JSX.Element => {
    const isEvenRow = row % 2 === 0
    const isEvenCol = col % 2 === 0
    const isEven = isEvenRow === isEvenCol
    const color = isEven ? Cultured.original : GunMetal.original

    return (
      <div
        key={`${row}-${col}`}
        style={{
          width: '25px',
          height: '25px',
          backgroundColor: color,
          display: 'inline-block',
        }}
      />
    )
  }

  const renderRow = (rowIndex: number): JSX.Element => (
    <div key={rowIndex} style={{ display: 'flex' }}>
      {Array.from({ length: size }, (_, columnIndex) => renderSquare(rowIndex, columnIndex))}
    </div>
  )

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {Array.from({ length: size }, (_, row) => renderRow(row))}
    </div>
  )
}
