import { blogStyle } from '../BlogStyle'

export function BinarySearch(): JSX.Element {
  return (
    <div className={blogStyle}>
      <div className="paragraphStyle">
        <h2>Binary Search is Simple and Beautiful</h2>
        <div>
          Everything I'm going to show here isn't unique or hard to find, but I find it beautiful.
          If you remember your undergraduate years in CS, at some point, you're introduced to Binary
          Search, and it looked something like this:
        </div>
        <img src="https://storage.googleapis.com/ussamazam-assets/binary_search.png" alt="" />
      </div>
    </div>
  )
}
