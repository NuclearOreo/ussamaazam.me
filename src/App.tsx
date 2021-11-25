import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import AppStyle from './App.module.css'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import PhotoGallery from './Pages/PhotoGallery/PhotoGallery'
import Essays from './Pages/Essays/Essays'
import ErrorPage from './Pages/Error/Error'

const App = () => {
  return (
    <Router>
      <nav className={AppStyle.styles}>
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
