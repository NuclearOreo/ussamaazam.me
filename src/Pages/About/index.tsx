import GithubIcon from '@/Icons/github.svg'
import LeetcodeIcon from '@/Icons/leetcode.svg'
import LinkedinIcon from '@/Icons/linkedin.svg'
import UnsplashIcon from '@/Icons/unsplash.svg'
import { style } from './styles'

export function AboutPage() {
  return (
    <div className={style}>
      <div className="aboutMeStyle">
        I'm a Software Engineer trying to figure out what to delve into in life. Ever since I
        stumbled onto Hacker News, I've been obsessively reading countless blogs and essays I've
        come across, and it got me inspired. To see so many people actively investigating,
        exploring, and furthering their education in an unfettered sense got me thinking I should do
        the same. So the whole point of this website is to host blogs I write up in the hopes of
        becoming a better writer, communicator, and thinker. Writing has always been my weak point
        throughout my life, and I have always been self-conscious about how I came off, so
        hopefully, I'll be pushing out of my comfort zone and producing thoughts that catch people's
        attention.
      </div>
      <div className="linksStyle">
        <a href="https://github.com/NuclearOreo">
          <img className="github" src={GithubIcon} alt="" />
        </a>
        <a href="https://leetcode.com/nuclearoreo/">
          <img className="leetcode" src={LeetcodeIcon} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/ussama-azam-000191180/">
          <img className="linkedin" src={LinkedinIcon} alt="" />
        </a>
        <a href="https://unsplash.com/@ussamaazam">
          <img className="unsplash" src={UnsplashIcon} alt="" />
        </a>
      </div>
    </div>
  )
}
