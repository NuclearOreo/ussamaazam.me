import { fontFamily } from '@/Styles/fonts'
import { GunMetal } from '@/Styles/color'
import { css } from '@emotion/css'

export const wrapper = css`
  margin-left: 20vw;
  margin-right: 20vw;
  margin-top: 3vw;
  display: block;
`

export const headerStyle = css`
  font-size: 25px;
  font-family: ${fontFamily.Poppins};
  color: ${GunMetal.light3};
`
