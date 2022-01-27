import { css } from '@emotion/css'
import { GunMetal } from '../../Styles/color'

interface StyleType {
  transitionDown: number
}

export const style = (params: StyleType) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5vh;
  transform: translate(0, ${params.transitionDown}%);
  color: ${GunMetal.original};

  @media screen and (max-aspect-ratio: 3/2) {
    font-size: 1vh;
    transform: translate(0, 40%);
  }
`
