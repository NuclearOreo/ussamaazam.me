import { css } from '@emotion/css'
import { fontFamily } from '../../Styles/fonts'
import { GunMetal } from '../../Styles/color'

export const styles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${fontFamily.Poppins};
  font-weight: 500;
  margin-top: 1.5vw;
  margin-bottom: 4vw;
  font-size: clamp(1.3rem, 1.5vw, 5rem);

  .link {
    text-decoration: none;
    margin-left: 1vw;
    margin-right: 1vw;
    color: ${GunMetal.light3};
  }

  .link:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 12px;
  }
`
