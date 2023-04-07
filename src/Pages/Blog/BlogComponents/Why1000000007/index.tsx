import { blogStyle } from '../BlogStyle'

export function Why1000000007(): JSX.Element {
  return (
    <div className={blogStyle}>
      <div className="paragraphStyle">
        <h2>Why 1000000007</h2>
        <div>
          If you ever participated in any competitive programming like Leetcode, Code Forces, Top
          Coder etc., you've probably had problems asking you to mod the answer by 1,000,000,007.
          But why 1,000,000,0007? What makes that number so unique or valuable? So I did a bunch of
          Google searches, and these are the two reasons I always get back:
        </div>
        <ul>
          <li>It's a large number</li>
          <li>It's a prime number</li>
        </ul>
      </div>
    </div>
  )
}
