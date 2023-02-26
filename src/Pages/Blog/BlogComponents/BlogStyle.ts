import { css } from '@emotion/css'
import { GunMetal } from '@/Styles/color'
import { fontFamily } from '@/Styles/fonts'

export const blogStyle = css`
  .paragraphStyle {
    color: ${GunMetal.light3};
    font-family: ${fontFamily.Poppins};
    margin: auto;
    width: 55vw;
    letter-spacing: 0.3px;
  }

  h2 {
    text-align: center;
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

  @media (max-width: 768px) {
    div {
      font-size: 12px;
      margin-top: 5vw;
      margin-bottom: 5vw;
    }
    margin-top: 30px;
    .paragraphStyle {
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
    div {
      font-size: 18px;
      margin-top: 3vw;
      margin-bottom: 3vw;
    }
    .paragraphStyle {
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
    div {
      font-size: 18px;
      margin-top: 1.5vw;
      margin-bottom: 1.5vw;
    }
    .linksStyle {
      img {
        width: 30px;
      }
    }
  }
`
