import { style } from './AboutStyle'
import GithubIcon from 'Icons/github.svg'
import LeetcodeIcon from 'Icons/leetcode.svg'
import LinkedinIcon from 'Icons/linkedin.svg'
import UnsplashIcon from 'Icons/unsplash.svg'

const About = () => {
  return (
    <div className={style}>
      <div className="aboutMeStyle">
        Hey, my name is Ussama Azam, and I'm a young software engineer early in my career. I have
        many interests that range from photography to random technical stuff to more random
        technical stuff. It seems to me that I'm a lifelong learner cause I can't seem to stop
        reading Hacker News and trying random projects, an obsession fueled by boredom. Ever since I
        learned about Y Combinator and constantly reading the great blogs that always pop up on the
        site, I've decided to attempt writing blogs. The whole goal of this website is to motivate
        me to start writing blogs (hopefully become a better writer in the process) and showcase my
        photos from my photography venture. Maybe I'll decide to go out of my way to showcase the
        exciting stuff I made, like the stupid donut on my home page.{' '}
      </div>
      <div className="linksStyle">
        <a href="https://github.com/NuclearOreo">
          <img src={GithubIcon} alt="" />
        </a>
        <a href="https://leetcode.com/nuclearoreo/">
          <img src={LeetcodeIcon} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/ussama-azam-000191180/">
          <img src={LinkedinIcon} alt="" />
        </a>
        <a href="https://unsplash.com/@ussamaazam">
          <img src={UnsplashIcon} alt="" />
        </a>
      </div>
    </div>
  )
}

export default About
