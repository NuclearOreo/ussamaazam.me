import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { style } from './AppStyles'
import Home from './Pages/Home'
import About from './Pages/About'
import PhotoGallery from './Pages/PhotoGallery'
import Essays from './Pages/Essays'
import ErrorPage from './Pages/Error'
import Icon from './Components/Icon'

const App = () => {
  return (
    <Router>
      <Icon />

      <nav className={style}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/essays">Essays</Link>
      </nav>

      <br />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<PhotoGallery />} />
        <Route path="/essays" element={<Essays />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

export default App
