import { css } from '@emotion/css'
import { GunMetal } from '../../Styles/color'

export const style = css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5vh;
  transform: translate(0, 10%);
  color: ${GunMetal.original};

  @media screen and (max-aspect-ratio: 3/2) {
    font-size: 1vh;
    transform: translate(0, 40%);
  }
`
