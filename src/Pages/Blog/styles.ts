import { fontFamily } from '@/Styles/fonts'
import { GunMetal } from '@/Styles/color'
import { css } from '@emotion/css'

export const iconStyle = css`
  cursor: pointer;
`

export const wrapper = css`
  margin-left: 20vw;
  margin-right: 20vw;
  margin-top: 3vw;
  display: block;

  .footer {
    font-family: ${fontFamily.Poppins};
    color: ${GunMetal.light3};
    text-align: center;
    img {
      margin-top: 20vw;
      margin-bottom: 3vw;
      width: 25px;
      filter: invert(29%) sepia(37%) saturate(521%) hue-rotate(155deg) brightness(97%) contrast(87%);
    }
  }

  @media (max-width: 768px) {
    .headerStyle {
      font-size: 15px;
      font-family: ${fontFamily.Poppins};
      color: ${GunMetal.light3};
    }

    .listStyle {
      font-size: 15px;
      font-family: ${fontFamily.Poppins};
      color: ${GunMetal.light3};
      a {
        color: ${GunMetal.light3};
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    .headerStyle {
      font-size: 20px;
      font-family: ${fontFamily.Poppins};
      color: ${GunMetal.light3};
    }

    .listStyle {
      font-size: 20px;
      font-family: ${fontFamily.Poppins};
      color: ${GunMetal.light3};
      a {
        color: ${GunMetal.light3};
      }
    }
  }

  @media (min-width: 1024px) {
    .headerStyle {
      font-size: 20px;
      font-family: ${fontFamily.Poppins};
      color: ${GunMetal.light3};
    }

    .listStyle {
      font-size: 20px;
      font-family: ${fontFamily.Poppins};
      color: ${GunMetal.light3};
      a {
        color: ${GunMetal.light3};
      }
    }
  }

  /* Wobble Vertical */
  @-webkit-keyframes hvr-wobble-vertical {
    16.65% {
      -webkit-transform: translateY(8px);
      transform: translateY(8px);
    }
    33.3% {
      -webkit-transform: translateY(-6px);
      transform: translateY(-6px);
    }
    49.95% {
      -webkit-transform: translateY(4px);
      transform: translateY(4px);
    }
    66.6% {
      -webkit-transform: translateY(-2px);
      transform: translateY(-2px);
    }
    83.25% {
      -webkit-transform: translateY(1px);
      transform: translateY(1px);
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
  @keyframes hvr-wobble-vertical {
    16.65% {
      -webkit-transform: translateY(8px);
      transform: translateY(8px);
    }
    33.3% {
      -webkit-transform: translateY(-6px);
      transform: translateY(-6px);
    }
    49.95% {
      -webkit-transform: translateY(4px);
      transform: translateY(4px);
    }
    66.6% {
      -webkit-transform: translateY(-2px);
      transform: translateY(-2px);
    }
    83.25% {
      -webkit-transform: translateY(1px);
      transform: translateY(1px);
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }
  .hvr-wobble-vertical {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
  }
  .substack:hover,
  .hvr-wobble-vertical:focus,
  .hvr-wobble-vertical:active {
    -webkit-animation-name: hvr-wobble-vertical;
    animation-name: hvr-wobble-vertical;
    -webkit-animation-duration: 1s;
    animation-duration: 1s;
    -webkit-animation-timing-function: ease-in-out;
    animation-timing-function: ease-in-out;
    -webkit-animation-iteration-count: 1;
    animation-iteration-count: 1;
  }
`
