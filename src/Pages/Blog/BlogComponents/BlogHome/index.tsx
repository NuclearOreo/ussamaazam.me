import { Link } from 'react-router-dom'
import { wrapper, headerStyle, listStyle } from '@/Pages/Blog/styles'

export function BlogHome(): JSX.Element {
  return (
    <div className={wrapper}>
      <div className={headerStyle}>
        Had some thoughts, throughts fashions into and better for worst listed below:
      </div>
      <ul className={listStyle}>
        <Link to="/thoughts/away-from-smoking">
          <li>(2023-02-26) My Journey away from smoking 🚭</li>
        </Link>
      </ul>
    </div>
  )
}
