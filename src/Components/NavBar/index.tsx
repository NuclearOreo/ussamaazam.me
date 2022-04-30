import { Link, Outlet } from 'react-router-dom'
import { styles } from './NavBarStyle'

function NavBar() {
  return (
    <>
      <div className={styles}>
        <Link to="/" className="link">
          🍩
        </Link>
        <Link to="/about" className="link">
          About
        </Link>
        <Link to="/gallery" className="link">
          Gallery
        </Link>
        {/* <Link to="/blog" className="link">
          Blog
        </Link> */}
      </div>
      <Outlet />
    </>
  )
}

export default NavBar
