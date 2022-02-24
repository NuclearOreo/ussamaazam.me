import { css } from '@emotion/css'
import { GunMetal } from 'Styles/color'
import { fontFamily, } from 'Styles/fonts'

export const style = css`  
  .aboutMeStyle {
    color: ${GunMetal.light3};
    font-family: ${fontFamily.Poppins};
    font-size: 18px;
    margin: auto;
    width: 40vw;
    letter-spacing: 0.3px;
  }

  .linksStyle {
    margin: auto;
    margin-top: 5vw;
    width: 40vw;
    text-align: center;
  }
`
