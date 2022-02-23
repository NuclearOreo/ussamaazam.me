import { css } from '@emotion/css'
import { GunMetal, DesertSand } from 'Styles/color'
import { fontFamily, } from 'Styles/fonts'

export const style = css`  
  .center {
    color: ${GunMetal.original};
    font-family: ${fontFamily.Poppins};
    font-size: 18px;
    margin: auto;
    width: 60%;
    letter-spacing: 0.3px;
    text-align: center;
    border: 3px solid ${DesertSand.original};
  }
`
