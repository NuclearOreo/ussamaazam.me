import { css } from '@emotion/css'
import { GunMetal } from '../../Styles/color'

interface StyleType {
  transitionDown: number
  toggle: boolean
}

export const style = ({ transitionDown, toggle }: StyleType) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5vh;
  transform: translate(0, ${transitionDown}%);
  color: ${GunMetal.original};
  cursor: pointer;

  @media screen and (max-aspect-ratio: 3/2) {
    font-size: 1vh;
    transform: translate(0, ${toggle ? 20 : 40}%);
  }
`
