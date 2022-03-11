import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Donut from 'Pages/Donut'
import About from 'Pages/About'
import PhotoGallery from 'Pages/PhotoGallery'
import Blog from 'Pages/Blog'
import ErrorPage from 'Pages/Error'
import Icon from 'Components/Icon'
import NavBar from 'Components/NavBar'

function App() {
  return (
    <Router>
      <Icon />

      <NavBar />

      <Routes>
        <Route path="/" element={<Donut />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<PhotoGallery />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

export default App
