import { css } from '@emotion/css'

export const canvasStyle = css`
  position: relative;
  width: 30vw;
  height: 30vw;

  @media (max-width: 767px) {
    width: 100vw;
    height: 100vw;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    width: 50vw;
    height: 50vw;
  }

  @media (min-width: 1024px) {
    width: 30vw;
    height: 30vw;
  }
`
