import { css } from '@emotion/css'
import { GunMetal } from '@/Styles/color'

export const gridStyle = css`
  width: '25px',
  height: '25px',
  display: 'inline-block',
`

export const gameOfLifeContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;

  .grid {
    display: flex;
    flex-direction: column;
    border: 2px solid ${GunMetal.dark1};
  }
`
