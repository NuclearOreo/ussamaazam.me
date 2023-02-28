import { Link } from 'react-router-dom'
import { wrapper } from '@/Pages/Blog/styles'

export function BlogHome(): JSX.Element {
  return (
    <div className={wrapper}>
      <div className="headerStyle">
        I had some thoughts, and those eventually became words; for better or for worst, I listed
        them below:
      </div>
      <ul className="listStyle">
        <Link to="/thoughts/away-from-smoking">
          <li>(2023-02-28) My Journey away from smoking 🚭</li>
        </Link>
      </ul>
    </div>
  )
}