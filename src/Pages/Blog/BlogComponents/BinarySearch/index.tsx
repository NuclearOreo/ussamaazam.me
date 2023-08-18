import { blogStyle } from '../BlogStyle'

export function BinarySearch(): JSX.Element {
  const urls = {
    'binary-search': 'https://storage.googleapis.com/ussamazam-assets/binary_search.png',
    array: 'https://storage.googleapis.com/ussamazam-assets/array.png',
    'bisect-left': 'https://storage.googleapis.com/ussamazam-assets/bisect_left.png',
    'bisect-right': 'https://storage.googleapis.com/ussamazam-assets/bisect_right.png',
    bisect: 'https://github.com/python/cpython/blob/3.11/Lib/bisect.py',
  }
  return (
    <div className={blogStyle}>
      <div className="paragraphStyle">
        <h2>Binary Search is Simple and Beautiful</h2>
        <div>
          Everything I'm going to show here isn't unique or hard to find, but I find it beautiful.
          If you remember your undergraduate years in CS, at some point, you're introduced to Binary
          Search, and it looked something like this:
        </div>
        <img
          style={{ width: '35vw', paddingLeft: '10vw', paddingRight: '10vw' }}
          src={urls['binary-search']}
          alt=""
        />
        <div>
          It's a simple algorithm, and maybe it wowed you or not; I definitely didn't think too much
          about it back then. But years later, on my gruelling Leetcode grind. I found a different
          Binary Search, a Binary Search that I saw many competitive programmers use:
        </div>
        <img
          style={{ width: '35vw', paddingLeft: '10vw', paddingRight: '10vw' }}
          src={urls['bisect-left']}
          alt=""
        />
        <div>
          Honestly, the simplicity of it floored me. Maybe with a bit of serious adjustments, I
          could have gotten to this concise version that you see here, but visually, it's a
          beautiful algorithm and also behaves beautifully too. Let's use this array to showcase how
          bisect_left works:
        </div>
        <img
          style={{ width: '35vw', paddingLeft: '10vw', paddingRight: '10vw' }}
          src={urls.array}
          alt=""
        />
        <div>
          Here, it's a normally sorted array with a few repeated elements. Let's try to find “4” by
          setting the parameters like this: bisect_left(array, 4). You'll get index 8, but what's
          unique about this index is that it begins the sequence of 4s. Do the same with any
          repeated element; you're guaranteed to get the beginning index of any repeated sequence,
          which is super cool and convenient. You can't get the same consistency with the canonical
          Binary Search at the top.
        </div>
        <div>
          Using the same algorithm, we'll provide it with a number that doesn't exist in the array.
          Let's do -1: We'll end up getting an index of 0, which gives up the first position to
          insert into the array if we want to add that number. The same thing happens if we search
          for 23; we'll get index 19, which doesn't exist but is the first place to insert it into
          the array if we want to add it. Lastly, if we search for 15, we'll get the index 18, which
          is the correct place to insert 15 if you want to. You get all of this through this super
          simple algorithm—the reason why I chose -1, 19, and 15 is because it represents the three
          cases you'll face, respectively: a number below the range, a number above the range, and a
          number somewhere inside the range.
        </div>
        <div>With a bit of tinkering, you can turn “bisect_left” into “bisect_right”:</div>
        <img
          style={{ width: '35vw', paddingLeft: '10vw', paddingRight: '10vw' }}
          src={urls['bisect-right']}
          alt=""
        />
        <div>
          It’s not too different from “bisect_left”, but now instead of getting the leftmost index
          of a repeated sequence, you get the rightmost plus one. It still behaves the same when a
          value is not found by providing you with the insertion point. This all can be found here
          in <a href={urls.bisect}>bisect</a>. It’s part of Python’s standard library, so it’s not
          hard to find.
        </div>
        <div>
          Maybe people knew about this much earlier than I but after years of programming and
          stumbling upon this version, it was genuinely nice, so here’s me sharing it. Hopefully,
          you’ll take it around and use it at work, interviews, or whenever you’re grinding through
          problems.
        </div>
      </div>
    </div>
  )
}
