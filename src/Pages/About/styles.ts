import { css } from '@emotion/css'
import { GunMetal } from 'Styles/color'
import { fontFamily } from 'Styles/fonts'
import { buzzOut, hang, pulseShrink, wobbleToTopRight } from './hoverAffects'

export const style = css`
  .aboutMeStyle {
    color: ${GunMetal.light3};
    font-family: ${fontFamily.Poppins};
    margin: auto;
    width: 50vw;
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

  @media (max-width: 767px) {
    font-size: 12px;
    margin-top: 30px;
    .aboutMeStyle {
      margin-top: 50px;
      margin-bottom: 50px;
    }
    .linksStyle {
      img {
        width: 20px;
        margin-left: 1vw;
        margin-right: 1vw;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    font-size: 18px;
    .aboutMeStyle {
      margin-top: 50px;
      margin-bottom: 50px;
    }
    .linksStyle {
      img {
        width: 30px;
        margin-left: 1vw;
        margin-right: 1vw;
      }
    }
  }

  @media (min-width: 1024px) {
    font-size: 20px;
    .linksStyle {
      img {
        width: 30px;
      }
    }
  }

  ${buzzOut}
  ${wobbleToTopRight}
  ${hang}
  ${pulseShrink}
`
