import { fontFamily } from '@/Styles/fonts'
import { GunMetal } from '@/Styles/color'
import { css } from '@emotion/css'

export const wrapper = css`
  margin-left: 20vw;
  margin-right: 20vw;
  margin-bottom: 3vw;
  margin-top: 3vw;
  display: block;

  font-family: ${fontFamily.Poppins};
  font-size: 20px;
  color: ${GunMetal.light3};

  li {
    margin-top: 1vw;
    bottom-bottom: 1vw;
  }

  @media (max-width: 768px) {
    margin-left: 5vw;
    margin-right: 5vw;
    font-size: 12px;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
  }

  @media (min-width: 1024px) {
  }
`
