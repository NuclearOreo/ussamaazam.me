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
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;

  @media screen and (max-aspect-ratio: 3/2) {
    font-size: 1vh;
    transform: translate(0, ${toggle ? 20 : 40}%);
  }
`

export const asciiDonutStyle = css`
  padding: 1vw;
`
