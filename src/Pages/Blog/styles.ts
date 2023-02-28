import { fontFamily } from '@/Styles/fonts'
import { GunMetal } from '@/Styles/color'
import { css } from '@emotion/css'

export const wrapper = css`
  margin-left: 20vw;
  margin-right: 20vw;
  margin-top: 3vw;
  display: block;

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
`
