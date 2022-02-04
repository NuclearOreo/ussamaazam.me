import { css } from '@emotion/css'
import { GunMetal, DesertSand } from 'Styles/color'
import { fontFamily } from 'Styles/fonts'

export const style = css`
  color: ${GunMetal.original}};
  // font-family: ${fontFamily.Poppins}

  .center {
    margin: auto;
    width: 60%;
    border: 3px solid ${DesertSand.original};
  }
`
