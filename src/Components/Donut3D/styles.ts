import { css } from '@emotion/css'

export const canvasStyle = css`
  position: relative;
  width: 30vw;
  height: 30vw;

  @media screen and (max-aspect-ratio: 3/2) {
    width: 100vw;
    height: 100vw;
  }
`
