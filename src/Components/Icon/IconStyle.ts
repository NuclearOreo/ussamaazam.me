import { css } from '@emotion/css'
import { GunMetal } from '../../Styles/color'

export const IconStyles = css`
  font-size: 2px;
  letter-spacing: -0.45px;
  color: ${GunMetal.dark3};
`

export const containerStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 1vw;

  .hvr-grow {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-property: transform;
    transition-property: transform;
  }

  .hvr-grow:hover, .hvr-grow:focus, .hvr-grow:active {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
`
