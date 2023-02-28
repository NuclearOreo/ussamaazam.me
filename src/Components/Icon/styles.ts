import { css } from '@emotion/css'
import { fontFamily } from '@/Styles/fonts'

export const IconStyles = css`
  font-size: 1.1px;
  font-family: ${fontFamily.RobotoMono};
  color: black;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
`

export const containerStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5vh;
`
