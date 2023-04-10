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
        <br />
        <h3>Being a Large Number</h3>
        <div>
          It being a large number makes total sense regarding its usefulness. In most programming
          languages, an integer value is usually represented in 32-bit, so the upper bound is
          2,147,483,647 for signed values or 4,294,967,295 for unsigned values. So whenever you
          write code that produces a value that's larger than the upper bound, modding by a value
          will prevent an overflow. The larger the number is, the better because the resulting
          remainder will be a unique remainder. What do I mean by unique? Avoiding hash collisions.
          So, if you have a number like 1,000,000,007 that is being used to mod, the results will
          always be from 0 to 1,000,000,006. When you repeatedly mod a series of values by
          1,000,000,007, you're likely to get unique results which minimize collisions. But if
          that's the case, why 1,000,000,007, and why not 2,147,483,647? It turns out 1,000,000,007
          is a prime number.
        </div>
        <br />
        <h3>It's a Prime Number</h3>
        <div>
          So what makes prime numbers special when it comes to modular operations? It's all about
          distribution; composite numbers don't distribute as evenly as prime numbers. Ideally, when
          you have a value and are modding it by 4, the resulting value should fall somewhere
          between 0 to 3. If you're doing this repeatedly, you would like the distribution of those
          results to be evenly spread.
        </div>
        <div>
          Initially, this didn't make sense to me; if you have a range from 0 to 1,000,000 and
          modded every single one of them by 4, then there should be an even spread.
        </div>
        <div>Here's an example from 1 to 10:</div>
        <ul>
          <li>1 % 4 = 1</li>
          <li>2 % 4 = 2</li>
          <li>3 % 4 = 3</li>
          <li>4 % 4 = 0</li>
          <li>5 % 4 = 1</li>
          <li>6 % 4 = 2</li>
          <li>7 % 4 = 3</li>
          <li>8 % 4 = 0</li>
          <li>9 % 4 = 1</li>
          <li>10 % 4 = 2</li>
        </ul>
        <div>
          From the example above, you can see the frequency is even. You see that 0, 1, and 2 come
          out three times, and 3 comes out twice. So it seems composite numbers can do the job, but
          that's not the whole picture. In the context of competitive programming or in real life,
          you don't get a range of numbers but a random set of numbers. That random set of numbers
          could have a subset that clusters around a common multiple, and that's when issues start
          popping up.
        </div>
        <div>
          Let's use 10, 20, 30, 40, 50, 60, 70, 80, 90, and 100 as an example, all being multiple of
          10:
        </div>
        <ul>
          <li>10 % 4 = 2</li>
          <li>20 % 4 = 0</li>
          <li>30 % 4 = 2</li>
          <li>40 % 4 = 0</li>
          <li>50 % 4 = 2</li>
          <li>60 % 4 = 0</li>
          <li>70 % 4 = 2</li>
          <li>80 % 4 = 0</li>
          <li>90 % 4 = 2</li>
          <li>100 % 4 = 0</li>
        </ul>
        <div>
          Now you can see the spread going to two numbers, 0 or 2, not 1 or 3. Now let's try that
          again with a prime number. Using 7 in the next set:
        </div>
        <ul>
          <li>10 % 7 = 3</li>
          <li>20 % 7 = 6</li>
          <li>30 % 7 = 2</li>
          <li>40 % 7 = 5</li>
          <li>50 % 7 = 1</li>
          <li>60 % 7 = 4</li>
          <li>70 % 7 = 0</li>
          <li>80 % 7 = 3</li>
          <li>90 % 7 = 6</li>
          <li>100 % 7 = 2</li>
        </ul>
        <div>
          Now by using a prime number, we see an even spread again; we get values ranging from 0 to
          6. Let's try that again, but with 5 as the following prime number:
        </div>
        <ul>
          <li>10 % 5 = 0</li>
          <li>20 % 5 = 0</li>
          <li>30 % 5 = 0</li>
          <li>40 % 5 = 0</li>
          <li>50 % 5 = 0</li>
          <li>60 % 5 = 0</li>
          <li>70 % 5 = 0</li>
          <li>80 % 5 = 0</li>
          <li>90 % 5 = 0</li>
          <li>100 % 5 = 0</li>
        </ul>
        <div>
          Now the spread is one number instead of being spread evenly between 0 to 4, which makes
          sense since all values used are a multiple of 5. So avoid using prime numbers that are a
          multiple or not coprime of the value you're applying the operation against. One easy way
          to do that is to pick a large prime number to avoid multiple of it.
        </div>
        <br />
        <h3>Final Thoughts</h3>
        <div>
          If you’ve ever wondered why 1,000,000,007 is used to mod your result, it's a large prime
          number. Large enough to give space for unique results and being a prime to distribute
          those results evenly. It also makes sense why it's useful to use large prime numbers in
          cryptography and hashing. For why 1,000,000,007 and not 1,000,000,009, it's most likely
          because it's easy to remember, but it could have easily been 1,000,000,009.
        </div>
        <br />
        <br />
      </div>
    </div>
  )
}
