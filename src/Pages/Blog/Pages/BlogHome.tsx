import { wrapper, headerStyle } from '@/Pages/Blog/styles'

export function BlogHome(): JSX.Element {
  return (
    <div className={wrapper}>
      <div className={headerStyle}>Here are some of my thoughts:</div>
      <ul>
        <li>Helo</li>
      </ul>
    </div>
  )
}
