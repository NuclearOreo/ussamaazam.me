import { Link } from 'react-router-dom'
import { wrapper, headerStyle, listStyle } from '@/Pages/Blog/styles'

export function BlogHome(): JSX.Element {
  return (
    <div className={wrapper}>
      <div className={headerStyle}>Here are some of my thoughts:</div>
      <ul className={listStyle}>
        <Link to="/thoughts/away-from-smoking">
          <li>My Journey away from smoking 🚭</li>
        </Link>
      </ul>
    </div>
  )
}
