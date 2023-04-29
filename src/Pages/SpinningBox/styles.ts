import { css } from '@emotion/css'

export const styles = css`
  margin: auto;
  width: 50vw;

  #cube {
    position: relative;
    transform-style: preserve-3d;
    animation: spin 20s linear infinite;
  }

  #cube > div {
    position: absolute;
    transform-style: preserve-3d;
  }

  @keyframes spin {
    from {
      transform: rotateX(-0.1turn) rotateY(0turn);
    }
    to {
      transform: rotateX(-0.1turn) rotateY(1turn);
    }
  }
`
