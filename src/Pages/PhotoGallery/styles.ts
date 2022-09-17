import { css } from '@emotion/css'

export const container = css`
  width: 70vw;
  margin-left: auto;
  margin-right: auto;
  display: block;
`

export const columnsStyles = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`

export const columnStyles = css`
  width: 33.33%;

  @media (max-width: 767px) {
    width: 100%;
  }

  img {
    width: 95%;
    margin: 10px;
  }

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
  .hvr-grow:hover,
  .hvr-grow:focus,
  .hvr-grow:active {
    -webkit-transform: scale(1.01);
    transform: scale(1.01);
    box-shadow: 2px 5px 9px #888888;
  }
`

export const loadingStyle = css`
  width: 30px;
  margin-left: auto;
  margin-right: auto;
  display: block;
`
