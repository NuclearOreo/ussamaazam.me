import { useState, useEffect, useCallback } from 'react'
import { GunMetal, Cultured } from '@/Styles/color'
import { gameOfLifeContainer } from './styles'

// Game of Life rules:
// 1. Any live cell with fewer than two live neighbors dies (underpopulation)
// 2. Any live cell with two or three live neighbors lives
// 3. Any live cell with more than three live neighbors dies (overpopulation)
// 4. Any dead cell with exactly three live neighbors becomes alive (reproduction)

const GRID_SIZE = 25
const CELL_SIZE = 25
const ANIMATION_SPEED = 100

type Grid = number[][]

// Create an empty grid filled with 0s
const createEmptyGrid = (): Grid => {
  return Array.from({ length: GRID_SIZE }, () => Array.from({ length: GRID_SIZE }, () => 0))
}

// Interesting patterns to initialize the grid
const patterns = {
  glider: [
    [0, 1, 0],
    [0, 0, 1],
    [1, 1, 1],
  ],
  blinker: [
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
  ],
  toad: [
    [0, 0, 0, 0],
    [0, 1, 1, 1],
    [1, 1, 1, 0],
    [0, 0, 0, 0],
  ],
  random: () => {
    const grid = createEmptyGrid()
    for (let i = 0; i < GRID_SIZE; i += 1) {
      for (let j = 0; j < GRID_SIZE; j += 1) {
        grid[i][j] = Math.random() > 0.8 ? 1 : 0
      }
    }
    return grid
  },
}

export function GameOfLife(): JSX.Element {
  const [grid, setGrid] = useState<Grid>(() => {
    // Initialize with random pattern
    return patterns.random()
  })

  // Count live neighbors for a cell
  const countNeighbors = (currentGrid: Grid, row: number, col: number): number => {
    let count = 0
    for (let i = -1; i <= 1; i += 1) {
      for (let j = -1; j <= 1; j += 1) {
        if (i !== 0 || j !== 0) {
          // Handle edges by wrapping around (toroidal grid)
          const r = (row + i + GRID_SIZE) % GRID_SIZE
          const c = (col + j + GRID_SIZE) % GRID_SIZE
          count += currentGrid[r][c]
        }
      }
    }
    return count
  }

  // Apply Game of Life rules to compute the next generation
  const computeNextGeneration = useCallback((currentGrid: Grid): Grid => {
    const newGrid = createEmptyGrid()

    for (let row = 0; row < GRID_SIZE; row += 1) {
      for (let col = 0; col < GRID_SIZE; col += 1) {
        const neighbors = countNeighbors(currentGrid, row, col)
        const cell = currentGrid[row][col]

        // Apply Conway's Game of Life rules
        if (cell === 1 && (neighbors < 2 || neighbors > 3)) {
          // Cell dies
          newGrid[row][col] = 0
        } else if (cell === 0 && neighbors === 3) {
          // Cell becomes alive
          newGrid[row][col] = 1
        } else {
          // Cell stays the same
          newGrid[row][col] = cell
        }
      }
    }
    return newGrid
  }, [])

  // Animation loop - start immediately
  useEffect(() => {
    const timer = setInterval(() => {
      setGrid((currentGrid) => computeNextGeneration(currentGrid))
    }, ANIMATION_SPEED)

    return () => clearInterval(timer)
  }, [computeNextGeneration])

  // Render a single cell
  const renderCell = (row: number, col: number): JSX.Element => {
    const isAlive = grid[row][col] === 1
    return (
      <div
        key={`${row}-${col}`}
        style={{
          width: `${CELL_SIZE}px`,
          height: `${CELL_SIZE}px`,
          backgroundColor: isAlive ? Cultured.original : GunMetal.original,
          border: `1px solid ${GunMetal.dark1}`,
          display: 'inline-block',
          transition: 'background-color 0.1s ease-in-out',
        }}
      />
    )
  }

  // Render a row of cells
  const renderRow = (rowIndex: number): JSX.Element => (
    <div key={rowIndex} style={{ display: 'flex' }}>
      {Array.from({ length: GRID_SIZE }, (_, colIndex) => renderCell(rowIndex, colIndex))}
    </div>
  )

  return (
    <div className={gameOfLifeContainer}>
      <div className="grid">
        {Array.from({ length: GRID_SIZE }, (_, rowIndex) => renderRow(rowIndex))}
      </div>
    </div>
  )
}
