import { css } from '@emotion/css'

export const container = css`
  width: 70vw;
  margin-left: auto;
  margin-right: auto;
  display: block;
`

export const columns = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`

export const column = css`
  width: 33.33%;

  img {
    width: 95%;
    margin: 10px;
  }
`
