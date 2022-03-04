import { css } from '@emotion/css'
import { GunMetal } from 'Styles/color'
import { fontFamily } from 'Styles/fonts'
import { buzzOut, hang, pulseShrink, wobbleToTopRight } from './hoverAffects'

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

    img {
      width: 25px;
      margin-left: 0.5vw;
      margin-right: 0.5vw;
      filter: invert(29%) sepia(37%) saturate(521%) hue-rotate(155deg) brightness(97%) contrast(87%);
    }
  }

  @media only screen and (max-width: 800px) {
    .aboutMeStyle {
      font-size: 9px;
      width: 60vw;
    }

    .linksStyle {
      img {
        width: 15px;
        margin-left: 1vw;
        margin-right: 1vw;
      }
    }
  }

  ${buzzOut}
  ${wobbleToTopRight}
  ${hang}
  ${pulseShrink}
`
